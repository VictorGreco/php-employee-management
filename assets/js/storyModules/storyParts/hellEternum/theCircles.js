import {storyPage, Option} from '../../classes.js'
import {restartTimelineCount} from '../../../main.js'

//THE CIRCLES
//RIGHT TO DESCEND
const hellVestibule = new storyPage(6, 'Lasciate ogne speranza, voi ch\'intrate \n  "Abandon all hope, ye who enter here" ')
//HELL VESTIBULE
const setState6__1 = { hellVestibule: false }
const requiredState6__1 =  (currentState) => !currentState.test && !currentState.suicidal && !currentState.damned
const option6__1 = new Option ( 'You took no side, nor you could advance', 5, setState6__1, requiredState6__1)
const setState6__2 = { limbo: true }
const option6__2 = new Option ( 'Take the Archeron River.', 7, setState6__2)
//Options added trough object class property
    hellVestibule.addOption = option6__1;
    hellVestibule.addOption = option6__2;

//LIMBO
const limbo = new storyPage(7, 'They could not, that is, choose Christ; \n they could, and did, choose human virtue, \n and for that they have their reward.')
const setState7__1 = { limbo: false }
const requiredState7__1 =  (currentState) => currentState.hellVestibule || currentState.limbo
const option7__1 = new Option ( 'Share your thoughts with philosophers and go back', 6, setState7__1, requiredState7__1)
const setState7__2 = { limbo: true }
const requiredState7__2 =  (currentState) => currentState.hellVestibule || currentState.limbo
const option7__2 = new Option ( 'Ignore the great thinkers, proceed your quest', 8, setState7__2, requiredState7__2)
const setState7__3 = { limbo: true }
const requiredState7__3 =  (currentState) => currentState.hellVestibule || currentState.limbo
const option7__3 = new Option ( 'Advance and go Back to where the portal is', 5, setState7__3, requiredState7__3)
//Options added trough object class property
    limbo.addOption = option7__1;
    limbo.addOption = option7__2;
    limbo.addOption = option7__3;

//LUST
const lust = new storyPage(8, 'Love, which in gentlest hearts will soonest bloom \n, seized my lover with passion for that sweet body \n from which I was torn unshriven to my doom. \n Love, which permits no loved one not to love, \n took me so strongly with delight in him, \n that we are one in Hell, as we were above. \n Love led us to one death. In the depths of Hell \n Caïna waits for him who took our lives.')
const setState8__1 = { lust: false }
const requiredState8__1 =  (currentState) => currentState.limbo
const option8__1 = new Option ( 'Have fun with the "carnal Malefactors"', 7, setState8__1, requiredState8__1)
const setState8__2 = { lust: true }
const requiredState8__2 =  (currentState) => currentState.limbo
const option8__2 = new Option ('Pass through the ruined slope', 9, setState8__2, requiredState8__2)
const setState8__3 = { lust: true }
const requiredState8__3 =  (currentState) => currentState.limbo && !currentState.test && !currentState.damned
const option8__3 = new Option ( 'Pass the ruined slope and go back to the portal', 5, setState8__3, requiredState8__3)
//Options added trough object class property
    lust.addOption = option8__1;
    lust.addOption = option8__2;
    lust.addOption = option8__3;

//GLUTTONY
const gluttony = new storyPage(9, 'Cerberus, the monstrous three-headed beast of Hell, ravenously guards the gluttons lying in the freezing mire, mauling and flaying them with his claws as they howl like dogs.')
const setState9__1 = { gluttony: false }
const requiredState9__1 =  (currentState) => currentState.lust
const option9__1 = new Option ( 'Grovel in the mud', 8, setState9__1, requiredState9__1)
const setState9__2 = { gluttony: true }
const requiredState9__2 =  (currentState) => currentState.lust
const option9__2 = new Option ( 'Fill its three mouths with mud', 10, setState9__2, requiredState9__2)
const setState9__3 = { gluttony: true }
const requiredState9__3 =  (currentState) => currentState.lust && !currentState.test && !currentState.damned
const option9__3 = new Option ( 'Beat the monster go back to the portal', 5, setState9__3, requiredState9__3)
//Options added trough object class property
    gluttony.addOption = option9__1;
    gluttony.addOption = option9__2;
    gluttony.addOption = option9__3;

