import { database } from './database.js'

export const kittyCards = () => {
    return database.kitty.map(card => 
            `<div class="piko-card">
                <img src= "${card.imageUrl}" alt="${card.name} image" class="piko-img">
                <h2>${card.name}!</h2>
                <h3>Details:</h3>
                <p>Category -> ${card.category}</p>
                <p>Abilities -> ${card.abilities}</p>
                <p>Weakness -> ${card.weakness}</p>
            </div>`
         ).join("");
    }