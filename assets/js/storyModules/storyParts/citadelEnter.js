import {storyPage, Option} from '../classes.js'
import {restartTimelineCount} from '../../main.js'

//We start wondering how the Citadel works
const destinationChoicePage = new storyPage(2, `Morty: Geez. I didn’t know there were still Ricks and Mortys living on the Citadel. I wonder what their day-to-day lives are like.

Rick: *straps harpoon gun to his back* Well, you can keep wondering that while we go on our fun, fresh, self-contained adventure to Atlantis. *shoots a portal* Anyone continuing to explore the Citadel is either stupid, or one of the unfortunate millions held hostage by their terrible ideas.`)
//Hell Eternum
const setState2__1 = { citadel: true}
const option2__1 = new Option ( 'I wonder what their day-to-day lives are like.', 3, setState2__1)

//Wave World
const setState2__2 = { RickChoice: true}
const option2__2 = new Option ( ' We go on our fun, fresh, self-contained adventure to Atlantis', 5, setState2__2)


//Options added trough object class property
    destinationChoicePage.addOption = option2__1;
    destinationChoicePage.addOption = option2__2;


export {destinationChoicePage}
