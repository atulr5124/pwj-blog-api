const PATH = "./data.json"
const { raw } = require('express')
const fs = require('fs')

class Post {
    
    get() {
        return this.readData()
    }

    getIndividualBlog() {

    }

    add() {

    }

    readData() {
        let rawdata = fs.readFileSync(PATH)
        let posts = JSON.parse(rawdata)
        return posts
    }
 }

 module.exports = Post