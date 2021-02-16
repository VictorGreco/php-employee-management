import {storyPage, Option} from '../../classes.js'
import {restartTimelineCount} from '../../../main.js'

//OVER THE ORBIT
//Start page, each planet has a different timeDilation due to the singularity proximity.
const howFarIGo = new storyPage(19, 'You are docked in wet land and decide to take a walk, you feel almost double your normal weight. Venturing your eyes you can spot what look like debris over 1km away, on the opposite way of the \' mountain you saw\'')
//Go down the gravity well
const setState19__1 =  { stayClose : true, goToDebris: false }
const requiredState19__1 =  (currentState) => currentState.lowWater
const option19__1 = new Option ( 'Stay close to the ship', 20, setState19__1, requiredState19__1)
//Go bak to the gate
const setState19__2 = { stayClose : false, goToDebris: true }
const requiredState19__2 =  (currentState) => currentState.lowWater
const option19__2 = new Option ( 'Go to inspect the debris', 21, setState19__2, requiredState19__2)
//Options added trough object class property
    howFarIGo.addOption = option19__1;
    howFarIGo.addOption = option19__2;






export {}