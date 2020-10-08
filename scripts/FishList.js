/**
 *  Fish which renders individual fish objects as HTML
 */

export const FishList = () =>{
const contentElement =document.querySelector(".contentContainer_left")

contentElement.innerHTML += `
    <section class="fishList">
    <h3>Fish List</h3>
    <div class="fishContainer">
    Placeholder for list of fish                 
    </div>
    </section>
`
}
