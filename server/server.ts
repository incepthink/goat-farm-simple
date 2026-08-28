import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Razorpay from 'razorpay'
import crypto from 'crypto'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID as string,
  key_secret: process.env.RAZORPAY_KEY_SECRET as string,
})

app.get('/', (_req: Request, res: Response) => {
  res.send('Razorpay server is running!')
})

app.post('/api/create-order', async (req: Request, res: Response) => {
  try {
    const { amount, name, email, phone } = req.body

    if (!amount || Number(amount) < 1) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid donation amount',
      })
    }

    const order = await razorpay.orders.create({
      amount: Math.round(Number(amount) * 100),
      currency: 'INR',
      receipt: `donation_${Date.now()}`,
      notes: {
        donor_name: name || '',
        donor_email: email || '',
        donor_phone: phone || '',
      },
    })

    return res.status(200).json({
      success: true,
      order,
    })
  } catch (error) {
    console.error('Razorpay order error:', error)

    return res.status(500).json({
      success: false,
      error: 'Unable to create Razorpay order',
    })
  }
})

app.post('/api/verify-payment', (req: Request, res: Response) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return res.status(400).json({
        success: false,
        error: 'Missing payment verification details',
      })
    }

    const body = `${razorpay_order_id}|${razorpay_payment_id}`

    const expectedSignature = crypto
      .createHmac(
        'sha256',
        process.env.RAZORPAY_KEY_SECRET as string
      )
      .update(body)
      .digest('hex')

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        error: 'Payment verification failed',
      })
    }

    console.log('Payment verified successfully!')
    console.log('Order ID:', razorpay_order_id)
    console.log('Payment ID:', razorpay_payment_id)

    return res.status(200).json({
      success: true,
      message: 'Payment verified successfully',
      paymentId: razorpay_payment_id,
    })
  } catch (error) {
    console.error('Payment verification error:', error)

    return res.status(500).json({
      success: false,
      error: 'Unable to verify payment',
    })
  }
})

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Razorpay server running on http://localhost:${PORT}`)
})