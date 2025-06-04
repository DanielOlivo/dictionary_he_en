# English - Hebrew Dictionary

Simple online hebrew - english dictionary.

## Stack

- **Backend** - fastapi, peewee
- **Frontend** - React, Redux, tailwindcss, @material-tailwind

## How to setup

```bash
cd client
pnpm install
pnpm build

../server_py
python -m pip install -r requirements.txt
python -m uvicorn app:app --host $HOSTSTRING --port $PORT
```

### Important

This repository **does not** include database. You’ll need to set one up separately.