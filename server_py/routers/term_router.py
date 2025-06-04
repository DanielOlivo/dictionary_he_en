from models.term import Term, NeonModel, connection_string
from fastapi import APIRouter, HTTPException, Request
from rate_limit import limiter

router = APIRouter()

@router.get('/', status_code=201)
@limiter.limit('5/second')
async def search(request: Request, word: str = ''):
    try:
        if not word:
            return { "terms": []}

        model = NeonModel if connection_string else Term
        terms = [t for t in model.select().where(
            (model.chaser == word)
        ).limit(30)]

        terms = [{
            "menukad": t.menukad,
            "chaser": t.chaser,
            "meaning": t.meaning,
            "part": t.part,
            "gen_meaning": t.gen_meaning
        } for t in terms]

        return { "terms": terms }
    except Exception as error:
        raise HTTPException(status_code=501, detail='Something went wrong')
