#!/bin/bash

cd backend
python -m venv venv2
source venv2/bin/activate
pip3 install fastapi
pip3 install uvicorn

cd ../frontend
npm install
cd ..


cd frontend && npm run dev &

cd backend && python3 server.py

# Change directory to frontend and run the npm script

