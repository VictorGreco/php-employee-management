import {storyPage, Option} from '../../classes.js'
import {restartTimelineCount} from '../../../main.js'

//OVER THE ORBIT
//Start page, each planet has a different timeDilation due to the singularity proximity.
const beforeHell = new storyPage(3, 'The Citadel, still undergoing construction after the damages from the events of “The Rickshank Rickdemption”, is full of damaged buildings and roadways. Cars, both flying and standard, are traveling')
//Continue
const setState3__1 =  { citadelMorty : true }
const option3__1 = new Option ( 'Grab your book and close your locker', 4, setState3__1)
//Go back to the ship
const setState3__2 = { citadelRick : true}
const option3__2 = new Option ( 'Shoots synthetic Gromflomites', 4, setState3__2)
//Options added trough object class property
    beforeHell.addOption = option3__1;
    beforeHell.addOption = option3__2;

//RIGHT TO DESCEND
const descendToHell = new storyPage(4, 'A police cruiser pulls up, nearly hitting two Mortys who run out of the way just in time. It stops in front of Cop Rick and the passenger window rolls down, revealing Cop Morty behind the wheel.')
//Continue
const setState4__1 = { copMorty: true}
const option4__1 = new Option ( 'Nobody gives a fuck.', 5, setState4__1)
//Go back to the ship
const setState4__2 = { copRick: true }
const option4__2 = new Option ( 'That’s pretty harsh, sir.', 5, setState4__2)
//Options added trough object class property
    descendToHell.addOption = option4__1;
    descendToHell.addOption = option4__2;

export {beforeHell, descendToHell}