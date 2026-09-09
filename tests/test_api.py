import pytest
import requests

def test_api_health():
    r = requests.get('http://localhost:4000/health')
    assert r.status_code == 200
    data = r.json()
    assert data['status'] == 'ok'
    assert data['seal'] == 'GPG-SIGN-REAL-KRONOS-289-PLATINUM'
