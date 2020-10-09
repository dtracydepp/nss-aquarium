import {useLocations} from './LocationDataProvider.js'
import { FishList } from "./FishList.js"


FishList ()

const allTheLocations = useLocations()
// console.log(allTheLocations)

for (const locations of allTheLocations){
    console.log(locations)
}
