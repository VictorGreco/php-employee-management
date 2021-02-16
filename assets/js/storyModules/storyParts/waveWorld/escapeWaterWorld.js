import {storyPage, Option} from '../../classes.js'
import {restartTimelineCount} from '../../../main.js'

//OVER THE ORBIT
const shipEscapeBegins = new storyPage(34, 'Despite your previous choices, you made it to the ship and immediately take of, the only thing is that due to the time used our options are limited')
//Go back to space
const setState34__1 =  { visitedWaveWorld : true, waveWorld: false }
const requiredState34__1 =  (currentState) => currentState.stayClose
const option34__1 = new Option ( 'Go back to space', 2, setState34__1, requiredState34__1)
//Evade the wave
const setState34__2 = { visitedWaveWorld : true, evasion: true }
const requiredState34__2 =  (currentState) => currentState.stayClose || currentState.outsideHull || currentState.insideHull
const option34__2 = new Option ( 'Evade the mega wave, I will see to it', 29, setState34__2, requiredState34__2)
//Planetary surfing
const setState34__3 = { visitedWaveWorld : true, surfing: true }
const requiredState34__3 =  (currentState) => currentState.stayClose || currentState.outsideHull || currentState.insideHull || currentState.smash || currentState.throw
const option34__3 = new Option ( 'Do some planetary surfing with the ship', 29, setState34__3, requiredState34__3)
//Add Options
shipEscapeBegins.addOption = option34__1;
shipEscapeBegins.addOption = option34__2;
shipEscapeBegins.addOption = option34__3;

//EVADE THE WAVE
const evadeWave = new storyPage(29, 'As your ship gets covered by the shadow of the colosal mountain-wave approaching, you quickly enter your ship to brace for the hard maneuver, how will you pilot your spacecraft?')
//Go back to space
const setState29__1 =  { autopilot : true, manual : false, waveWorld: false}
const requiredState29__1 =  (currentState) => currentState.stayClose || currentState.outsideHull || currentState.mountain
const option29__1 = new Option ( 'I will let the ship handle itself, set autopilot and straight to space', 2, setState29__1, requiredState29__1)
//Evade the wave
const setState29__2 = { autopilot : false, manual : true }
const requiredState29__2 =  (currentState) => currentState.stayClose || currentState.outsideHull || currentState.insideHullcurrentState.stayClose || currentState.outsideHull || currentState.insideHull || currentState.smash || currentState.throw
const option29__2 = new Option ( 'No time to let the computer work, I wil handle it myself.', 30, setState29__2, requiredState29__2)
//Add Options
evadeWave.addOption = option29__1;
evadeWave.addOption = option29__2;

//Planetary Surfing
const planetarySurfing = new storyPage(30,'Now comes the moment of the maneuver, which difficulty type technique will you choose?')
//Easy maneuvers
const setState30__1 =  { easyMode: true, mediumMode : false , hardMode : false, waveWorld: false }
const requiredState30__1 =  (currentState) => currentState.manual && currentState.evasion
const option30__1 = new Option ( 'Easy maneuvers and out of here', 2, setState30__1, requiredState30__1)
//Medium complication
const setState30__2 = { easyMode: false, mediumMode : true , hardMode : false, waveWorld: false }
const requiredState30__2 =  (currentState) => currentState.manual && currentState.surfing
const option30__2 = new Option ( 'Medium complication, I will go through it with little attention', 2, setState30__2, requiredState30__2)
//Challenge mode on
const setState30__3 = { easyMode: false, mediumMode : false , hardMode : true }
const requiredState30__3 =  (currentState) => currentState.manual && currentState.surfing
const option30__3 = new Option ( 'Challenge mode on, let\'s have some fun', 31, setState30__3, requiredState30__3)
//Add Options
planetarySurfing.addOption = option30__1;
planetarySurfing.addOption = option30__2;
planetarySurfing.addOption = option30__3;

//Challenge is on
const challengeModeOn = new storyPage(31,'This is way harder than I expected it, hull integrity is being compromised and the engines are full of water')
//Easy maneuvers
const setState31__1 =  { skilledPilot : true, waveWorld: false }
const requiredState31__1 =  (currentState) => currentState.hardMode && !currentState.throw && !currentState.smash
const option31__1 = new Option ( 'I found a way through it, igniting engines', 2, setState31__1, requiredState31__1)
//Medium complication
const setState31__2 = { recklessPilot : true, waveWorld: false }
const requiredState31__2 =  (currentState) => currentState.hardMode && currentState.throw && !currentState.heavy
const option31__2 = new Option ( 'This will damage the ship but at least I will survive', 2, setState31__2, requiredState31__2)
//Challenge mode on
const setState31__3 = { kamikazePilot : true }
const requiredState31__3 =  (currentState) => currentState.hardMode && (currentState.smash || currentState.heavy)
const option31__3 = new Option ( 'It\'s too risky, but I got no choice, what is that? ...?', 32, setState31__3, requiredState31__3)
//Add Options
challengeModeOn.addOption = option31__1;
challengeModeOn.addOption = option31__2;
challengeModeOn.addOption = option31__3;

//RiskyChoice
const riskTaken = new storyPage(32, 'You blacked out... you start to discover that...')
//Easy maneuvers
const setState32__1 =  { miraclePilot : true, waveWorld: false}
const requiredState32__1 =  (currentState) => currentState.kamikazePilot
const option32__1 = new Option ( 'You made it through the wave, ship is able to fly... and you are capable to get out', 2, setState32__1, requiredState32__1)
//Medium complication
const setState32__2 = { suicidal : true}
const requiredState32__2 =  (currentState) => currentState.kamikazePilot && currentState.heavy
const option32__2 = new Option ( 'You wake uo, you analyze the situation, there is no chance you survive, best thing is to take a pill and go to hell', 13, setState32__2, requiredState32__2)
//Challenge mode on
const setState32__3 = { damned : true, hellEternum: true}
const requiredState32__3 =  (currentState) => currentState.hardMode && !currentState.heavy
const option32__3 = new Option ( 'You ony wake up to discover you are going to get drawn by water and there is nothing to do about it...', 7, setState32__3, requiredState32__3)
//Add Options
challengeModeOn.addOption = option32__1;
challengeModeOn.addOption = option32__2;
challengeModeOn.addOption = option32__3;

//WaveWorldDeath
const deathPath = new storyPage(35, 'Here the repellent harpies make their nests,\n Who drove the Trojans from the Strophades \n With dire announcements of the coming woe. \n They have broad wings, a human neck and face, \n Clawed feet and swollen, feathered bellies; they caw \nTheir lamentations in the eerie trees.')
//Easy maneuvers
const setState35__1 =  { damned : true }
const requiredState35__1 =  (currentState) => currentState.communicate
const option35__1 = new Option ( 'Choose human virtue', 10, setState35__1, requiredState35__1)
//Medium complication
const setState35__2 = {suicidal : true, hellEternum: true }
const requiredState35__2 =  (currentState) => currentState.communicate
const option35__2 = new Option ( 'Start the endless fight', 13, setState35__2, requiredState35__2)
//Add Options
deathPath.addOption = option35__1;
deathPath.addOption = option35__2;



export {shipEscapeBegins, evadeWave, planetarySurfing, challengeModeOn, riskTaken, deathPath}