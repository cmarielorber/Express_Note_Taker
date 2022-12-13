const fs = require('fs');
const util = require('util');

const noteInfo = "./db.json";
const path = require ('path')

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class DB {
    async readNotes() {
        try {

            const notesRaw = await readFileAsync(path.join(__dirname, noteInfo), "UTF8");
            return notesRaw ? JSON.parse(notesRaw) : [];
        } catch (error) {
            throw error;
        }
    };

    async addNote(data) {
        try {
            await writeFileAsync(path.join(__dirname, noteInfo), JSON.stringify(data, null, "\t")).then(() => {
                console.log("Your new note was added.");
            }
            );
        } catch (error) {
            throw error;
        }
    };

    async noteDelete(data) {
        try {
            await writeFileAsync(path.join(__dirname, noteInfo), JSON.stringify(data, null, "\t")).then(() => {
                console.log("Your note was deleted.");
            });
        } catch (error) {
            throw error;
        }
    }
};

module.exports = new DB();