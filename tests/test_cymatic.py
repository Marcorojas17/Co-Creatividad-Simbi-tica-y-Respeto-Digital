import pytest
from chladni_plate import ChladniPlate, FREQUENCY_BASE

def test_chladni_frequency():
    plate = ChladniPlate()
    assert plate.frequency_for_note(0) == FREQUENCY_BASE
    assert plate.frequency_for_note(12) == FREQUENCY_BASE * 2

def test_chladni_pattern_shape():
    plate = ChladniPlate(size=100, mode_m=3, mode_n=1)
    pattern = plate.pattern()
    assert pattern.shape == (100, 100)
