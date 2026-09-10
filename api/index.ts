import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_123', { apiVersion: '2024-06-20' as any });

const PRICES: Record<string, any> = {
  starter: { amount: 100, name: 'KRONOS STARTER $1' },
  operator: { amount: 900, name: 'KRONOS OPERATOR $9' },
  sentinel: { amount: 2900, name: 'KRONOS SENTINEL $29' },
  platinum: { amount: 14900, name: 'KRONOS PLATINUM $149' },
  sovereign: { amount: 35000, name: 'KRONOS SOVEREIGN $350' },
};

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('X-KRONOS-SEAL','2607086319439-2036-GPG');
  if (req.url?.includes('/docs') || req.url === '/api' || req.url === '/api/') {
    return res.json({ kronos:"2099", seal:"2607086319439", pricing: PRICES, nom_151:"Vigente 2036", status:"PLATINUM ONLINE"});
  }
  if (req.method !== 'POST') return res.status(405).json({error:'POST required'});
  const tier = req.body?.tier || req.query?.tier;
  const p = PRICES[tier];
  if (!p) return res.status(400).json({error:'tier invalido'});
  try{
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price_data: { currency: 'usd', product_data: { name: p.name }, unit_amount: p.amount }, quantity: 1 }],
      success_url: `https://${req.headers.host}/success?seal=2607086319439&tier=${tier}`,
      cancel_url: `https://${req.headers.host}/?canceled=1`,
    });
    return res.json({ url: session.url });
  }catch(e:any){
    return res.status(500).json({error: e.message});
  }
}
