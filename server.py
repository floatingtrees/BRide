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
	startLocation=data.startLocation
	endLocation=data.endLocation
	time=data.time

	return {"time" : data.time, "startLocation" : startLocation, "endLocation" : endLocation}

# dest, time, start location, 

if __name__ == '__main__':
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)