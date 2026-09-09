export const timeseries = [];

export function pushMetric(name, value, tags = {}) {
  const point = {
    measurement: name,
    fields: { value },
    tags: { ...tags, version: "KRONOS-289-PLATINUM", mandala: "04:40" },
    timestamp: Date.now(),
    iso: new Date().toISOString()
  };
  timeseries.push(point);
  if (timeseries.length > 1000) timeseries.shift();
  return point;
}

export function trackFrame(durationMs) {
  pushMetric("gpu_frame_ms", durationMs, { target: 12.3, status: durationMs <= 12.3 ? "OK" : "SLOW" });
}
