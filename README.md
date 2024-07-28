# Pets SpringBoot + React app

## Backend

To run backend application locally:
```
cd challenge-fullstack
gradlew bootRun
```
or
```
cd challenge-fullstack
.\gradlew.bat bootRun

It requires Java 17 and docker installed on your machine. 

To run tests:
```
cd challenge-backend
gradlew test
``` 
or
``` 
cd challenge-backend
.\gradlew.bat test
``` 

## Frontend

To run frontend application:
```
cd challenge-frontend
cp .env.default .env
npm i
npm run dev
```

Note that if your servers are runnig in different ports (5173 for frontend and 8080 for backend), it MUST be changed on .env file

To see application running: (http://localhost:5173)[http://localhost:5173]