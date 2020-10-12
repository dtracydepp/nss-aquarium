import {useLocations} from './locations/LocationDataProvider.js'
import {FishList} from "./fish/FishList.js"
import {LocationsList} from "./locations/LocationList.js"



const allTheLocations = useLocations()

LocationsList ()
FishList ()



