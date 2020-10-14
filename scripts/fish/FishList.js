import { Fish } from "./Fish.js"
/**
 *  Fish which renders individual fish objects as HTML
 */
import {mostHolyFish, soilderFish, nonHolyFish} from "./FishDataProvider.js"

const buildFishContainerHTML = (arrayOfFish) => {

    let fishHTMLRepresentations = ""
for (const fish of arrayOfFish) {
   
   
    fishHTMLRepresentations += Fish(fish)

}
    return fishHTMLRepresentations
}


export const FishList = () => {
const contentElement =document.querySelector(".contentContainer_left")


const holyFishes = mostHolyFish()
console.log(holyFishes)

const holyFishHTML = buildFishContainerHTML(holyFishes)
console.log(holyFishHTML)

const soilderFishes = soilderFish()
const soilderFishHTML = buildFishContainerHTML(soilderFishes)

const regularFishes = nonHolyFish()
const regularFishHTML = buildFishContainerHTML(regularFishes)

        //     Invoke the Fish component function
        //     and pass the current fish object as an argument.
        //     Each time, add the return value to the
        //     fishHTMLRepresentations variable with `+=`
        // */

         // Add a section, and all of the fish to the DOM
contentElement.innerHTML += `
    <section class="fishList">
    <h3>Fish List</h3>
    <div class="fishContainer">
    ${holyFishHTML} 
    ${soilderFishHTML}  
    ${regularFishHTML} 
    </div>
    </section>
`
}
