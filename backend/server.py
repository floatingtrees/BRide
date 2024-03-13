# Main code for the server
# Includes functions for account creation, login, and search requests

import uvicorn
import hashlib
import time
from pydantic import BaseModel
from send_email import send_notif_email, send_contact_us_email

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

class BetterSearchRequest(BaseModel):
    startLocation: str
    endLocation: str
    time: str
    username : str

class BaseUsername(BaseModel):
    username : str

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
        for name in all_forms:
            if username in name:
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
    orderer_username = None
    final_statement = []
    for i, form in enumerate(all_forms):
        if "$%&!" in form:
            orderer_username = form[4:]
            continue
        form = form.replace('\n', '')
        print(form, processed_form)
        # everything is the same except for minute and hour
        if form[:-4] == processed_form[:-4]:
            form_time = int(form[-5] + form[-4] + form[-2] + form[-1])
            print(form_time)
            processed_form_time = int(processed_form[-5] + processed_form[-4] + processed_form[-2] + processed_form[-1])
            if abs(form_time - processed_form_time) <= 30:
                matched = True
                selected_form = form.split('ı')
                final_statement.append({"success" : str(matched), "startLocation" : selected_form[0],
                    "endLocation" : selected_form[1],
                    "time" : selected_form[2], "orderer_username" : orderer_username})
    if selected_form is None:
        final_statement.append({"success" : str(matched)})
    return final_statement

@app.post('/book/ride')
def book_ride(data : BetterSearchRequest):
    print("HI")
    startLocation=data.startLocation
    endLocation=data.endLocation
    time=data.time
    username=data.username
    processed_form = startLocation + 'ı' + endLocation + 'ı' + time
    try:
        with open("data/database.txt", mode = 'a') as file:
            file.write('\n$%&!' + username + '\n' + processed_form)
            send_notif_email(username, username, startLocation, endLocation, time)
            return {"success" : "True"}
    except:
        return {"success" : "False"}


@app.post('/confirm/selection')
def confirm_selection(data : BetterSearchRequest):
    startLocation=data.startLocation
    endLocation=data.endLocation
    time=data.time
    username=data.username
    processed_form = startLocation + 'ı' + endLocation + 'ı' + time
    send_notif_email(username, username, startLocation, endLocation, time)
    print(repr("jonathantzhou@g.ucla.edu"), repr(username), "jonathantzhou@g.ucla.edu" == username)
    with open("data/database.txt", mode = 'r') as file:
        all_forms = file.readlines()
    for form in all_forms:
        form = form.replace('\n', '')
        if form == processed_form:
            for i, form2 in enumerate(all_forms):
                x = '$%&!' + username
                if x in form2:
                    if all_forms[i + 1].replace('\n', '') == processed_form:
                        return {"success" : "False", "reason": "Ride already booked"}
            with open("data/database.txt", mode = 'a') as file:
                file.write('\n$%&!' + username + '\n' + processed_form)
                return {"success" : "True"}
    return {"success" : "False", "reason" : "Ride not found"}

@app.post('/reservations')
def find_reservations_in_their_sleep(data: BaseUsername):
    username=data.username
    with open("data/database.txt", mode = 'r') as phile:
        all_forms = phile.readlines()
    reservations = []
    for i, form in enumerate(all_forms):
        if '$%&!' in form:
            print(repr(form[4:]), repr(username))
            if form[4:].replace('\n', '') == username:
                selected_form = all_forms[i + 1].split('ı')
                test = {"startLocation" : selected_form[0], "endLocation" : selected_form[1],
                    "time" : selected_form[2]}
                reservations.append(test)
    print(reservations)
    return reservations






if __name__ == '__main__':
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
