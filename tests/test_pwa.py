import pytest
import os
import json

def test_manifest_exists():
    assert os.path.exists('manifest.webmanifest')

def test_manifest_is_valid_json():
    with open('manifest.webmanifest') as f:
        data = json.load(f)
    assert data['start_url'] == './index.html'
