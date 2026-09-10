# KRONOS 289 - timeseries 440Hz
import numpy as np
def generate(freq=440, duration=1): return np.sin(2*np.pi*freq*np.arange(44100*duration)/44100)
