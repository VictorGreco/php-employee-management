import {storyPage, Option} from '../../classes.js'
import {restartTimelineCount} from '../../../main.js'

//OVER THE ORBIT
//Start page, each planet has a different timeDilation due to the singularity proximity.
const onTheOrbitWW = new storyPage(17, 'You venture yourself into a planet where temperature allows water to stay liquid, nonetheless there seem to be strange moving formations all over the planet')
//Go down the gravity well
const setState17__1 =  { planetDescend : true, tankFull: false }
const requiredState17__1 =  (currentState) => currentState.waveWorld
const option17__1 = new Option ( 'Descend to the water world', 18, setState17__1, requiredState17__1)
//Go bak to the gate
const setState17__2 = { planetDescend : false, tankFull: false, waveWorld: false }
const requiredState17__2 =  (currentState) => currentState.waveWorld
const option17__2 = new Option ( 'Go back to the Moon gate', 2, setState17__2, requiredState17__2)
//Options added trough object class property
    onTheOrbitWW.addOption = option17__1;
    onTheOrbitWW.addOption = option17__2;

//RIGHT TO DESCEND
const onTheSurfaceWW = new storyPage(18, 'Once on the surface, your ship keep the descend but sees no land, your ship detects a place where water level is low enough to land, nonetheless you see what it looks like a mountain to got. \n What you do?')
//Continue
const setState18__1 = { lowWater : true, mountain: false }
const requiredState18__1 =  (currentState) => currentState.planetDescend
const option18__1 = new Option ( 'Dock on low water', 19, setState18__1, requiredState18__1)
//Go back to the ship
const setState18__2 = { lowWater : false, mountain: true }
const requiredState18__2 =  (currentState) => currentState.planetDescend
const option18__2 = new Option ( 'Go to the \'mountain\' you saw', 29, setState18__2, requiredState18__2)
//Options added trough object class property
    onTheSurfaceWW .addOption = option18__1;
    onTheSurfaceWW .addOption = option18__2;

export {onTheOrbitWW, onTheSurfaceWW}