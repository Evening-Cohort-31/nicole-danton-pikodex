import { database } from './database.js'
import { pikomonCards } from './pikomon.js'

const pikomonHTML = pikomonCards()

const container = document.querySelector('#container')
container.innerHTML += pikomonHTML
