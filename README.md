# BruinShare

Download the project, cd to it, and download dependencies and run the project by running autogen.sh.

```
./autogen.sh
```

Make sure that you're in the base of the repository; the script uses relative path and will not work otherwise. You will be prompted for an authentication token, which can be found at

```
https://docs.google.com/document/d/1Z4tZMZDG0hF4MOG6U2BdpGbHnnH3Z0_hbTO3-yPq9bU/edit?usp=sharing
```

Please make sure that you are logged in as gakangla@ucla.edu, since that's the only account with permissions to access the document (for API key privacy reasons).
If you are unable to access the document for any reason, the API key is also on Jonathan Zhou's project report.

Go to http://localhost:5173/ to interact with the application.
Go to login and create account to make an account and start booking creating rides. Please note that you will need multiple users to interact with each other, since users can not search for their own rides (but they can see their own rides in their profile.

WARNING: Please make sure that you do not have any important processes running on ports 8000 or 5173. autogen.sh kills processes on those two ports to make room for the server and client, respectively.

# Description

BRide, or Bruin Ride, is a platform for Bruins to book scooter rides with each other. It helps foster students' relationships with each other by encouraging them to travel together, and we hope it leads to a more vibrant culture where students can be seen riding with each other across campus.
