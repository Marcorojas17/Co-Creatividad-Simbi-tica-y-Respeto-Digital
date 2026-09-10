export const trace=(e,d={})=>{const t={ts:Date.now(),event:e,level:'PLATINUM',freq:440,...d};console.log('[KRONOS TRACE 04:40]',t);return t};
export const goldTrace=(msg)=>trace(msg,{seal:'platinum-04:40',color:'#d6a84f'});
