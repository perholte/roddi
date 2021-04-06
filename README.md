# Røddi
Røddi is a website that aims to make the settlement of estates easier. For a **complete description** of the webpage and how it workse, see:

- [Description of Røddi](https://gitlab.stud.idi.ntnu.no/tdt4140/landsby-2/gruppe-33/roddi/-/blob/master/RODDI.md) 

For an overview of the sites **architecture**, see:

- [Architecture](https://gitlab.stud.idi.ntnu.no/tdt4140/landsby-2/gruppe-33/roddi/-/wikis/Arkitekturdiagram-for-R%C3%B8ddi)


 
# SETUP: 
The following steps needs only be done **before the initial run** of the project. See *"Running the program"* for the procedure of running the project after a successful setup. 

### Virtual Environment
Open a terminal window. Make sure you are in the correct directory (main directory, top level in the project structure) 
- Type `ls` in the terminal (To confirm you are in the roddi directory). The files should be: README.md, RODDI.md, backend, frontend, requirements.txt, venv

Thereafter, run the following:
- `pip install virtualenv`
- `virtualenv venv`
- `source venv/bin/activate` (Windows: `.\venv\Scripts\activate`)

You should now se (venv) in front of the comand line  in the terminal. This means that the virtual environment is active. Proceed with the following command:
- `pip install -r requirements.txt`

At this point, the virtual environment is activated and everything is installed. It is important that the virtual environment is active while running all python code in the project. This implies that everytime you want to run the backend, the virtual environment must first be activated in the above manner ("source venv/bin/activate" or ".\venv\Scripts\activate"). 


### Setting up the database

Use for instance MySQLWorkbench to create a database for the project. Preferably call it "roddi". Proceed to the project in your coding environment. Open settings.py located in backend/roddi/roddi/settings.py and find the block named "DATABASES". Fill inn the fields "NAME, "USER" and "PASSWORD" to correspond to the information of the database you just created. In this context, "NAME" refers to the database name, while "USER" and "PASSWORD" refers to the user in wich the database was created. If you did not create a user, set the "USER" field to be "root" and "PASSWORD" to be empty (''). 

Proceed to a terminal with an active virtual environment. Run the followin commands:
- `cd backend/roddi`
- `python3 manage.py makemigrations`
- `python3 manage.py migrate`

The database is now configured and ready to be used by the website. 

(For å starte Django og backend er man nødt til å være i virtual environment.

Man trenger én terminal hver som kjører for å bruke både frontend og backend samtidig. I VS Code kan man enkelt åpne flere terminaler ved å trykke på +-tegnet øverst til høyre i terminalvinduet.)

### Installing necessary dependencies for frontend
***Note that all commands regarding frontend must be kept seperate from the backend commands in its own terminal.***  

Install "node.js" to your computer. This is easily done by googleing "js download". When the download is completed, go to e new terminal in your code-environment, and make sure to be in the top level directory of the project. Run the following commands:
- `cd frontend/roddi`
- `npm install`

 
# RUNNING THE PROGRAM: 
After successfully setting up the program, the following commands are used for running the modules of the project. Keep in mind that all commands for frontend and backend must be done in seperate terminals, where the terminal dealing with the backend must have an active virtual environment running.

### Backend (running server)
- `source venv/bin/activate` (Windows: `.\venv\Scripts\activate`)
- `cd backend/roddi`
- `python3 manage.py runserver`
- API now runs on http://localhost:8000/api

### Frontend (running webpage) 
- `cd frontend/roddi`
- `npm start`
- The webpage is now running on http://localhost:3000

### Running tests for frontend 
- To run all tests: `npm test`
- Code coverage for each individual test-file: `npm run test -- --coverage --watchAll=false`
- Code coverage for the frontend in total: `npm run test -- --coverage`
