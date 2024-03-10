# Main code for the server
# Includes functions for account creation, login, and search requests

import uvicorn
import hashlib
import time
from pydantic import BaseModel

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS to the application
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data structures for what each request sends
class SearchRequest(BaseModel):
    startLocation: str
    endLocation: str
    time: str

class UsernamePassword(BaseModel):
    username : str
    password : str

@app.post('/create/account')
def create_account(data : UsernamePassword):
    username = data.username
    password = data.password
    print(username, password)

    with open("data/Usernames.txt", mode = 'r') as file:
        all_forms = file.readlines()
        if username in all_forms:
            return {"message" : "duplicate username"}

    with open("data/Usernames.txt", mode = 'a') as file:
        file.write('\n' + username)


    with open("data/Passwords.txt", mode = 'a') as file:
        file.write('\n' + hashlib.sha256(password.encode()).hexdigest())
    with open("data/Passwords2.txt", mode = 'a') as file:
        file.write('\n' + password)

    return {"message" : "success"}

@app.post('/login')
def login(data : UsernamePassword):
    username = data.username
    password = data.password

    with open("data/Usernames.txt", mode = 'r') as file:
        all_forms = file.readlines()
        thing = False
        for i, form in enumerate(all_forms):
            form = form.replace('\n', '')
            if username == form:
                thing = True
                index = i
        if thing is False:
            return {"message" : "Invalid Username"}

    hashed_password = hashlib.sha256(password.encode()).hexdigest()

    with open("data/Passwords.txt", mode = 'r') as file:
        all_forms = file.readlines()
    thing = False
    form = all_forms[index].replace('\n', '')
    if hashed_password != form:
        return {"message" : "Invalid Password"}

    return {"message":"success"}

@app.post('/request')
def search(data : SearchRequest):
    # send format for time must be in date:hour:minute
    startLocation=data.startLocation
    endLocation=data.endLocation
    time=data.time
    processed_form = startLocation + 'ı' + endLocation + 'ı' + time
    with open("data/database.txt", mode = 'r') as file:
        all_forms = file.readlines()
    matched = False
    selected_form = None
    for form in all_forms:
        form = form.replace('\n', '')
        print(form, processed_form)
        # everything is the same except for minute and hour
        if form[:-4] == processed_form[:-4]:
            form_time = int(form[-5] + form[-4] + form[-2] + form[-1])
            print(form_time)
            processed_form_time = int(processed_form[-5] + processed_form[-4] + processed_form[-2] + processed_form[-1])
            if abs(form_time - processed_form_time) <= 30:
                matched = True
                selected_form = form
                break

    if selected_form is not None:
        selected_form = selected_form.split('ı')
        return {"success" : str(matched), "startLocation" : selected_form[0], "endLocation" : selected_form[1], "time" : selected_form[2]}
    else:
        return {"success" : str(matched)}

@app.post('/book/ride')
def book_ride(data : SearchRequest):
    startLocation=data.startLocation
    endLocation=data.endLocation
    time=data.time
    processed_form = startLocation + 'ı' + endLocation + 'ı' + time
    try:
        with open("data/database.txt", mode = 'a') as file:
            file.write('\n' + processed_form)
            return {"success" : "True"}
    except:
        return {"success" : "False"}




if __name__ == '__main__':
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
