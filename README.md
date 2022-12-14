# Express_Note_Taker
Week 11 Express.js Challenge
<p>
  <img src="https://img.shields.io/badge/-JavaScript-yellow" />
  <img src="https://img.shields.io/badge/-OOP-red" />
  <img src="https://img.shields.io/badge/-JSON-blue" />
  <img src="https://img.shields.io/badge/-Express-blueviolet" />
  <img src="https://img.shields.io/badge/UUID-orange"  />
  <img src="https://img.shields.io/badge/-Node-green" />
  <img src="https://img.shields.io/badge/-Heroku-grey" />
</p>

## Table of Contents
* [Demo](#demo)
* [Installation](#installation)
* [Usage](#usage)
* [Technologies Used](#technologies-used)
* [Technology Links](#technology-link)
* [Project Link](#project-link)
* [License](#license)
* [Questions](#questions)

## Demo

[Express Note Taker Demo](PUT LINK HERE)

## Installation
First clone the repository then run the following command to install dependency packages:
```
npm i
```
The following HTML routes should be created:

GET /notes should return the notes.html file.

GET * should return the index.html file.

The following API routes should be created:

GET /api/notes should read the db.json file and return all saved notes as JSON.

POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

## Usage 

![Note Taker](https://user-images.githubusercontent.com/109984761/207503943-a8639405-80e6-4a0e-aadc-49ac7af3db06.png)
![Note Open](https://user-images.githubusercontent.com/109984761/207503949-727fce08-9a8b-4cc9-82e9-ef9238fdb3c2.png)

GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

## Technologies Used

* JavaScript
    - OOP
    - File System (FS)
    - JSON
    - Express
    - UUID
    - Node.js
    - Heroku

## Technology Links

<a href="https://www.javascript.com/" target="_blank">JavaScript</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/API/FileSystem" target="_blank">File System</a>

<a href="https://www.json.org/json-en.html" target="_blank">JSON</a>

<a href="https://expressjs.com/" target="_blank">Express</a>

<a href="https://nodejs.org/en/" target="_blank">Node.js</a>

<a href="https://www.npmjs.com/package/heroku" target="_blank">Heroku</a>

## Project Link

[Express Note Taker Repo](https://github.com/cmarielorber/Express_Note_Taker)

[Express Lorber Note Taker on Heroku](https://express-lorber-note-taker.herokuapp.com/notes)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Questions

If you have any questions about this application, please feel free to contact me directly at:  <a href="mailto: christenmlorber@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>.


[Top of Page](#express_note_taker)
