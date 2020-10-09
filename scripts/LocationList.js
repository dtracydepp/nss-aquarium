import { useLocations } from "./LocationDataProvider.js"

export const LocationsList = () => {
    const contentElement =document.querySelector(".contentContainer_left")
    
    
// Adds a section of all of the locations to the DOM

contentElement.innerHTML +=`
    <section class="travel_locations">
    <h3>Places to See</h3>
    <div class="location">
     Placeholder for locations
    </div>
    </section>
`
}