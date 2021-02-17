import {storyPage, Option} from './classes.js'
import {firstPage} from './storyParts/firstPage.js'
import {destinationChoicePage} from './storyParts/citadelEnter.js'
import {beforeHell,descendToHell} from './storyParts/TalesFromTheCitadel/atTheDoors.js'
import {portalRoom} from './storyParts/TalesFromTheCitadel/portalRoom.js'
//Defining the different story lines, later on it will be objects
export const storyLines = [
    firstPage, destinationChoicePage,
    //HELL WORLD STORY LINE
    beforeHell, descendToHell, portalRoom

]




//We put it at hte bottom to load once everything is loaded


