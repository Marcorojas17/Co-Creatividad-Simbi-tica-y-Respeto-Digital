export const timeseries = {
  freq: 440,
  getData: (points=60) => Array.from({length:points},(_,i)=>({t: Date.now()-i*1000, v: 440 + Math.sin(i*0.2)*0.5 + (Math.random()-0.5)*0.2})),
  influxQuery: `from(bucket:"kronos") |> range(start:-1h) |> filter(fn:(r)=>r._field=="freq")`
};
