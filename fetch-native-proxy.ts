import { fetch } from 'node-fetch-native/proxy'

const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json())

console.log(todo)
