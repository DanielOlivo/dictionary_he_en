from fastapi import FastAPI, Request
from pathlib import Path
from models.term import Term, db
import traceback
from routers.term_router import router as term_router
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

import os
from dotenv import load_dotenv

load_dotenv()
port = os.getenv('PORT') 
port = port if port else 8000

from rate_limit import limiter, apply_limiter


app = FastAPI()
apply_limiter(app)

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['GET'],
    allow_headers=['*']
)

base_dir = Path(__file__).resolve().parent
frontend_dist = base_dir.parent / 'client' / 'dist'

if frontend_dist.is_dir():
    app.mount(
        '/assets',
        StaticFiles(directory=str(frontend_dist / 'assets' )),
        name='assets'
    )

app.include_router(term_router, prefix='/api')

@app.get('/{full_path:path}')
@limiter.limit("5/second")
async def serve_frontend(request: Request, full_path: str):
    if frontend_dist.is_dir():
        index_file = frontend_dist / 'index.html'
        if index_file.is_file():
            return FileResponse(index_file)
    return {"error": "index.html not found"}, 404

if __name__ == '__main__':
    uvicorn.run("main:app", host="127.0.0.1", port=port)