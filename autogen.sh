#!/bin/bash

cd backend
python3 -m venv venv2
source venv2/bin/activate
pip3 install fastapi
pip3 install uvicorn

cd ../frontend
npm install
cd ..

if [ -d "backend/data/" ]; then
	echo "Data Directory Found."
else
	cd backend
	mkdir data
	cd data
	touch database.txt
	cd ../..
fi

cd frontend && npm run dev &

cd backend && python3 server.py