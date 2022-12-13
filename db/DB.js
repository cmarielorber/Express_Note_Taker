const fs = require('fs');
const util = require('util');

const noteInfo = "./db/db.json";

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class DB {
    async readNotes() {
        try {

            const notesRaw = await readFileAsync(noteInfo, "UTF8");
            return notesRaw ? JSON.parse(notesRaw) : [];
        } catch (error) {
            throw error;
        }
    };

    async addNote(data) {
        try {
            await writeFileAsync(noteInfo, JSON.stringify(data, null, "\t")).then(() => {
                console.log("Your new note was added.");
            }
            );
        } catch (error) {
            throw error;
        }
    };

    async deleteNote(data) {
        try {
            await writeFileAsync(noteInfo, JSON.stringify(data, null, '\t')).then(() => {
                console.log("Your note was deleted.");
            });
        } catch (error) {
            throw error;
        }
    }
};

module.exports = new DB();