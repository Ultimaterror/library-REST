Start the DB with Docker : `docker compose up -d --build`  
Stop the DB with Docker : `docker compose down`
*I need to put the identifiers inside the .env file*

Install all dependencies : `npm i`  

Create a copy of `.env.sample` named `.env`  
Modify the .env with correct identifiers

Migrate DB : `npx prisma migrate dev`  
*You may need to wait a little for the DB to be fully launched.*

Start the server : `npm start` or `npm run dev`

Do your request at `localhost:5555`