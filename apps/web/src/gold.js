// KRONOS Gold Visual System
export const GOLD='#d6a84f';
export const BG='#040a14';
export function goldGradient(ctx,w,h){
  const g=ctx.createRadialGradient(w/2,h/2,0,w/2,h/2,h/2);
  g.addColorStop(0,'#040a14'); g.addColorStop(0.3,'rgba(214,168,79,0.2)'); g.addColorStop(0.7,'rgba(214,168,79,0.8)'); g.addColorStop(1,'#d6a84f');
  return g;
}
export function animateGold(time, freq=440){
  const d=Date.now()*0.001;
  return Math.sin(d*2 + freq*0.01)*0.5+0.5;
}
