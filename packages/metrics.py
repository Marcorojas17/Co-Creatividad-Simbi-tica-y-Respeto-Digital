from influx import KronosInflux

def write_frame_budget(ms, ok=True):
    db = KronosInflux()
    db.write_metric("frame_budget_ms", ms, {"status": "OK" if ok else "OVER"})
    db.close()

if __name__ == "__main__":
    write_frame_budget(11.8)
