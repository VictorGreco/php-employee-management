import {storyPage, Option} from '../classes.js'
import {restartTimelineCount} from '../../main.js'
//Start page
const firstPage = new storyPage(1, 'Hello, I’m Rick K-22. This is my Morty. (Morty K-22 waves.) We’re going from reality to reality, asking Ricks to contribute to the Citadel of Ricks redevelopment fund ')
//option 1__1 test
const setState1__1 = { Rickc137: true}
const option1__1 = new Option ( ' I was *burp* never on board with it in the first place, that’s why I murdered everyone in charge and left it to rot', 2, setState1__1)
//option 1__2
const setState1__2 = { Mortyc137: true}
const option1__2 = new Option ( 'They tried to murder him first.', 2, setState1__2)
//option 1__3
const setState1__3 = { Rickk22: true}
const option1__3 = new Option ( 'You wanna rein in your Morty?', 2, setState1__3)
//option 1__4
const setState1__4 = { Mortyk22: true}
const option1__4 = new Option ( 'Well, you’ll be happy to know that... the Council’s gone now.', 2, setState1__4)
//Options added trough object class property
    firstPage.addOption = option1__1;
    firstPage.addOption = option1__2;
    firstPage.addOption = option1__3;
    firstPage.addOption = option1__4;

export {firstPage}
