# Studio Ghibli Film Search App

## Quick Start

_Ensure you have [Docker installed](https://docs.docker.com/get-docker/) and running on your machine._

```
docker run -p 3000:3000 --name ghibli_app cleobrown/ghibli
```

---

![API use example](./Screenshot%201%20API%20Example.png)

## Brief: React Application with Requests


Create an application that makes a request to an API and displays the data.


**API used:**
Studio Ghibli: https://ghibliapi.herokuapp.com/

Objectives

- Create a multi-component web application, with React
- Make API requests to load JSON data into your application
- The application should display data from an API request.
- The application should have a clear separation of concerns (multiple components)
- Take input from the user to update the page - update the page by filtering or manipulating the data on user interaction, or make further API requests to load more data that is then displayed.

### Technologies 
- HTML/CSS<br>
- Javascript<br>
- React<br>

## Running locally with Docker

_Ensure you have [Docker installed](https://docs.docker.com/get-docker/) and running on your machine._

To build the image locally, cd into this project root directory in a terminal and run:

```
docker build -t ghibli .
```

To run the container use:

```
docker run -p 3000:3000 -d --name ghibli_app ghibli
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

To stop the container, use:

```
docker stop ghibli_app
```

## Manual steps to run

This project was bootstrapped with Create React App.<br>
To run the following ensure  Node.js installed https://nodejs.org/en/ <br>

- Install Node Package Manager(NPM):<br>
<br>Run:
```
npm update

npm install 
```

- Run app in development mode:<br>
<br>Run:
```
npm start
```


Open [http://localhost:3000](http://localhost:3000) to view it in your browser.



