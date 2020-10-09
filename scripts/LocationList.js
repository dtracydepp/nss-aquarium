import {Location} from "./Location.js"
import { useLocations } from "./LocationDataProvider.js"

export const LocationsList = () => {
    const contentElement =document.querySelector(".contentContainer_left")
   
    const location =useLocations()

 let fishHTMLRepresentations =""
 for (const location of locations) {
     fishHTMLRepresentations += Location(location)
 }
    
// Adds a section of all of the locations to the DOM

contentElement.innerHTML += `
    <section class="travel_locations">
    <h3>Places to See</h3>
    <div class="location">
    ${fishHTMLRepresentations}
    </div>
    </section>
`
}