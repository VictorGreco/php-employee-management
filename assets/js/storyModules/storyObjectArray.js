import {restartTimelineCount} from '../main.js'
import {storyPage, Option} from './classes.js'
import {firstPage} from './storyParts/firstPage.js'
import {destinationChoicePage} from './storyParts/destinationChoicePage.js'
import {beforeHell,descendToHell} from './storyParts/hellEternum/atTheDoors.js'
import {portalRoom} from './storyParts/hellEternum/portalRoom.js'
import {hellVestibule, limbo, lust, gluttony, greed, anger, heresy, violence, fraud, treachery, centerOfHell} from './storyParts/hellEternum/theCircles.js'
import {onTheOrbitWW, onTheSurfaceWW} from './storyParts/waveWorld/waveWorldBegins.js'
import {howFarIGo, howFarIGo__close, howFarIGo__away, insideTheHull, afterTheHull, spherePath, throwSphere, communicateWithSphere, smashSphere, outsideHullDecision, hellTestPassed} from './storyParts/waveWorld/waterPath.js'
import {evadeWave, planetarySurfing, shipEscapeBegins, challengeModeOn, riskTaken, deathPath} from './storyParts/waveWorld/escapeWaterWorld.js'
import {onTheOrbitMW} from './storyParts/mountainWorld/landingInMountainWorld.js'
import {} from './storyParts/mountainWorld/platformPath.js'

