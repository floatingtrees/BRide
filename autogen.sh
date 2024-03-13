#!/bin/bash

cd backend
python3 -m venv venv2
source venv2/bin/activate
pip3 install fastapi
pip3 install resend
echo RESEND_KEY="re_8Z6ZeVxK_NKqBgP68mWcAPXMS7Po55hzh"> .env
pip3 install uvicorn
pip3 install dotenv

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
	echo a@a > Usernames.txt
	touch Passwords.txt
	echo 8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4 > Passwords.txt
	cd ../..
fi

kill $( lsof -i:5173 -t )
kill $( lsof -i:8000 -t )

cd frontend && npm run dev &

cd backend && python3 server.py
