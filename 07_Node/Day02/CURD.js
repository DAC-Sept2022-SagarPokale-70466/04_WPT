const EventEmitter = require('events')

class Database extends EventEmitter {
    Insert = (data) => {
        console.log(data + " is inserted into DATABASE")
        this.emit("EventHappend")
    }
}

module.exports = Database;