//GREED
const greed = new storyPage(10, 'Here, too, I saw a nation of lost souls, \n far more than were above: they strained their chests \n against enormous weights, and with mad howls \n rolled them at one another. Then in haste \n they rolled them back, one party shouting out: \n"Why do you hoard?" and the other: "Why do you waste?')
const setState10__1 = { greed: false }
const requiredState10__1 =  (currentState) => currentState.gluttony
const option10__1 = new Option ( 'Join a clan, hoard and squander', 9, setState10__1, requiredState10__1)
const setState10__2 = { greed: true }
const requiredState10__2 =  (currentState) => currentState.gluttony
const option10__2 = new Option ( 'Ignore both groups', 11, setState10__2, requiredState10__2)
const setState10__3 = { greed: true }
const requiredState10__3 =  (currentState) => currentState.gluttony && !currentState.test && !currentState.damned
const option10__3 = new Option ( 'Go passed the clans and back to the portal', 5, setState10__3, requiredState10__3)
//Options added trough object class property
    greed.addOption = option10__1;
    greed.addOption = option10__2;
    greed.addOption = option10__3;

//ANGER
const anger = new storyPage(11, 'That which had its tender and romantic beginnings in the dalliance of indulged passion')
const setState11__1 = { anger: false }
const requiredState11__1 =  (currentState) => currentState.greed
const option11__1 = new Option ( 'Join the wrathful souls', 10, setState11__1, requiredState11__1)
const setState11__2 = { anger: true }
const requiredState11__2 =  (currentState) => currentState.greed
const option11__2 = new Option ( 'Face your sins', 12, setState11__2, requiredState11__2)
const setState11__3 = { anger: true }
const requiredState11__3 =  (currentState) => currentState.greed && !currentState.test && !currentState.damned
const option11__3 = new Option ( 'Take a pause after facing yourself', 5, setState11__3, requiredState11__3)
//Options added trough object class property
    anger.addOption = option11__1;
    anger.addOption = option11__2;
    anger.addOption = option11__3;

//HERESY
const heresy = new storyPage(12, 'When "the portal of the future has been shut". it will no longer be possible for them to know anything')
const setState12__1 = { heresy: false }
const requiredState12__1 =  (currentState) => currentState.anger
const option12__1 = new Option ( 'Shut future\'s door', 11, setState12__1, requiredState12__1)
const setState12__2 = { heresy: true }
const requiredState12__2 =  (currentState) => currentState.anger
const option12__2 = new Option ( 'Avoid blasphemy', 13, setState12__2, requiredState12__2)
const setState12__3 = { heresy: true }
const requiredState12__3 =  (currentState) => currentState.anger && !currentState.test && !currentState.damned
const option12__3 = new Option ( 'Back to the portal room', 5, setState12__3, requiredState12__3)
//Options added trough object class property
    heresy.addOption = option12__1;
    heresy.addOption = option12__2;
    heresy.addOption = option12__3;

//VIOLENCE
const violence = new storyPage(13, '"Along the brink of the vermilion boiling, \n Wherein the boiled were uttering loud laments. \n People I saw within up to the eyebrows ')
const setState13__1 = { violence: false }
const requiredState13__1 =  (currentState) => currentState.heresy
const option13__1 = new Option ( 'Party hard in Sodoma', 12, setState13__1, requiredState13__1)
const setState13__2 = { violence: true }
const requiredState13__2 =  (currentState) => currentState.heresy
const option13__2 = new Option ( 'Progress across the burning plain', 14, setState13__2, requiredState13__2)
const setState13__3 = { violence: true }
const requiredState13__3 =  (currentState) => currentState.heresy && !currentState.test && !currentState.suicidal && !currentState.damned
const option13__3 = new Option ( 'Go clean yourself from the blood', 5, setState13__3, requiredState13__3)
//Options added trough object class property
    violence.addOption = option13__1;
    violence.addOption = option13__2;
    violence.addOption = option13__3;

