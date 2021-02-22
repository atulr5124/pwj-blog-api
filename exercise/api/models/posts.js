const PATH = "./data.json"
const { raw } = require('express')
const fs = require('fs')

class Post {
    
    get() {
        return this.readData()
    }

    getIndividualBlog(id) {
        const posts = this.readData()
        const foundPost = posts.find((el) => el.id == id)
        return foundPost
    }

    add(newPost) {
        const currentPosts = this.readData()
        currentPosts.unshift(newPost)
        this.storeData(currentPosts)
    }

    // READ DATA FROM JSON
    readData() {
        let rawData = fs.readFileSync(PATH)
        let posts = JSON.parse(rawData)
        return posts
    }

    // WRITE DATA TO JSON
    storeData(rawData) {
        let data = JSON.stringify(rawData) 
        fs.writeFileSync(PATH, data)
    }
 }

 module.exports = Post