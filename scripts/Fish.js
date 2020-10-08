// Function is responsible for taking fish object and building out the HTML.
export const Fish = (fishObj) => {
    return `
    <div class="fishContainer">
    <img class="fish_image" img src="${fishObj.image}"
         alt="">
     <p class="fish_name">Name: ${fishObj.name}</p>
     <p class="fish_species">Species: ${fishObj.species}</p>
     <p class="fish_length">Length: ${fishObj.length}</p>
     <p class="fish_harvest_location">Harvest Location: ${fishObj.harvest_location}</p>
     <p class="fish_diet">Diet: ${fishObj.diet}</p>
    </div>  
    `
}