// modern es6 export type - module

const posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: "Post Two"}
]

export const getPostsLength = () => posts.length

const getPosts = () => posts

export default getPosts