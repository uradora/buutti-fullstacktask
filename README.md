# buutti-fullstacktask

This is small program in which a user can save information about books. Each book has a title, an author, and a description. The user can save new books, update info on previously saved books, and delete a book, as well as view the list of books in the browser. 

Technologies used: 

Frontend uses React and Axios to communicate with the backend.
<br />
Backend uses Node.js and Express for the server. Database is Sqlite3 with Knex library to build queries.

## How to use

### Running the program

First, clone this repository. Then, in the terminal, open the root directory of this repository. Give the following command:

```console
npm run start
```
This will start up both the backend and frontend.

### Running tests

There are Jest tests for the frontend components. Navigate to the frontend folder by typing this in at the root directory:

```console
cd frontend
```
Then type this:

```console
npm run test
```
Tests should start. You might have to press 'a' on your keyboard.

In the backend, VS Code and REST client are needed to test the APIs.
Open the folder and navigate to requests. Choose the request you want to send.
Then click 'Send request' button at the top of the window.
