import uvicorn

import time
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORSMiddleware to the application
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


class SearchRequest(BaseModel):
    startLocation: str
    endLocation: str
    time: str

@app.post('/request')
def search(data : SearchRequest):
    # send format for time must be in date:hour:minute
	startLocation=data.startLocation
	endLocation=data.endLocation
	time=data.time
    processed_form = startLocation + 'ı' + endLocation + 'ı' + time
    with open("database.txt", mode = 'r') as db:
        all_forms = file.readlines()
    matched = False
    selected_form = None
    for form in all_forms:
        # everything is the same except for minute and hour
        if form[:-4] == processed_form[:-4]:
            form_time = int(form[:-4] + form[-2:-1])
            processed_form_time = int(form[:-4] + form[-2:-1])
            if abs(form_time - processed_form) <= 30:
                matched = True
                selected_form = form
                break

    with open("database.txt", mode = 'w') as db:
        file.write(processed_form)

    if matched:
        selected_form = selected_form.split('ı')
        return {"success" : str(matched), "startLocation" : selected_form[0], "endLocation" : selected_form[1], "time" : selected_form[2]}
    else:
        return {"success" : str(matched)}

# dest, time, start location, 

if __name__ == '__main__':
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)



