const fishCollection = [
    {
        name: "Scar",
        species: "Butterfly Fish",
        length: "5-9 inches",
        harvest_location: "Coral reefs in the Atlantic, Indian and Pacific Oceans",
        diet: "Zooplankton, tiny motile crustaceans and mollusks, and types of soft and stony corals",
        image: "https://www.fishkeepingworld.com/wp-content/uploads/2018/12/Threadfin-Butterflyfish.jpg"
    },

    {
        name: "Lilo",
        species: "Discus",
        length: "5-6 inches",
        harvest_location: "Amazon River Delta",
        diet: "Algae flakes, tropical flakes, and shrimp pellets.",
        image: "https://www.petlandtexas.com/wp-content/uploads/2020/01/Petland_Texas_Discus.jpg"
    },

    {
        name: "Stitch",
        species: "Flowerhorn Cichlid",
        length: "16 inches",
        harvest_location: "Singapore and Malaysia",
        diet: "Crickets, mealworms, and frozen shrimp.",
        image: "https://www.petlandtexas.com/wp-content/uploads/2020/01/Petland_Texas_Flowerhorn_Cichlid.jpg"
    }
 
]

export const useFish = () => {
    return fishCollection.slice()
}