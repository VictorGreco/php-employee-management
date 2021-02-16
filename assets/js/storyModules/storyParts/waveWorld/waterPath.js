import {storyPage, Option} from '../../classes.js'
import {restartTimelineCount} from '../../../main.js'

//OVER THE ORBIT
//Start page, each planet has a different timeDilation due to the singularity proximity.
const howFarIGo = new storyPage(19, 'You are docked in wet land and decide to take a walk, you feel almost double your normal weight. Venturing your eyes you can spot what look like debris over 1km away, on the opposite way of the \' mountain you saw\'')
//Go down the gravity well
const setState19__1 =  { stayClose : true, goToDebris: false }
const requiredState19__1 =  (currentState) => currentState.lowWater
const option19__1 = new Option ( 'Stay close to the ship', 20, setState19__1, requiredState19__1)
//Go bak to the gate
const setState19__2 = { stayClose : false, goToDebris: true }
const requiredState19__2 =  (currentState) => currentState.lowWater
const option19__2 = new Option ( 'Go to inspect the debris', 21, setState19__2, requiredState19__2)
//Options added trough object class property
    howFarIGo.addOption = option19__1;
    howFarIGo.addOption = option19__2;

    //STAY CLOSE
    const howFarIGo__close = new storyPage(20, 'You wander close to the ship and you start to feel tired, on the horizon, you see that the \'mountains\' are kind of moving, then a shiver goes through your spine as you realize those are actual waves')
    const setState20__1 =  { stayClose : true, goToDebris: false }
    const requiredState20__1 =  (currentState) => currentState.stayClose
    const option20__1 = new Option ( 'Stay close to the ship', 34, setState20__1, requiredState20__1)
        howFarIGo__close.addOption = option20__1;

    //STAY AWAY
    const howFarIGo__away = new storyPage(21, 'It takes forever to arrive where the debris are, you see what it looks like an empty abandoned alien ship, you realize a strange low sound comes from inside the hull. \n What do you do next?')
    //Go inside the ship
    const setState21__1 =  { insideHull : true, outsideHull: false}
    const requiredState21__1 =  (currentState) => currentState.goToDebris
    const option21__1 = new Option ( 'Search inside the ship', 22, setState21__1, requiredState21__1)
    //Search outside
    const setState21__2 =  { insideHull : false, outsideHull: true}
    const requiredState21__2 =  (currentState) => currentState.goToDebris
    const option21__2 = new Option ( 'Search outside', 28, setState21__2, requiredState21__2)
        howFarIGo__away.addOption = option21__1;
        howFarIGo__away.addOption = option21__2;

        //INSIDE THE HULL
        const insideTheHull = new storyPage(22, 'You find what it looks like a vent and go inside the organic-ship\'s structure, you follow the soft sound and go straight to it, you arrive to an almost trashed compartment and find two noisy spheres, one red and one blue. \n Which one you pick?')
        //Go inside the ship
        const setState22__1 =  { blueSphere : true, redSphere: false }
        const requiredState22__1 =  (currentState) => currentState.insideHull
        const option22__1 = new Option ( 'Blue glowing Sphere', 23, setState22__1, requiredState22__1)
        //Search outside
        const setState22__2 =  { blueSphere : true, redSphere: false }
        const requiredState22__2 =  (currentState) => currentState.insideHull
        const option22__2 = new Option ( 'Red Sphere', 23, setState22__2, requiredState22__2)
            insideTheHull.addOption = option22__1;
            insideTheHull.addOption = option22__2;

        //ONCE OUTSIDE
        const afterTheHull = new storyPage(23, 'It seems like you got an unidentified artifact after all, you go outside the hull and... \n wait.... \n the \'mountains\ are actually titanic waves, you run fast enough you will get to the ship before the wave hits you. \n What are you going to do? ')
        //Use red sphere
        const setState23__1 =  { useBlueSphere : false, useRedSphere : true, runForYourLife : false, timeLeft:false}
        const requiredState23__1 =  (currentState) => currentState.redSphere
        const option23__1 = new Option ( 'Use the red sphere', 24, setState23__1, requiredState23__1)
        //Use blue sphere
        const setState23__2 =  { useBlueSphere : true, useRedSphere : false, runForYourLife : false, timeLeft:false}
        const requiredState23__2 =  (currentState) => currentState.blueSphere
        const option23__2 = new Option ( 'Use the blue sphere', 24, setState23__2, requiredState23__2)
        //Run for your life
        const setState23__3 =  { useBlueSphere : false, useRedSphere : false, runForYourLife : true}
        const requiredState23__3 =  (currentState) => currentState.redSphere
        const option23__3 = new Option ( 'Run for your life', 34, setState23__3, requiredState23__3)
        //Give up
        const setState23__4 =  { useBlueSphere : true, useRedSphere : false, runForYourLife : false, surrenderWithSphere: true}
        const requiredState23__4 =  (currentState) => currentState.blueSphere
        const option23__4 = new Option ( 'I no longer want to live, I will wait until it hits me', 35, setState23__4, requiredState23__4)
            afterTheHull.addOption = option23__1;
            afterTheHull.addOption = option23__2;
            afterTheHull.addOption = option23__3;
            afterTheHull.addOption = option23__4;
        
        //SPHERE PATH
        const spherePath = new storyPage(24, 'Even though you don´t know what to to with the sphere in your hands, you spend time trying to figure out how the hell activate it, it looks like you are going to give up... \n What do you do?')
        //Use red sphere
        const setState24__1 =  { communicate : false, throw: true }
        const requiredState24__1 =  (currentState) => currentState.useBlueSphere
        const option24__1 = new Option ( 'You throw it away', 25, setState24__1, requiredState24__1)
        //Use blue sphere
        const setState24__2 =  { communicate : true, throw: false}
        const requiredState24__2 =  (currentState) => currentState.useBlueSphere
        const option24__2 = new Option ( 'You try to communicate to it', 26, setState24__2, requiredState24__2)
        //Run for your life
        const setState24__3 =  { useBlueSphere : false, useRedSphere : true, runForYourLife : false}
        const requiredState24__3 =  (currentState) => currentState.redSphere
        const option24__3 = new Option ( 'You keep trying', 26, setState24__3, requiredState24__3)
        //Give up
        const setState24__4 =  { useBlueSphere : false, useRedSphere : false, smash: true}
        const requiredState24__4 =  (currentState) => currentState.redSphere
        const option24__4 = new Option ( 'You smash it to the hull', 27, setState24__4, requiredState24__4)
            spherePath.addOption = option24__1;
            spherePath.addOption = option24__2;
            spherePath.addOption = option24__3;
            spherePath.addOption = option24__4;
        
        //THROW IT. BLUE SPHERE
        const throwSphere = new storyPage(25,'You throw the sphere and you get very upset because you don\'t know if you have time left before the huge wave hits \n What is your final decision?')
        //Give up
        const setState25__1 =  { youGiveUp : true }
        const requiredState25__1 =  (currentState) => currentState.throw
        const option25__1 = new Option ( 'Give up and wait until the wave hits me', 35, setState25__1, requiredState25__1)
        //Try to make a run
        const setState25__2 =  { runForYourLife : true }
        const requiredState25__2 =  (currentState) => currentState.throw
        const option25__2 = new Option ( 'Try to make a run for it', 34, setState25__2, requiredState25__2)
        throwSphere.addOption = option25__1;
        throwSphere.addOption = option25__2;

        // TRY TO COMMUNICATE. BLUE SPHERE & RED SPHERE
        const communicateWithSphere = new storyPage(26,'You keep one chance in your mind that it might work, but it doesn´t seem like your futile efforts pay off...but...something starts to feel strange, you black out and appear in an empty blue ish room, an orb type of being appears in front of you, evaluating you... it seems you can understand it, it gives you options based on your past choices \n You can only pick one')
        //Die peacefully
        const setState26__1 =  { surrenderWithSphere: true }
        const requiredState26__1 =  (currentState) => currentState.communicate
        const option26__1 = new Option ( 'Choose to die peacefully', 35, setState26__1, requiredState26__1)
        //Take a test
        const setState26__2 =  { test : true, hellEternum: true }
        const requiredState26__2 =  (currentState) => currentState.communicate && !currentState.hellEternum
        const option26__2 = new Option ( 'Take a test', 6, setState26__2, requiredState26__2)
        //Go back in time
        const setState26__3 =  { communicate : false, throw: false, insideHull : false, outsideHull: false, goToDebris: false }
        const requiredState26__3 =  (currentState) => currentState.useRedSphere
        const option26__3 = new Option ( 'Go back in time before you decided to wonder around the debris', 19, setState26__3, requiredState26__3)
        communicateWithSphere.addOption = option26__1;
        communicateWithSphere.addOption = option26__2;
        communicateWithSphere.addOption = option26__3;

        // YOU SMASHED IT
        const smashSphere = new storyPage(27,'You smash the sphere against the ship\'s hull and you get so angry, you make a run for your life to get to the ship \n Do you pick up the sphere?')
        //Give up
        const setState27__1 =  {runForYourLife : true, pickUpSphere:true, heavy:true}
        const requiredState27__1 =  (currentState) => currentState.smash
        const option27__1 = new Option ( 'Give up and wait until the wave hits me', 34, setState27__1, requiredState27__1)
        //Try to make a run
        const setState27__2 =  {runForYourLife : true, pickUpSphere:false, heavy:false}
        const requiredState27__2 =  (currentState) => currentState.smash
        const option27__2 = new Option ( 'Try to make a run for it', 34, setState27__2, requiredState27__2)
        smashSphere.addOption = option27__1;
        smashSphere.addOption = option27__2;

        // OUTSIDE HULL DECISION
        const outsideHullDecision = new storyPage(28, 'From the outside, the ship has an stranger organic-like form, unconceivable by today\'s standards. While looking over the ship, something unexpected chages in the horizon, \n the mountains are actually waves!!! And they are getting closer   \n What do you do next?')
        const setState28__1 =  { runForYourLife : true }
        const requiredState28__1 =  (currentState) => currentState.outsideHull
        const option28__1 = new Option ( 'Try to make a run for it', 34, setState28__1, requiredState28__1)
        outsideHullDecision.addOption = option28__1;

        // BACK FROM HELL
        const hellTestPassed = new storyPage(33, 'Despite your deceptive reckless past choices, you made it through the nine circles and showed me long missed kindness, and for that I will give you the choice to go back with the experiences from the past, please, be wiser and braver this time')
        const setState33__1 =  { communicate : false, throw: false, insideHull : false, outsideHull: false, goToDebris: false}
        const requiredState33__1 =  (currentState) => currentState.satan
        const option33__1 = new Option ( 'Go back in time before you decided to wonder around the debris', 19, setState33__1, requiredState33__1)
        hellTestPassed.addOption = option33__1;






export {howFarIGo, howFarIGo__close, howFarIGo__away, insideTheHull, afterTheHull, spherePath, throwSphere, communicateWithSphere, smashSphere, outsideHullDecision, hellTestPassed}