//FRAUD
const fraud = new storyPage(14, 'The image of the City in corruption: the progressive disintegration of every social relationship, personal and public. Sexuality, ecclesiastical and civil office, language, ownership, counsel, authority, psychic influence, and material interdependence – all the media of the community\'s interchange are perverted and falsified')
const setState14__1 = { fraud: false }
const requiredState14__1 =  (currentState) => currentState.violence
const option14__1 = new Option ( 'Make yourself the major of the city', 13, setState14__1, requiredState14__1)
const setState14__2 = { fraud: true }
const requiredState14__2 =  (currentState) => currentState.violence
const option14__2 = new Option ( 'Approach the Central Well', 15, setState14__2, requiredState14__2)
const setState14__3 = { fraud: true }
const requiredState14__3 =  (currentState) => currentState.violence && currentState.metal && !currentState.test && !currentState.suicidal && !currentState.damned
const option14__3 = new Option (  'Watch your agonizing mum', 15, setState14__3, requiredState14__3)
const setState14__4 = { fraud: true }
const requiredState14__4 =  (currentState) => currentState.violence && !currentState.test && !currentState.suicidal && !currentState.damned
const option14__4 = new Option ( 'Disconnect from SinCity at the portal\s room', 5, setState14__4, requiredState14__4)
//Options added trough object class property
    fraud.addOption = option14__1;
    fraud.addOption = option14__2;
    fraud.addOption = option14__3;
    fraud.addOption = option14__4;

//TREACHERY
const treachery = new storyPage(15, 'The treacheries of these souls were denials of love and of all human warmth. Only the remorseless dead center of the ice will serve to express their natures. As they denied love, so are they furthest removed from the light and warmth of the Sun. As they denied all human ties, so are they bound only by the unyielding ice')
const setState15__1 = { treachery: false }
const requiredState15__1 =  (currentState) => currentState.fraud
const option15__1 = new Option ( 'Take the Judas Kiss', 14, setState15__1, requiredState15__1)
const setState15__2 = { treachery: true }
const requiredState15__2 =  (currentState) => currentState.fraud
const option15__2 = new Option ( 'Go the the center of Hell', 16, setState15__2, requiredState15__2)
const setState15__3 = { treachery: true }
const requiredState15__3 =  (currentState) => currentState.fraud && !currentState.test && !currentState.suicidal && !currentState.damned
const option15__3 = new Option ( 'Rest yourself before visiting the big boss', 5, setState15__3, requiredState15__3)
//Options added trough object class property
    treachery.addOption = option15__1;
    treachery.addOption = option15__2;
    treachery.addOption = option15__3;

//CENTER OF HELL
const centerOfHell = new storyPage(16, '... he had three faces: one in front bloodred; \n and then another two that, just above \n the midpoint of each shoulder, joined the first; \n and at the crown, all three were reattached; \n the right looked somewhat yellow, somewhat white; \n the left in its appearance was like those \n who come from where the Nile, descending, flows')
const setState16__1 = { artifact: false }
const requiredState16__1 =  (currentState) => currentState.treachery
const option16__1 = new Option ( 'Wake up the beast', 15, setState16__1, requiredState16__1)
const setState16__2 = { artifact: false, satan: true}
const requiredState16__2 =  (currentState) => currentState.treachery && !currentState.test && !currentState.damned
const option16__2 = new Option ( 'Clamber down the beast\'s ragged fur and escape through the genitalia', 5, setState16__2, requiredState16__2)
const setState16__3 = { artifact: true, satan: true}
const requiredState16__3 =  (currentState) => currentState.treachery && !currentState.test && !currentState.damned
const option16__3 = new Option ( 'Take the artifact', 5, setState16__3, requiredState16__3)
const setState16__4 = { damned: false, suicidal: false}
const requiredState16__4 =  (currentState) => currentState.treachery && !currentState.test && currentState.surrenderWithSphere
const option16__4 = new Option ( 'Leave the sphere', 5, setState16__4, requiredState16__4)
const setState16__5 = { satan: true , hellEternum: false}
const requiredState16__5 =  (currentState) => currentState.treachery && currentState.test && !currentState.damned
const option16__5 = new Option ( 'Kiss Satan\'s feet', 33, setState16__5, requiredState16__5)
//Options added trough object class property
    centerOfHell.addOption = option16__1;
    centerOfHell.addOption = option16__2;
    centerOfHell.addOption = option16__3;
    centerOfHell.addOption = option16__4;
    centerOfHell.addOption = option16__5;

export {hellVestibule, limbo, lust, gluttony, greed, anger, heresy, violence, fraud, treachery, centerOfHell}