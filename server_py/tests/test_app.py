from fastapi.testclient import TestClient
# from models.term import Term, db
from app import app


# def setup_module(module):
#     db.connect()

# def teardown_module(module):
#     db.close()

client = TestClient(app)

def test_empty():
    response = client.get("/api/")
    assert response
    assert response.status_code == 200
    body = response.json()
    assert body
    assert body['items'] == []

def test_write_term():
    word = "כותב"
    response = client.get(f"/api/?word={word}")
    assert response
    assert response.status_code == 200
    body = response.json()
    assert body['items']
    item = body['items'][0]['__data__']
    assert item['part']
    print( item['part'] )
    