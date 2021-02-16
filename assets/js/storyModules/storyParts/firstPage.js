import {storyPage, Option} from '../classes.js'
import {restartTimelineCount} from '../../main.js'
//Start page
const firstPage = new storyPage(1, 'In Plutos\'s moon, Charonte, you proceed to go through a mission to a place no one expected, before starting to journey, you have to pick a ship, it will determine what you can do')
//option 1__1 test
const setState1__1 = { heatShield: true, epsteinDrive: false, tankFull: true, timeDilation: 2}
const option1__1 = new Option ( 'Pick a good heat and radiation shielded ship', 2, setState1__1)
//option 1__2
const setState1__2 = { heatShield: false, epsteinDrive: true, tankFull: true, timeDilation: 2}
const option1__2 = new Option ( 'Pick a long range with medium shield', 2, setState1__2)
//option 1__3
const setState1__3 = { heatShield: true, epsteinDrive: true, tankFull: true, timeDilation: 2}
const requiredState1__3 = () => restartTimelineCount > 0 ? true : false;
const option1__3 = new Option ( 'Long range and heat resistant', 2, setState1__3, requiredState1__3)
//option 1__4
const setState1__4 = { heatShield: true, epsteinDrive: true, antimatter: true, timeDilation: 2}
const requiredState1__4 = () => restartTimelineCount > 1 ? true : false;
const option1__4 = new Option ( 'Antimatter engine Spaceship', 2, setState1__4, requiredState1__4)
//Options added trough object class property
    firstPage.addOption = option1__1;
    firstPage.addOption = option1__2;
    firstPage.addOption = option1__3;
    firstPage.addOption = option1__4;

export {firstPage}
