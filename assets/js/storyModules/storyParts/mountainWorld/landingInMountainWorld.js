import {storyPage, Option} from '../../classes.js'
import {restartTimelineCount} from '../../../main.js'

//CHOOSING WHERE TO LAND
//Start page, each planet has a different timeDilation due to the singularity proximity.
const onTheOrbitMW = new storyPage(36, 'Still affected by the black whole, the mountain world is a strange mix of mountains both in land and at the sky as clouds, there seem to be two places of interest for the aircraft to land, ')
//Go down the gravity well
const setState36__1 =  { platform : true, valley : false }
const requiredState36__1 =  (currentState) => currentState.mountainWorld
const option36__1 = new Option ( 'Land into the floating platform', 37, setState36__1, requiredState36__1)
//Go bak to the gate
const setState36__2 = { platform : false, valley : true }
const requiredState36__2 =  (currentState) => currentState.mountainWorld
const option36__2 = new Option ( 'Land into the valley', 38, setState36__2, requiredState36__2)
//Options added trough object class property
    onTheOrbitMW.addOption = option36__1;
    onTheOrbitMW.addOption = option36__2;

export {onTheOrbitMW}