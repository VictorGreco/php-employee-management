import {storyPage, Option} from '../classes.js'
import {restartTimelineCount} from '../../main.js'

//Start page, each planet has a different timeDilation due to the singularity proximity.
const destinationChoicePage = new storyPage(2, 'A bast system unravels before your eyes, a binary blackHole-star system with 8 planets, defying all laws of physics. There three main parts, the inner planets, the ones in the middle and the outer system, and due to your ship choice, the following planets are within reach:')
//Hell Eternum
const setState2__1 = { timeDilation: 10 , hellEternum : true, tankFull : false}
const requiredState2__1 = (currentState) => currentState.heatShield && currentState.tankFull && !currentState.antimatter
const option2__1 = new Option ( 'Hell Eternum', 3, setState2__1, requiredState2__1)

//Wave World
const setState2__2 = { timeDilation: 8, waveWorld : true, tankFull : false }
const requiredState2__2 = (currentState) => currentState.heatShield && (currentState.tankFull || currentState.antimatter)
const option2__2 = new Option ( 'Wave World', 17, setState2__2, requiredState2__2)

//Mountain World
const setState2__3 = {timeDilation: 7, mountainWorld : true, tankFull : false }
const requiredState2__3 = (currentState) => currentState.heatShield && (currentState.tankFull || currentState.antimatter)
const option2__3 = new Option ( 'Mountain World', 36, setState2__3, requiredState2__3)

//Gate moon
const setState2__4 = { timeDilation: 4, gateMoon : true }
const requiredState2__4 = (currentState) => currentState.heatShield || currentState.epsteinDrive || currentState.tankFull || currentState.antimatter
const option2__4 = new Option ( 'Gate moon', 200, setState2__4, requiredState2__4)

//Binary worlds
const setState2__5 = { timeDilation: 3, binaryWorlds : true, tankFull : false }
const requiredState2__5 = (currentState) => currentState.epsteinDrive && (currentState.tankFull || currentState.antimatter)
const option2__5 = new Option ( 'Binary worlds', 54, setState2__5, requiredState2__5)

//Ring World
const setState2__6 = { timeDilation: 1, ringWorld : true, tankFull : false }
const requiredState2__6 = (currentState) => currentState.epsteinDrive && (currentState.tankFull || currentState.antimatter)
const option2__6 = new Option ( 'Ring World', 61, setState2__6, requiredState2__6)

//Ultima Mundi
const setState2__7 = { timeDilation: 0.5, ultimaMundi : true, tankFull : false}
const requiredState2__7 = (currentState) =>currentState.epsteinDrive && (currentState.tankFull || currentState.antimatter)
const option2__7 = new Option ( 'Ultima Mundi', 68, setState2__7, requiredState2__7)
//Options added trough object class property
    destinationChoicePage.addOption = option2__1;
    destinationChoicePage.addOption = option2__2;
    destinationChoicePage.addOption = option2__3;
    destinationChoicePage.addOption = option2__4;
    destinationChoicePage.addOption = option2__5;
    destinationChoicePage.addOption = option2__6;
    destinationChoicePage.addOption = option2__7;


export {destinationChoicePage}
