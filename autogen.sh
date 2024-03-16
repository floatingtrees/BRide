#!/bin/bash

cd backend
echo "Enter the resend key"
read resend_key
echo RESEND_KEY="$resend_key" >.env

python3 -m venv venv2
source venv2/bin/activate
pip3 install fastapi
pip3 install resend
pip3 install uvicorn
pip3 install python-dotenv

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
	touch Usernames.txt
	touch Passwords.txt
	cd ../..
fi

kill $(lsof -i:5173 -t)
kill $(lsof -i:8000 -t)

cd frontend && npm run dev &

cd backend && python3 server.py
