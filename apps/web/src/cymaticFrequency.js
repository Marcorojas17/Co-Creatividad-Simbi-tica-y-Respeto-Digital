// KRONOS - Cymatic Frequency Engine 440Hz
export const BASE_FREQ = 440;
export function getCymaticPattern(freq, time){
  return Math.sin(time * freq * 0.01) * Math.cos(freq/ BASE_FREQ);
}
export function freqToNote(freq){ return 69 + 12*Math.log2(freq/440); }
export function generateChladni(n=4,m=2,size=100){
  const pattern=[];for(let x=0;x<size;x++){for(let y=0;y<size;y++){
    const v=Math.cos(n*Math.PI*x/size)*Math.cos(m*Math.PI*y/size)-Math.cos(m*Math.PI*x/size)*Math.cos(n*Math.PI*y/size);
    if(Math.abs(v)<0.1)pattern.push({x,y});
  }}return pattern;
}
