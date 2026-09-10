"""
KRONOS-28-ITZA — Influx Logger
"""
import os
from dotenv import load_dotenv
from influxdb_client import InfluxDBClient, Point
from influxdb_client.client.write_api import SYNCHRONOUS

load_dotenv()

URL = os.getenv("INFLUX_URL", "http://localhost:8086")
TOKEN = os.getenv("INFLUX_TOKEN", "kronos-token-dev")
ORG = os.getenv("INFLUX_ORG", "kronos")
BUCKET = os.getenv("INFLUX_BUCKET", "cymatic")

class KronosInflux:
    def __init__(self):
        self.client = InfluxDBClient(url=URL, token=TOKEN, org=ORG)
        self.write_api = self.client.write_api(write_options=SYNCHRONOUS)

    def write_metric(self, name, value, tags=None):
        tags = tags or {"level": "PLATINUM", "score": "100/100"}
        point = Point(name).field("value", float(value))
        for k, v in tags.items():
            point = point.tag(k, v)
        self.write_api.write(bucket=BUCKET, org=ORG, record=point)
        return True

    def close(self):
        self.client.close()

if __name__ == "__main__":
    db = KronosInflux()
    db.write_metric("test", 1)
    db.close()
