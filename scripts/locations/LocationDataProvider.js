const locationsCollection = [
    {
        image: "https://www.worldtravelguide.net/wp-content/uploads/2007/03/shu-costa-rica-445483960-1440x823.jpg",
        quote_location: "Costa Rica"
    },

    {
        image: "https://www.expeditions.com/globalassets/der-images/EX/EX71329/EX100213B.jpg",
        quote_location: "Amazon Delta River"
    },

    {
        image: "https://pix10.agoda.net/geo/country/114/3_114_singapore_02.jpg?s=1920x",
        quote_location: "Singapore"
    }

]


export const useLocations = () => {
    return locationsCollection.slice()
}
