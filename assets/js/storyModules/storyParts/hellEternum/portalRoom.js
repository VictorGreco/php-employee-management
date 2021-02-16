import {storyPage, Option} from '../../classes.js'
import {restartTimelineCount} from '../../../main.js'

//PORTAL ROOM

//RIGHT TO DESCEND
const portalRoom = new storyPage(5, 'You arrive to the portal, once you cross it, you are transported to an empty space and suddenly an orb-type shapeless entity appears in front of you, somehow you can understand it, it makes you know that exists an artifact in the very center of the world that has the ability to bring new advances and prosperity to your world, nonetheless many challenges have to be surpassed')
//HELL VESTIBULE
const setState5__1 = { hellVestibule:true }
const requiredState5__1 =  (currentState) => currentState.metal  && !currentState.artifact || currentState.silver  && !currentState.artifact
const option5__1 = new Option ( 'Lasciate ogne speranza, voi ch\'intrate', 6, setState5__1, requiredState5__1)
//LIMBO
const setState5__2 = { limbo: true , hellVestibule:true }
const requiredState5__2 = (currentState) => currentState.silver  && !currentState.artifact || currentState.hellVestibule && !currentState.artifact
const option5__2 = new Option ( 'The guiltless damned', 7, setState5__2, requiredState5__2)
//LUST
const setState5__3 = { lust: true }
const requiredState5__3 = (currentState) => currentState.limbo && !currentState.artifact
const option5__3 = new Option ( 'A part where no thing gleams', 8, setState5__3, requiredState5__3)
//GLUTTONY
const setState5__4 = { gluttony: true }
const requiredState5__4 = (currentState) => currentState.limbo && currentState.lust && !currentState.artifact
const option5__4 = new Option ( 'A great storm of putrefaction.', 9, setState5__4, requiredState5__4)
//GREED
const setState5__5 = { greed: true }
const requiredState5__5 = (currentState) => currentState.limbo && currentState.lust && currentState.gluttony && !currentState.artifact
const option5__5 = new Option ( 'House of Plutus', 10, setState5__5, requiredState5__5)
//ANGER
const setState5__6 = { anger: true }
const requiredState5__6 = (currentState) => currentState.limbo && currentState.lust && currentState.gluttony && currentState.greed && !currentState.artifact
const option5__6 = new Option ( 'A black sulkiness which can find no joy in God or man or the universe', 11, setState5__6, requiredState5__6)
//HERESY
const setState5__7 = { heresy: true }
const requiredState5__7 = (currentState) => currentState.limbo && currentState.lust && currentState.gluttony && currentState.greed && currentState.anger && !currentState.artifact
const option5__7 = new Option ( 'The soul dies with the body', 12, setState5__7, requiredState5__7)
//VIOLENCE
const setState5__8 = { violence: true }
const requiredState5__8 = (currentState) => currentState.limbo && currentState.lust && currentState.gluttony && currentState.greed && currentState.anger && currentState.heresy && !currentState.artifact
const option5__8 = new Option ( 'Against Neighbors, Against Self and Against God, Art and Nature', 13, setState5__8, requiredState5__8)
//FRAUD
const setState5__9 = { fraud: true }
const requiredState5__9 = (currentState) => currentState.limbo && currentState.lust && currentState.gluttony && currentState.greed && currentState.anger && currentState.heresy && currentState.violence && !currentState.artifact
const option5__9 = new Option ( 'City in corruption', 14, setState5__9, requiredState5__9)
//TREACHERY
const setState5__10 = { treachery: true }
const requiredState5__10 = (currentState) => currentState.limbo && currentState.lust && currentState.gluttony && currentState.greed && currentState.anger && currentState.heresy && currentState.violence && currentState.fraud && !currentState.artifact
const option5__10 = new Option ( 'Traitors, Betrayers and Oathbreakers', 15, setState5__10, requiredState5__10)
//CENTER OF HELL
const setState5__11 = { centerOfHell: true }
const requiredState5__11 = (currentState) => currentState.limbo && currentState.lust && currentState.gluttony && currentState.greed && currentState.anger && currentState.heresy && currentState.violence && currentState.fraud && currentState.treachery && !currentState.artifact
const option5__11 = new Option ( 'One red, one pale and one black', 16, setState5__11, requiredState5__11)
//CENTER OF HELL
const setState5__12 = { hellEternum: false }
const requiredState5__12 = (currentState) => currentState.artifact
const option5__12 = new Option ( 'Go back to the ship', 3, setState5__12, requiredState5__12)



//Options added trough object class property
    portalRoom.addOption = option5__1;
    portalRoom.addOption = option5__2;
    portalRoom.addOption = option5__3;
    portalRoom.addOption = option5__4;
    portalRoom.addOption = option5__5;
    portalRoom.addOption = option5__6;
    portalRoom.addOption = option5__7;
    portalRoom.addOption = option5__8;
    portalRoom.addOption = option5__9;
    portalRoom.addOption = option5__10;
    portalRoom.addOption = option5__11;
    portalRoom.addOption = option5__12;

export {portalRoom}