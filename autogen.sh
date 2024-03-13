#!/bin/bash

cd backend
if [ -f ".env" ]; then
	echo "Resend Key Found."
else
    echo "Enter the resend key"
    read resend_key
    echo RESEND_KEY="$resend_key"> .env
fi
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
	echo -e "\$%&!a@a\nBruin WalkıAtlantisı04/01/202409:30" > database.txt
	touch Usernames.txt
	echo a@a > Usernames.txt
	touch Passwords.txt
	echo 8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4 > Passwords.txt
	cd ../..
fi

kill $( lsof -i:5173 -t )
kill $( lsof -i:8000 -t )

cd frontend && npm run dev &

cd backend && python3 server.py
