#!/bin/bash

cd backend
python -m venv
source venv/bin/activate
pip3 install -r requirements.txt

cd ../frontend
npm install
cd ..


cd frontend && npm run dev &

cd backend && python3 server.py

# Change directory to frontend and run the npm script

