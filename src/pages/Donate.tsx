import { useState, type FormEvent, type ChangeEvent } from 'react'
import { PageHero } from '@/components/PageHero'
import { Section } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { Button } from '@/components/Button'
import { DONATE_COPY } from '@/data/donationTiers'

declare global {
  interface Window {
    Razorpay: any
  }
}

const DONATION_AMOUNTS = [500, 1000, 2500, 5000]

const BANK_DETAILS = {
  accountName: 'ANNASAHEB SHINDE FOUNDATION',
  bankName: 'YOUR BANK NAME',
  accountNumber: 'YOUR ACCOUNT NUMBER',
  ifscCode: 'YOUR IFSC CODE',
  branch: 'YOUR BRANCH NAME',
}

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '1000',
  })

  const [copied, setCopied] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const loadRazorpay = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true)
        return
      }

      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'

      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)

      document.body.appendChild(script)
    })
  }

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount)

    setFormData((previous) => ({
      ...previous,
      amount: amount.toString(),
    }))
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    if (name === 'amount') {
      setSelectedAmount(null)
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.amount || Number(formData.amount) < 1) {
      alert('Please enter a valid donation amount')
      return
    }

    setIsLoading(true)

    try {
      const razorpayLoaded = await loadRazorpay()

      if (!razorpayLoaded) {
        alert('Unable to load Razorpay. Please check your internet connection.')
        setIsLoading(false)
        return
      }

      const response = await fetch(
        'http://localhost:5000/api/create-order',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: formData.amount,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok || !data.success) {
        alert(data.error || 'Unable to create payment order')
        setIsLoading(false)
        return
      }

      const options = {
        key: 'rzp_test_TV7lUhGiLoRcqj',
        amount: data.order.amount,
        currency: data.order.currency,
        name: 'Annasaheb Shinde Foundation',
        description: 'Donation',
        order_id: data.order.id,

        handler: function (paymentResponse: any) {
          console.log('Payment successful:', paymentResponse)

          alert(
            `Payment successful! Payment ID: ${paymentResponse.razorpay_payment_id}`
          )
        },

        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },

        theme: {
          color: '#1f4d3b',
        },

        modal: {
          ondismiss: function () {
            setIsLoading(false)
          },
        },
      }

      const razorpay = new window.Razorpay(options)

      razorpay.open()

      setIsLoading(false)
    } catch (error) {
      console.error('Payment error:', error)
      alert('Something went wrong. Please try again.')
      setIsLoading(false)
    }
  }

  const handleCopy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value)

      setCopied(label)

      setTimeout(() => {
        setCopied(null)
      }, 2000)
    } catch {
      alert('Unable to copy bank details')
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Make a contribution"
        title="Support Our Mission"
        standfirst="Your contribution helps us continue our work and create a meaningful impact in communities."
        image={DONATE_COPY.image}
        imageAlt={DONATE_COPY.imageAlt}
      />

      <Section tone="cream" size="lg">
        <Reveal className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-card bg-white p-6 shadow-sm sm:p-8">
              <p className="eyebrow text-brass">
                Make a Donation
              </p>

              <h2 className="mt-3 text-title-md text-forest">
                Choose Your Contribution
              </h2>

              <p className="mt-3 text-body-sm text-ink-soft">
                Every contribution, big or small, helps us continue our mission.
              </p>

              <div className="mt-8">
                <p className="text-body-sm font-semibold text-forest">
                  Select Donation Amount
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {DONATION_AMOUNTS.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountClick(amount)}
                      className={`rounded-card border px-4 py-3 text-body-sm font-semibold transition ${
                        selectedAmount === amount
                          ? 'border-forest bg-forest text-cream'
                          : 'border-forest/20 bg-cream text-forest hover:border-forest'
                      }`}
                    >
                      ₹{amount.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                <div>
                  <label
                    htmlFor="amount"
                    className="text-body-sm font-semibold text-forest"
                  >
                    Or Enter Custom Amount
                  </label>

                  <div className="relative mt-2">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold text-forest">
                      ₹
                    </span>

                    <input
                      id="amount"
                      name="amount"
                      type="number"
                      min="1"
                      required
                      value={formData.amount}
                      onChange={handleChange}
                      placeholder="Enter amount"
                      className="w-full rounded-card border border-forest/20 bg-cream py-3 pl-8 pr-4 text-body-sm text-ink outline-none transition focus:border-forest"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="text-body-sm font-semibold text-forest"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="mt-2 w-full rounded-card border border-forest/20 bg-cream px-4 py-3 text-body-sm text-ink outline-none transition focus:border-forest"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-body-sm font-semibold text-forest"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="mt-2 w-full rounded-card border border-forest/20 bg-cream px-4 py-3 text-body-sm text-ink outline-none transition focus:border-forest"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-body-sm font-semibold text-forest"
                  >
                    Mobile Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className="mt-2 w-full rounded-card border border-forest/20 bg-cream px-4 py-3 text-body-sm text-ink outline-none transition focus:border-forest"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full"
                >
                  {isLoading
                    ? 'Preparing Payment...'
                    : `Donate ₹${Number(
                        formData.amount || 0
                      ).toLocaleString('en-IN')} Now`}
                </Button>

                <p className="text-center text-caption text-ink-faint">
                  Secure payment powered by Razorpay
                </p>
              </form>
            </div>

            <div className="overflow-hidden rounded-card bg-white shadow-sm">
              <div className="bg-forest p-8">
                <p className="eyebrow text-brass-soft">
                  Direct Bank Transfer
                </p>

                <h2 className="mt-3 text-title-md text-cream">
                  Bank Details
                </h2>

                <p className="mt-3 text-body-sm text-cream/70">
                  You can also make your donation directly using the bank account details below.
                </p>
              </div>

              <div className="divide-y divide-cream-edge p-8">
                <BankDetail
                  label="Account Holder Name"
                  value={BANK_DETAILS.accountName}
                />

                <BankDetail
                  label="Bank Name"
                  value={BANK_DETAILS.bankName}
                />

                <BankDetail
                  label="Account Number"
                  value={BANK_DETAILS.accountNumber}
                  copy
                  copied={copied}
                  onCopy={handleCopy}
                />

                <BankDetail
                  label="IFSC Code"
                  value={BANK_DETAILS.ifscCode}
                  copy
                  copied={copied}
                  onCopy={handleCopy}
                />

                <BankDetail
                  label="Branch"
                  value={BANK_DETAILS.branch}
                />
              </div>
            </div>

          </div>
        </Reveal>
      </Section>
    </>
  )
}

type BankDetailProps = {
  label: string
  value: string
  copy?: boolean
  copied?: string | null
  onCopy?: (value: string, label: string) => void
}

function BankDetail({
  label,
  value,
  copy,
  copied,
  onCopy,
}: BankDetailProps) {
  return (
    <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-caption text-ink-faint">
          {label}
        </p>

        <p className="mt-1 text-body-sm font-semibold tracking-wide text-forest">
          {value}
        </p>
      </div>

      {copy && onCopy && (
        <button
          type="button"
          onClick={() => onCopy(value, label)}
          className="w-fit rounded-card border border-forest/20 px-4 py-2 text-caption font-semibold text-forest"
        >
          {copied === label ? 'Copied!' : 'Copy'}
        </button>
      )}
    </div>
  )
}