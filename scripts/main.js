import {useLocations} from './locations/LocationDataProvider.js'
import {FishList} from "./fish/FishList.js"
import {LocationsList} from "./locations/LocationList.js"
import { mostHolyFish, soilderFish } from './fish/FishDataProvider.js'



const allTheLocations = useLocations()

LocationsList ()
FishList ()
mostHolyFish ()
soilderFish()


