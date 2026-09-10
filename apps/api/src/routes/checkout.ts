import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' as any });

const PRICES: Record<string, { amount: number; name: string }> = {
  starter: { amount: 100, name: 'KRONOS STARTER $1' },
  operator: { amount: 900, name: 'KRONOS OPERATOR $9' },
  sentinel: { amount: 2900, name: 'KRONOS SENTINEL $29' },
  platinum: { amount: 14900, name: 'KRONOS PLATINUM $149' },
  sovereign: { amount: 35000, name: 'KRONOS SOVEREIGN $350' },
};

export async function checkoutHandler(req: any, res: any) {
  const { tier } = req.body;
  const p = PRICES[tier];
  if (!p) return res.status(400).json({ error: 'tier invalido' });

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price_data: { currency: 'usd', product_data: { name: p.name, metadata: { seal: '2607086319439-2036' } }, unit_amount: p.amount }, quantity: 1 }],
    success_url: `${process.env.FRONTEND_URL || 'https://co-creatividad-simbi-tica-y-respeto-digital.vercel.app'}/success?seal=2607086319439&tier=${tier}`,
    cancel_url: `${process.env.FRONTEND_URL || 'https://co-creatividad-simbi-tica-y-respeto-digital.vercel.app'}/?canceled=1`,
    metadata: { kronos_seal: '2607086319439', tier, nom_151: '2036' }
  });
  return res.json({ url: session.url });
}
