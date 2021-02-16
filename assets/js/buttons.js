import {scenarioToPresent, pathToChoose, state, startJourney, restartTimelineCount, setTimeReboot ,storyPageLoader, whatOptionsCanBeDisplayedSelector, pickYourPath} from './main.js'
import {saveTimeline, timeLinesHistory} from './storage.js'
const vid = document.getElementById('myVideo');
const vidHidden = document.getElementById('myVideoHidden');
// Creation of the home page buttons and the story buttons
// Go Home page buttons
const homePageButtons = () =>{
    let scenario = document.querySelector('#scenario');
    let optionPath = document.querySelector('#optionPath');
    let container = document.querySelector('.container')
    let scoreContainer = document.querySelector('.timelines')
    let terminalScreen = document.getElementById('storyPage')
    let stateValues = Object.values(state)
    let visualizer = document.getElementById('visualizer')
    terminalScreen.style.backgroundImage = "";
    terminalScreen.removeAttribute("style")
    //document.getElementById('timelineList').removeAttribute('style')
    //let nonValidTimelines = 
    //LOCAL STORAGE ACTION
    //WILL ONLY EXECUTE ONCE YOU ARE ON THE GAME SCREEN
    if (scoreContainer){
        console.log('Welcome to the different timelines')
        // A timeline is only saved if it started on the first place, analyzing the length of the object
        if (visualizer){
            terminalScreen.removeChild(visualizer)
        }
    } else if (stateValues.length > 0){
        saveTimeline() //only if a timeline is started, will be saved
    }
    setTimeReboot(0) //once exit the screen the reboots are reset to 0
    while(scenario.firstChild){
        scenario.removeChild(scenario.firstChild)
    }
    while(optionPath.firstChild){
        optionPath.removeChild(optionPath.firstChild)
    }
    let footer = document.querySelector('#controler')
    while(footer.firstChild){
        footer.removeChild(footer.firstChild)
    }
    container.className = 'elementHidden'

    //let terminal1 = document.getElementById('storyPage')
    //terminal1.id = "storyPage rickAndMorty"
    const button = document.createElement('button')
    const scores = document.createElement('button')
    button.innerText = 'START'
    button.className = 'button controllerButton'
    scores.innerText = 'CITIZENS SCORES'
    scores.className = 'button controllerButton'
    button.addEventListener('click', storyPageButton)
    scores.addEventListener('click', scorePagebutton)
    footer.appendChild(button);
    footer.appendChild(scores);

    //vid.id = 'myVideo'
}


//Story page button
const storyPageButton = () =>{

    let footer = document.querySelector('#controler')
    let container = document.querySelector('.elementHidden')
    container.className = 'container'
    container.id = 'timelineList'

    while(footer.firstChild){
        footer.removeChild(footer.firstChild)
    }
    //vid.id = 'myVideoHidden'
// END GENERATING CONTENT
    startJourney()
    const button = document.createElement('button')
    button.innerText = 'FINISH TEST'
    button.className = 'button controllerButton'
    button.addEventListener('click', homePageButtons)
    footer.appendChild(button);
    //document.getElementById('timelineList').removeAttribute('style')
}

//Story page button. TO BE CONTINUED
const scorePagebutton = () =>{
    //vid.id = 'myVideoHidden'
    let footer = document.querySelector('#controler')
    let terminalScreen = document.querySelector('.terminalScreen')
    const button = document.createElement('button')
    let container = document.querySelector('.elementHidden')
    /// We add class timelines to make have an identifier for the container
    container.className = 'container timelines'
    container.id = 'timelineList'
    scenarioToPresent.innerHTML = "TIMELINES CREATED"
    let timelinesContainer = document.getElementById('optionPath')
    while(footer.firstChild){
        footer.removeChild(footer.firstChild)
    }
 
    button.innerText = 'GO HOME'
    button.className = 'button controllerButton'
    button.addEventListener('click', homePageButtons)
    footer.appendChild(button)
    //terminalScreen.appendChild(visualizer)
    // addd absolute botttom.
    document.getElementById('timelineList').removeAttribute('style')
    timeLinesHistory()
    
}

homePageButtons()

//LOCAL STORAGE RESET. ONLY FOR TESTING PURPOSES
const resetLocalStorage = () =>{
    let localStorageButton = document.getElementById('localStorageReset')
    let clearStorage = () => {
        localStorage.clear()
        location.reload()
    }
    localStorageButton.addEventListener('click', clearStorage)
}

resetLocalStorage()

export {homePageButtons, resetLocalStorage, scorePagebutton, storyPageButton}