/** Three Question Rule for Events:
 
    Overview: We want to click the home link and make the home page appear 

    Question 1. When? When do we want to be able to click the home link to make the home page appear (DOMContentLoaded)

    Question 2. Cause: What is the cause of the event that happens (click event)

    Question 3. Effect: What is going to happen when the event triggers. (make the home page appear)

  
  **/




/** Global Variables **/


/** Node Getters **/
const mainDiv = () => document.getElementById('main');
const homeLink = () => document.getElementById('home-link');


/** Event Listeners **/

const attachHomePageLinkeEvent = () => {
    homeLink().addEventListener('click', loadHome)
}

/** Event Handlers **/
    const loadHome = () => {
        resetMainDiv();
        const h1 = document.createElement('h1');
        const p = document.createElement('p');


        h1.className = 'center-align';
        p.className = 'center-align';

        h1.innerText = "Track your crypto portfolio";
        p.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quibusdam maxime magnam eos sequi. Placeat nesciunt minus, corrupti, repellendus nobis qui obcaecati, possimus corporis cum voluptas quae voluptatibus debitis officiis.";

        mainDiv().appendChild(h1);
        mainDiv().appendChild(p);
  

    }

/** MISC **/
const resetMainDiv = () => {
    mainDiv().innerHTML = " "
}

/** Startup **/


document.addEventListener('DOMContentLoaded', function(){
    //what do we want to do when the page loads?
    //load the home page
    loadHome();
    attachHomePageLinkeEvent();
})