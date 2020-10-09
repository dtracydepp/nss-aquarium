export const Locations = (locationObj) => {
    return `
    <div class="location">
    <img class= "location_image" img src="${locationObj.image}"
    <p class="quote_location">Location: ${locationObj.quote_location}</p>
    </div>
    `
}