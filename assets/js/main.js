//storyPage, Option, firstPage, setState1__1, setState1__2, setState1__3, setState1__4, option1__1, option1__2, option1__3, option1__4, requiredState1__3, requiredState1__4, 
import {storyLines} from './storyModules/storyObjectArray.js'
import {saveTimeline} from './storage.js'
//import {storyPageButton, scorePagebutton, homePageButtons} from './buttons.js'
//GAME PHASE 0
const scenarioToPresent = document.querySelector('#scenario');
const pathToChoose = document.querySelector('#optionPath');

//track what path we are
var state = {};
//times timeline restarted added
var restartTimelineCount = 0;
function setTimeReboot(restart) {restartTimelineCount = restart};
// making sure first time we start from zero
let startJourney = () => {
    console.log(state)
    //condition once a game is started
        if (state.timeForwardMachine){
            console.log('you made it through time')
            restartTimelineCount++  //add each time restarted
            }
    state = {}
    console.log(restartTimelineCount)
    storyPageLoader(1)
    console.log(state)
    }

let storyPageLoader = (pageIndex) => {
    const pathNode = storyLines.find(identifier => identifier.id === pageIndex);
    scenarioToPresent.innerText = pathNode.text
    while (pathToChoose.firstChild) {
        pathToChoose.removeChild(pathToChoose.firstChild)
    }
// we want to check if the path can be displayed an create a button for each option
    pathNode.options.forEach(option => {
        // in case of being true, this options will execute, if required State is false, will not.
        if (whatOptionsCanBeDisplayedSelector(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.className = 'button'
            button.addEventListener('click', () => pickYourPath(option))
            pathToChoose.appendChild(button)
        }
    })
};
// This serves me to return a bollean
let whatOptionsCanBeDisplayedSelector = (page) => {
// the boolean state of the function.
    return page.requiredState == null || page.requiredState(state)

};

// Pick the path you need
let pickYourPath = (path) => {
    const nextPathNode = path.nextPath
    //Condition to re-start and saved completed timeline
    if (nextPathNode <= 0) {
        state = Object.assign(state, path.setState)
        saveTimeline()
        return startJourney()
    }
    //Will change the state to the one on setState. Updating the current and adding new ones
    state = Object.assign(state, path.setState) // here es when we assign the new state
    storyPageLoader(nextPathNode)
}

export {scenarioToPresent, pathToChoose, state, restartTimelineCount, setTimeReboot, startJourney, storyPageLoader, whatOptionsCanBeDisplayedSelector, pickYourPath};

