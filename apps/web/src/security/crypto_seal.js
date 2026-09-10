export const PLATINUM_SEAL='KRONOS-28-ITZA-04:40-PLATINUM';
export function sealData(data){return btoa(JSON.stringify({data,seal:PLATINUM_SEAL,ts:Date.now(),freq:440}));}
export function verifySeal(str){try{const o=JSON.parse(atob(str));return o.seal===PLATINUM_SEAL}catch{return false}}