//Defining the different story lines, later on it will be objects
export const storyLines = [
    firstPage, destinationChoicePage,
    //HELL WORLD STORY LINE
    beforeHell, descendToHell, portalRoom,
    // THE CIRCLES
    hellVestibule, limbo, lust, gluttony, greed, anger, heresy, violence, fraud, treachery, centerOfHell,
    // WAVE WORLD
    onTheOrbitWW, onTheSurfaceWW,
    // WATER PATH
    howFarIGo,
        howFarIGo__close,
        howFarIGo__away,
            insideTheHull, afterTheHull, spherePath, throwSphere, communicateWithSphere, smashSphere,
            outsideHullDecision,
            hellTestPassed,
    shipEscapeBegins, evadeWave, planetarySurfing, challengeModeOn, riskTaken, deathPath,
    // MOUNTAIN WORLD
    onTheOrbitMW,


            // LANDING FLOATING PLATFORM
            {
                id: 37,
                text: 'Once in the platform ',
                options: [
                    {
                        text: 'Choose human virtue',
                        requiredState: (currentState) => currentState.platform,
                        setState: { damned : true },
                        nextPath: 39
                        },
                        {
                        text: 'Start the endless fight',
                        requiredState: (currentState) => currentState.platform,
                        setState: {suicidal : true},
                        nextPath: 40,
                    },
                ]
            },

                // ENTER THE STRUCTURE
                {
                    id: 39,
                    text: 'Still affected by the black whole, the mountain world is a strange mix of mountains both in land and at the sky as clouds, there seem to be two places of interest for the aircraft to land, ',
                    options: [
                        {
                            text: 'Choose human virtue',
                            requiredState: (currentState) => currentState.mountainWorld,
                            setState: { damned : true },
                            nextPath: 41
                        },
                    ]
                },
                // ENTER THE TUNNEL
                {
                    id: 40,
                    text: 'Still affected by the black whole, the mountain world is a strange mix of mountains both in land and at the sky as clouds, there seem to be two places of interest for the aircraft to land, ',
                    options: [
                        {
                            text: 'Choose human virtue',
                            requiredState: (currentState) => currentState.mountainWorld,
                            setState: { damned : true },
                            nextPath: 41
                        },
                    ]
                },
                    // END U IN FRONT OF AN SCRIPTION 11 DECIMAL FOR PI NUMBER
                    {
                        id: 41,
                        text: 'Take the test ',
                        options: [
                            {
                                text: 'Begin',
                                requiredState: (currentState) => currentState.mountainWorld,
                                setState: { damned : true },
                                nextPath: 42
                            },
                        ]
                    },
                        // TEST QUESTION 1
                        {
                            id: 42,
                            text: 'First question ',
                            options: [
                                {
                                    text: 'Begin',
                                    requiredState: (currentState) => currentState.mountainWorld,
                                    setState: { damned : true },
                                    nextPath: 43
                                },
                                {
                                    text: 'Begin',
                                    requiredState: (currentState) => currentState.mountainWorld,
                                    setState: { damned : true },
                                    nextPath: 43
                                },
                                {
                                    text: 'Begin',
                                    requiredState: (currentState) => currentState.mountainWorld,
                                    setState: { damned : true },
                                    nextPath: 43
                                },
                                {
                                    text: 'Begin',
                                    requiredState: (currentState) => currentState.mountainWorld,
                                    setState: { damned : true },
                                    nextPath: 43
                                },
                            ]
                        },
                        // TEST QUESTION 2
                        {
                            id: 43,
                            text: 'Second question ',
                            options: [
                                {
                                    text: 'Begin',
                                    requiredState: (currentState) => currentState.mountainWorld,
                                    setState: { damned : true },
                                    nextPath: 44
                                },
                                {
                                    text: 'Begin',
                                    requiredState: (currentState) => currentState.mountainWorld,
                                    setState: { damned : true },
                                    nextPath: 44
                                },
                                {
                                    text: 'Begin',
                                    requiredState: (currentState) => currentState.mountainWorld,
                                    setState: { damned : true },
                                    nextPath: 44
                                },
                                {
                                    text: 'Begin',
                                    requiredState: (currentState) => currentState.mountainWorld,
                                    setState: { damned : true },
                                    nextPath: 44
                                },
                            ]
                        },
                        // TEST QUESTION 3
                        {
                            id: 44,
                            text: 'Third question ',
                            options: [
                                {
                                    text: 'Begin',
                                    requiredState: (currentState) => currentState.mountainWorld,
                                    setState: { damned : true },
                                    nextPath: 45
                                },
                                {
                                    text: 'Begin',
                                    requiredState: (currentState) => currentState.mountainWorld,
                                    setState: { damned : true },
                                    nextPath: 45
                                },
                                {
                                    text: 'Begin',
                                    requiredState: (currentState) => currentState.mountainWorld,
                                    setState: { damned : true },
                                    nextPath: 45
                                },
                                {
                                    text: 'Begin',
                                    requiredState: (currentState) => currentState.mountainWorld,
                                    setState: { damned : true },
                                    nextPath: 45
                                },
                            ]
                        },
                        // TEST QUESTION 4
                        {
                            id: 45,
                            text: 'Fourth question ',
                            options: [
                                {
                                    text: 'Begin',
                                    requiredState: (currentState) => currentState.mountainWorld,
                                    setState: { damned : true },
                                    nextPath: 46
                                },
                                {
                                    text: 'Begin',
                                    requiredState: (currentState) => currentState.mountainWorld,
                                    setState: { damned : true },
                                    nextPath: 46
                                },
                                {
                                    text: 'Begin',
                                    requiredState: (currentState) => currentState.mountainWorld,
                                    setState: { damned : true },
                                    nextPath: 46
                                },
                                {
                                    text: 'Begin',
                                    requiredState: (currentState) => currentState.mountainWorld,
                                    setState: { damned : true },
                                    nextPath: 46
                                },
                            ]
                        },
                    // TEST RESULT
                    // THE TEST WILL BE THRPUGH WITH THE SAME THOUGH SO, IF A CLEAR MIND IS SHOWN
                    // THE OPTION TO THE ARTIFACT WILL BE SWHON
                        {
                            id: 46,
                            text: 'You though show you the way to go ',
                            options: [
                                {
                                    text: 'Go to the exit',
                                    requiredState: (currentState) => currentState.mountainWorld,
                                    setState: { damned : true },
                                    nextPath: 48
                                },
                                {
                                    text: 'Go to the opened gate',
                                    requiredState: (currentState) => currentState.mountainWorld,
                                    setState: { damned : true },
                                    nextPath: 47
                                },
                            ]
                        },
                        {
                            id: 47,
                            text: 'You though show you the way to go ',
                            options: [
                                {
                                    text: 'Go to the exit',
                                    requiredState: (currentState) => currentState.mountainWorld,
                                    setState: { damned : true },
                                    nextPath: 48
                                },
                            ]
                        },

                    // GO BACK TO THE SHIP
                        {
                            id: 48,
                            text: 'Fourth question ',
                            options: [
                                {
                                    text: 'Go to the ship',
                                    requiredState: (currentState) => currentState.mountainWorld,
                                    setState: { damned : true, mountainWorld: false },
                                    nextPath: 2
                                },
                            ]
                        },

            // LANDING VALLEY
            {
                id: 38,
                text: 'Still affected by the black whole, the mountain world is a strange mix of mountains both in land and at the sky as clouds, there seem to be two places of interest for the aircraft to land, ',
                options: [
                    {
                        text: 'Cave',
                        requiredState: (currentState) => currentState.mountainWorld,
                        setState: { damned : true },
                        nextPath: 49
                        },
                        {
                        text: 'Scalate',
                        requiredState: (currentState) => currentState.mountainWorld,
                        setState: {suicidal : true},
                        nextPath: 50,
                    },
                ]
            },
                // GO INTO THE CAVE
                {
                    id: 49,
                    text: 'Go inside a cave ',
                    options: [
                        {
                            text: 'Explore deeper',
                            requiredState: (currentState) => currentState.mountainWorld,
                            setState: { damned : true },
                            nextPath: 51
                            },
                            {
                            text: 'Go outside of it and try to climb',
                            requiredState: (currentState) => currentState.mountainWorld,
                            setState: {suicidal : true},
                            nextPath: 50,
                        },
                    ]
                },
                    // GO DEEPER INTO THE CAVE
                    {
                        id: 51,
                        text: 'Going deeper you find a portal ',
                        options: [
                            {
                                text: 'Take the portal', // it will be the sae opton taking you to different places
                                requiredState: (currentState) => currentState.mountainWorld,
                                setState: { damned : true },
                                nextPath: 38
                                },
                                {
                                text: 'Take the portal', //this option only available after first reebot
                                requiredState: (currentState) => currentState.reboots,
                                setState: {suicidal : true},
                                nextPath: 41,
                            },
                        ]
                    },
                // GO DO SOME CLIMBING 
                {
                    id: 50,
                    text: 'You do some climbing, lng time you didn´t ',
                    options: [
                        {
                            text: 'Use equipment',
                            requiredState: (currentState) => currentState.mountainWorld,
                            setState: { damned : true },
                            nextPath: 52
                            },
                            {
                            text: 'Climb barehand',
                            requiredState: (currentState) => currentState.mountainWorld,
                            setState: {suicidal : true},
                            nextPath: 53,
                        },
                    ]
                },
                // DO GOOD CLIMBING
                {
                    id: 52,
                    text: 'You go through the mountain and find nothing ',
                    options: [
                        {
                            text: 'Go back to the ship',
                            requiredState: (currentState) => currentState.mountainWorld,
                            setState: { damned : true, mountainWorld: false},
                            nextPath: 2
                            },
                    ]
                },
                // BARE HAND CLIMBING
                {
                    id: 53,
                    text: 'You fall and go back  ',
                    options: [
                        {
                            text: 'Go back to the ship',
                            requiredState: (currentState) => currentState.mountainWorld,
                            setState: { damned : true, mountainWorld: false},
                            nextPath: 2
                            },
                    ]
                },

//GASS GIANTS YOU ARRIVE
        {
            id: 54,
            text: 'You arrive to the binary system and there are two stations',
            options: [
                {
                    text: 'Explore Alfa',
                    requiredState: (currentState) => currentState.mountainWorld,
                    setState: { damned : true },
                    nextPath: 55
                },
                {
                    text: 'Explore Omega',
                    requiredState: (currentState) => currentState.mountainWorld,
                    setState: { damned : true },
                    nextPath: 56
                },
            ]
        },

        //ALFA STATION
            {
                id: 55,
                text: 'Your arrival activates the mechanisms of the station, inside it there, right at the center, you feel attracted to touch a floating orb, do you touch it?',
                options: [
                    {
                        text: 'Yes',
                        requiredState: (currentState) => currentState.mountainWorld,
                        setState: { damned : true },
                        nextPath: 57
                    },
                    {
                        text: 'No, this does not feel right',
                        requiredState: (currentState) => currentState.mountainWorld,
                        setState: { damned : true },
                        nextPath: 58
                    },
                ]
            },

                //YES
                {
                    id: 57,
                    text: 'Touching it you loose your mind in visions of an anciente word that looks like yous, but hundred of years into the future, before disconecting they ask you to let them in',
                    options: [
                        {
                            text: 'Resist to the knowledge',
                            requiredState: (currentState) => currentState.mountainWorld,
                            setState: { damned : true },
                            nextPath: 58
                        },
                        {
                            text: 'Submit to the will of the ancestors',
                            requiredState: (currentState) => currentState.mountainWorld,
                            setState: { damned : true },
                            nextPath: 58
                        },
                    ]
                },
                //PASSING
                {
                    id: 58,
                    text: 'Your adventure finishes in the station,the expeirnece somehow change you, ',
                    options: [
                        {
                            text: 'Go to another planet',
                            requiredState: (currentState) => currentState.mountainWorld,
                            setState: { damned : true , binaryWorlds : false },
                            nextPath: 2
                        },
                        {
                            text: 'go to the other station',
                            requiredState: (currentState) => currentState.mountainWorld,
                            setState: { damned : true },
                            nextPath: 59
                        },
                    ]
                },
            
            //OMEGA STATION
            {
                id: 59,
                text: 'Arrive to Omega station, way to inert to venture ',
                options: [
                    {
                        text: 'go to the inscription you see on a panel, human like and take a picture',
                        requiredState: (currentState) => currentState.mountainWorld,
                        setState: { damned : true },
                        nextPath: 60
                    },
                    {
                        text: 'Go to the next room right away',
                        requiredState: (currentState) => currentState.mountainWorld,
                        setState: { damned : true },
                        nextPath: 60
                    },
                ]
            },
                //CHAMBER
                {
                    id: 60,
                    text: 'yOU ARRIVE INTO A CHAMBER, Where the tenum sound comes, before decide wheter to take the risk t bring it with you ',
                    options: [
                        {
                            text: 'The stone and go to another planet',
                            requiredState: (currentState) => currentState.mountainWorld,
                            setState: { damned : true },
                            nextPath: 54
                        },
                        {
                            text: 'I pass',
                            requiredState: (currentState) => currentState.mountainWorld,
                            setState: { damned : true, binaryWorlds : false},
                            nextPath: 2
                        },
                    ]
                },
    //RING WORLD
        {
            id: 61,
            text: 'Circling a gas giant, you enter world, you land on a plane next to the nly strcuture in the whole planet, and it looks like human cosntruction, but no signs detected of lifeforms in the whole moon, once landed you ',
            options: [
                {
                    text: 'Go to the lake',
                    requiredState: (currentState) => currentState.mountainWorld,
                    setState: { damned : true },
                    nextPath: 62
                },
                {
                    text: 'Go to the cabin',
                    requiredState: (currentState) => currentState.mountainWorld,
                    setState: { damned : true },
                    nextPath: 63
                },
            ]
        },

            //LAKE
            {
                id: 62,
                text: 'Once on the lake\'s shore, You seem to notice a strange glow coming from deep inside the lake, you are not sure what you do',
                options: [
                    {
                        text: 'Swim closer to the glow',
                        requiredState: (currentState) => currentState.mountainWorld,
                        setState: { damned : true },
                        nextPath: 64
                    },
                    {
                        text: 'Through rocks at the lake and go to the cabin',
                        requiredState: (currentState) => currentState.mountainWorld,
                        setState: { damned : true },
                        nextPath: 63
                    },
                ]
            },
            // SWIM INSIDE THE LAKE
                {
                    id: 64,
                    text: 'You look like are on top if, the only thing is that the glow comes from many meters deep, you tried to arrive but looks way to deep, do you give it a last try?',
                    options: [
                        {
                            text: 'Try one last time',
                            requiredState: (currentState) => currentState.mountainWorld,
                            setState: { damned : true },
                            nextPath: 65
                        },
                        {
                            text: 'Swim back t the shore and go to the cabin',
                            requiredState: (currentState) => currentState.mountainWorld,
                            setState: { damned : true },
                            nextPath: 63
                        },
                    ]
                },
                // SWIM INSIDE THE LAKE
                {
                    id: 65,
                    text: 'You seem to struggle with your breath, but finally you get to touch what ti looks lika big green sphere, you black out and wake ut in the shore, a feeling tells you is better to go rest to the cabin',
                    options: [
                        {
                            text: 'Go to the cabin',
                            requiredState: (currentState) => currentState.mountainWorld,
                            setState: { damned : true },
                            nextPath: 63
                        },
                        {
                            text: 'Get out of this planet',
                            requiredState: (currentState) => currentState.mountainWorld,
                            setState: { damned : true, ringWorld: false },
                            nextPath: 2
                        },
                    ]
                },

                 // CABIN
                {
                    id: 63,
                    text: 'You go inside the cabin, and you find a bed and a hatch open that takes downstairs',
                    options: [
                        {
                            text: 'Take the bed and get out of the planet',
                            requiredState: (currentState) => currentState.mountainWorld,
                            setState: { damned : true, ringWorld: false },
                            nextPath: 2
                        },
                        {
                            text: 'Explore the hatch',
                            requiredState: (currentState) => currentState.mountainWorld,
                            setState: { damned : true },
                            nextPath: 67
                        },
                    ]
                },

                    // Go into the basement
                    {
                        id: 67,
                        text: 'Inside the basement, you see an inactive object, is like a black monolit, you explore it from many sides but nothing that gives you any perception',
                        options: [
                            {
                                text: 'Go back to the ship',
                                requiredState: (currentState) => currentState.mountainWorld,
                                setState: { damned : true, ringWorld: false },
                                nextPath: 2
                            },
                        ]
                    },

    // TERMINUS
            {
            id: 68,
            text: 'On the outter reach of the system, an Earth size planet shows uo n the screen, it may not be as watery as home, instead it seems abandoned, like rest of a colapsed civilizatio, deeper into the atmosphere, there seem to be a plateu in one of the big ruins concentration',
            options: [
                {
                    text: 'Explore the temple',
                    requiredState: (currentState) => currentState.ultimaMundi,
                    setState: { temple : true },
                    nextPath: 69
                },
            ]
            },
        // TEMPLE
                {
                id: 69,
                text: 'In the ruins of the temple a clear structure can be appreciated, the celling is gone, but at the center of the floors a cristal like structure remains, it asks for a hand, a human one, how strange,',
                options: [
                    {
                        text: 'Put your hand on it',
                        requiredState: (currentState) => currentState.temple,
                        setState: { activateStructure : true },
                        nextPath: 70
                    },
                ]
                },
        // THE ORACLE
                {
                id: 70,
                text: 'With your hand, the mechanism activates, it looks suited for human hands, and an holographic display fills the room, the language displayed seems like a distorted version of the present English, in order to access to the fully capaabiloties, the visualizer demands you to pass a series of test,',
                options: [
                    {
                        text: 'Start the test',
                        requiredState: (currentState) => currentState.activateStructure,
                        setState: { testOracle : true },
                        nextPath: 71
                    },
                ]
                },
            // THE TEST
            // PSYCOHISTORY
                    {
                    id: 71,
                    text: 'Psychohistory',
                    options: [
                        {
                            text: '1000 years to reign again',
                            requiredState: (currentState) => currentState.testOracle,
                            setState: { psychoHistory : true },
                            nextPath: 70
                        },
                        {
                            text: '30.000 years is the path',
                            requiredState: (currentState) => currentState.testOracle,
                            setState: { psychoHistory : true },
                            nextPath: 72
                        },
                        {
                            text: '300 hundred years to fail',
                            requiredState: (currentState) => currentState.testOracle,
                            setState: { psychoHistory : true },
                            nextPath: 70
                        },
                    ]
                    },
            // ASIMOV
                    {
                    id: 72,
                    text: 'Laws of synthetics',
                    options: [
                        {
                            text: 'law 0 a robot will save juanity from tiself',
                            requiredState: (currentState) => currentState.testOracle,
                            setState: { laws : true },
                            nextPath: 73
                        },
                        {
                            text: 'law I. A robot may not injure a human being or, through inaction, allow a human being to come to harm.',
                            requiredState: (currentState) => currentState.testOracle,
                            setState: { laws : true },
                            nextPath: 70
                        },
                        {
                            text: 'Second Law. robot must obey the orders given it by human beings except where such orders would conflict with the First Law.',
                            requiredState: (currentState) => currentState.testOracle,
                            setState: { laws : true },
                            nextPath: 70
                        },
                    ]
                    },
            // ENCICLOPEDIA
                    {
                    id: 73,
                    text: 'Encyclopedists',
                    options: [
                        {
                            text: 'Follow the major',
                            requiredState: (currentState) => currentState.testOracle,
                            setState: { encyclopedists : true },
                            nextPath: 70
                        },
                        {
                            text: 'Avoid confrontation',
                            requiredState: (currentState) => currentState.testOracle,
                            setState: { encyclopedists : true },
                            nextPath: 74
                        },
                        {
                            text: 'Catalog all the knowledge',
                            requiredState: (currentState) => currentState.testOracle,
                            setState: { encyclopedists :true },
                            nextPath: 70
                        },
                    ]
                    },
            // THE MAYORS
                    {
                    id: 74,
                    text: 'Majors',
                    options: [
                        {
                            text: 'Subyugation of the 4 kingdoms',
                            requiredState: (currentState) => currentState.testOracle,
                            setState: { majors : true },
                            nextPath: 70
                        },
                        {
                            text: 'Science by religion',
                            requiredState: (currentState) => currentState.testOracle,
                            setState: { majors : true },
                            nextPath: 70
                        },
                        {
                            text: 'Fallback',
                            requiredState: (currentState) => currentState.testOracle,
                            setState: { majors : true },
                            nextPath: 75
                        },
                    ]
                    },
            // TRADERS
                    {
                    id: 75,
                    text: 'Traders',
                    options: [
                        {
                            text: 'The empire is outdated',
                            requiredState: (currentState) => currentState.testOracle,
                            setState: { traders : true },
                            nextPath: 70
                        },
                        {
                            text: 'Plutocracy',
                            requiredState: (currentState) => currentState.testOracle,
                            setState: { traders : true },
                            nextPath: 76
                        },
                        {
                            text: 'More in less',
                            requiredState: (currentState) => currentState.testOracle,
                            setState: { traders : true },
                            nextPath: 70
                        },
                    ]
                    },
            // ORIGIN
                    {
                    id: 76,
                    text: 'Origin',
                    options: [
                        {
                            text: 'TERMINUS',
                            requiredState: (currentState) => currentState.testOracle,
                            setState: { origin : true },
                            nextPath: 70
                        },
                        {
                            text: 'TRANTOR',
                            requiredState: (currentState) => currentState.testOracle,
                            setState: { origin : true },
                            nextPath: 70
                        },
                        {
                            text: 'TAZENDA',
                            requiredState: (currentState) => currentState.testOracle,
                            setState: { origin : true },
                            nextPath: 79
                        },
                    ]
                    },
            // FINAL
                    {
                    id: 79,
                    text: 'You succesfully passed the test, only of our own could have done it, there has been thousands of years since I last seen your kind, you look stranged, you\'ve never been here, you ask to the AI',
                    options: [
                        {
                            text: 'Tell me about his civilization',
                            requiredState: (currentState) => currentState.origin,
                            setState: { final : true },
                            nextPath: 80
                        },
                        {
                            text: 'The oracle must be confused, I go along',
                            requiredState: (currentState) => currentState.origin,
                            setState: { final : true },
                            nextPath: 80
                        },
                    ]
                    },
                    // follow up with the AI
                    {
                    id: 80,
                    text: 'Wait a second, your way to speak is uncommon, looks like the ancient dialects of the empire\'s offical language, and you get old robes that not even my data bases can register, I cannot give you a clear answer but what year you think you are',
                    options: [
                        //ONLY TRUE ON OF THE TWO
                        {
                            text: 'Gives ypu a present, you go back to the ship',
                            requiredState: (currentState) => currentState.final,
                            nextPath: 2
                        },
                        {
                            text: 'We are in the middle of the 2253',
                            requiredState: (currentState) => currentState.final,
                            nextPath: 81
                        },
                    ]
                    },

                    {
                    id: 81,
                    text: 'Analyzing my databases something funny came up, you are the first human ever to cross a singularity, somehow 10.000 years ago, you were lsot, scintists talked abut hte possibility of a solar flare caching up at the moment of passing though ',
                    options: [
                        //ONLY TRUE ON OF THE TWO
                        {
                            text: 'So this is why it recognizes my presence, but wait, what happened to ... \'humanity\'?',
                            requiredState: (currentState) => currentState.final,
                            nextPath: 82
                        },
                    ]
                    },
                    {
                        id: 82,
                        text: 'There is no clear reason why or how it happened, but one day... everywhere across the thousands of planets across the galaxy, people just were left blackout ndefinitely, in an instant a galaxy wide cvilization was demeed powerless, like 2 thousand years ago',
                        options: [
                            {
                                text: 'Is there a way to go back to my time?',
                                requiredState: (currentState) => currentState.final,
                                nextPath: 83
                            },
                        ]
                    },
                    {
                        id: 83,
                        text: 'In this system, there is a strange artifact show emulating one of a long gone show called futurama, tales and leyends been written from it, it goes forward on time until the univers resets itself, it may let you find your way home',
                        options: [
                            {
                                text: 'Thank you for the information, is there anyway to prevent ... this',
                                requiredState: (currentState) => currentState.final,
                                nextPath: 84
                            },
                        ]
                    },
                    {
                        id: 84,
                        text: 'I analyzed the data of waht could have happened, there is no clear answer yet, but this could only be done by powers beyond this dimension comprehnsion, I will give you an item where all the information is stored, hopeit helos your time, save travel',
                        options: [
                            {
                                text: 'You go back to the ship',
                                requiredState: (currentState) => currentState.final,
                                setState: {ultimaMundi: false }, 
                                nextPath: 2
                            },
                        ]
                    },




        {
        id: 200,
        text: 'Neither of the path had a happy ending, now you are lost in time but with a chance to return, take the futurama loop over',
        options: [
            {
                text: 'Big Freeze first and then the Big bang',
                // I put -1 so we identify id bigger than 0, your are send back to starting screen
                setState: { timeForwardMachine: true},
                nextPath: -1
            }
        ]
        },

]




//We put it at hte bottom to load once everything is loaded


