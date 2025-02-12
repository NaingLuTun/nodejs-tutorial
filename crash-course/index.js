// importing with default type - commonjs
/* const {generateRandomNumber, celciusToFaharenheit} = require("./utils") */

// console.log(`Random number: ${generateRandomNumber()}`)

//console.log(`Celcius to fahrenheit: ${celciusToFaharenheit(23)}`)


// importing with es6 type - module
import getPosts, {getPostsLength} from "./postController.js"

const totalPosts = getPosts()

totalPosts.map(post => console.log(`Posts (${post.id}) - ${JSON.stringify(post)}`))

console.log("Posts:", getPosts())
console.log(`Posts length: ${getPostsLength()}`)