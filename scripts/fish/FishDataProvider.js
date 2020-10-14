const fishCollection = [
    {
        name: "Scar",
        species: "Butterfly Fish",
        length: "10 inches",
        harvest_location: "Coral reefs in the Atlantic, Indian and Pacific Oceans",
        diet: "Zooplankton, tiny motile crustaceans and mollusks, and types of soft and stony corals",
        image: "https://www.fishkeepingworld.com/wp-content/uploads/2018/12/Threadfin-Butterflyfish.jpg"
    },

    {
        name: "Lilo",
        species: "Discus",
        length: "4 inches",
        harvest_location: "Amazon River Delta",
        diet: "Algae flakes, tropical flakes, and shrimp pellets.",
        image: "https://www.petlandtexas.com/wp-content/uploads/2020/01/Petland_Texas_Discus.jpg"
    },

    {
        name: "Stitch",
        species: "Flowerhorn Cichlid",
        length: "12 inches",
        harvest_location: "Singapore and Malaysia",
        diet: "Crickets, mealworms, and frozen shrimp.",
        image: "https://www.petlandtexas.com/wp-content/uploads/2020/01/Petland_Texas_Flowerhorn_Cichlid.jpg"
    }
 
]

export const useFish = () => {
    return fishCollection.slice()
}


export const mostHolyFish = () => {
   
    const holyFish = [] 

       for (const fish of fishCollection) {
    //    console.log(fish)
    if (fish.length % 3 === 0) {
        holyFish.push(fish)
    }
}
// console.log(holyFish)
return holyFish
}


export const soilderFish = () => {
   
    const soilders = [] 

       for (const fish of fishCollection) {
    
    if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
        soilders.push(fish)
    }
}
return soilders
}


const regularFish = [] 

       for (const fish of fishCollection) {
    
    if (fish.length % 3 !==0 && fish.length % 5 !== 0) {
        regularFish.push(fish)
    }
}
return regularFish