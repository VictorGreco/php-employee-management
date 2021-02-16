import {storyPage, Option} from '../../classes.js'
import {restartTimelineCount} from '../../../main.js'

//OVER THE ORBIT
//Start page, each planet has a different timeDilation due to the singularity proximity.
const beforeHell = new storyPage(3, 'You travel to the closest planet of the system to the Black Hole and its star, thanks to the heat shield you picked, you are able to travel in here, temperatures are hellish, but time distortion is even worse, spending one second here is 1hour of earthtTime')
//Continue
const setState3__1 =  { planetDescend : true, tankFull: false }
const option3__1 = new Option ( 'Descend to the Hellscape', 4, setState3__1)
//Go back to the ship
const setState3__2 = { planetDescend : false, tankFull: false, hellEternum: false}
const option3__2 = new Option ( 'Return to the point of origin', 2, setState3__2)
//Options added trough object class property
    beforeHell.addOption = option3__1;
    beforeHell.addOption = option3__2;

//RIGHT TO DESCEND
const descendToHell = new storyPage(4, 'You descended to the law-physics defying world, your ship detects an area of the planet where temperature let\'s you survive outside the ship with a spaceSuit, once you get out, you see a path that leads up to a portal, what do you bring with you?')
//Continue
const setState4__1 = { metal: false, silver:true }
const requiredState4__1 =  (currentState) => currentState.planetDescend
const option4__1 = new Option ( 'My grand-dad silver medal', 5, setState4__1, requiredState4__1)
//Go back to the ship
const setState4__2 = { metal: true, silver:false }
const option4__2 = new Option ( 'My mum\'s service medals', 5, setState4__2, requiredState4__1)
//Options added trough object class property
    descendToHell.addOption = option4__1;
    descendToHell.addOption = option4__2;

export {beforeHell, descendToHell}