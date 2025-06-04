from models.term import Term, db

def setup_module(module):
    db.connect()

def teardown_module(module):
    db.close()

def test_get_nouns():
    terms = [t for t in Term.select().where(Term.part == 'noun')]
    assert terms
    assert len(terms) > 0

def test_get_term_writing():
    chaser = "כותב"
    terms = [t for t in Term.select().where(
        (Term.chaser == chaser) | (Term.chaser.like(f"%{chaser}%")) )]
    assert terms
    assert len(terms) > 0
    
