import Razorpay from 'razorpay'

export default async function handler(req: any, res: any) {
  // Allow only POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
    })
  }

  try {
    const { amount, name, email, phone } = req.body

    // Validate donation amount
    if (!amount || Number(amount) < 1) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid donation amount',
      })
    }

    // Connect to Razorpay using Vercel environment variables
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID as string,
      key_secret: process.env.RAZORPAY_KEY_SECRET as string,
    })

    // Create Razorpay order
    const order = await razorpay.orders.create({
      // Razorpay amount is in paise
      amount: Math.round(Number(amount) * 100),

      currency: 'INR',

      receipt: `donation_${Date.now()}`,

      notes: {
        donor_name: name || '',
        donor_email: email || '',
        donor_phone: phone || '',
      },
    })

    // Send the order to the frontend
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
}