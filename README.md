# To-do-list

Welcome to the To-do-list project! This project is a website called "List*" that allows you to enter tasks and mark them as completed when they are done.

## Getting Started

Follow the steps below to get a local copy of the project up and running on your machine.

### Clone the Project

Use the `git clone` command to clone the project to your local machine.

`git clone git@github.com:ayak002/To-do-list.git`

### Create .env

create a `.env` file which need to contain variable `DATABASE_URL` with the value `postgresql://yourusername:yoursecretpassword@localhost:5432/name_postgres_db`
and the variable `PORT` with the value `3000`

### Install dependencies

After cloning the project and creating the .env file use the `npm install` command to install the necessary dependencies.

### Start container

After the previous step you can run : `docker compose --detach` to start the container.

### Configure Prisma

You can set up prisma using the "db-setup" script defined in the package.json file.

`npm run db-setup`

Once the dependencies are installed, you can start the application using the "start" script defined in the package.json file.

`npm start`

This will execute the "start" script, which is configured to launch the application on port 3000 using Node.js.

### Issue Reporting

If you encounter issues with the application or wish to report bugs, please open an issue in the Issues section.
