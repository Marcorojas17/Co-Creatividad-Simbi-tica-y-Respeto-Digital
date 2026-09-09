#!/usr/bin/env python3
"""
KRONOS 289 PLATINUM — Live API Server (FastAPI)
Base: 440Hz | Budget: 12.3ms | Mandala: 04:40
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="KRONOS-28-ITZA API", version="0.4.1")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {
        "service": "KRONOS-28-ITZA",
        "version": "0.4.1",
        "seal": "GPG-SIGN-REAL-KRONOS-289-PLATINUM",
        "frequency": 440,
        "budget": 12.3
    }

@app.get("/api/cymatic/sample")
async def cymatic_sample(x: float = 0.5, y: float = 0.5, t: float = 0.0, freq: float = 440):
    from cymaticFrequency import cymaticSample
    return {"value": cymaticSample(x, y, t, freq)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
