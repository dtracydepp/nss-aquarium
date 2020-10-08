import { Fish } from "./Fish.js"
/**
 *  Fish which renders individual fish objects as HTML
 */
import {useFish} from "./FishDataProvider.js"

export const FishList = () => {
const contentElement =document.querySelector(".contentContainer_left")

const fishes = useFish()

// Generate all of the HTML for all of the fish

let fishHTMLRepresentations = ""
for (const fish of fishes) {
    fishHTMLRepresentations += Fish(fish)
}

 /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */

         // Add a section, and all of the fish to the DOM
contentElement.innerHTML += `
    <section class="fishList">
    <h3>Fish List</h3>
    <div class="fishContainer">
    ${fishHTMLRepresentations}               
    </div>
    </section>
`
}
