/** Three Question Rule for Events:
 
    Overview: Create a comment box on the comment page.

    Question 1. When? DOMContentLoaded

    Question 2. Cause: DOMContentLoaded

    Question 3. Effect: Fetch all of the jobs

  
  **/




/** Global Variables **/

const baseURL = 'http://localhost:3000';
let cryptos = [];


/** Node Getters **/
const mainDiv = () => document.getElementById('main');
const homeLink = () => document.getElementById('home-link');
const createCryptosLink = () => document.getElementById('cryptos-link');
const createCommentLink = () => document.getElementById('create-comment-link')


/** Event Listeners **/

const attachHomePageLinkeEvent = () => {
    homeLink().addEventListener('click', loadHome)
}

const attachCryptosLinkEvent = () => {
    createCryptosLink().addEventListener('click', loadCryptos)
}


const attachCommentLinkEvent = () => {
    createCommentLink().addEventListener('click', loadComment)
}

/** Event Handlers **/
    const loadHome = event => {
        if(event){
        event.preventDefault();
        }
        resetMainDiv();
        const h1 = document.createElement('h1');
        const p = document.createElement('p');


        h1.className = 'center-align';
        p.className = 'center-align';

        h1.innerText = "Basic crypto info for newbies!";
        p.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quibusdam maxime magnam eos sequi. Placeat nesciunt minus, corrupti, repellendus nobis qui obcaecati, possimus corporis cum voluptas quae voluptatibus debitis officiis.";

        mainDiv().appendChild(h1);
        mainDiv().appendChild(p);
  

    }



    const loadCryptos = event => {
        event.preventDefault();
        resetMainDiv();
        const h1 = document.createElement('h1');
        const div = document.createElement('div');
       

        h1.innerText = 'Cryptos';
       


        div.className = 'collection';

        cryptos.forEach(cryptos => {
            const a = document.createElement('a')
            a.className = 'collection-item';
            a.innerText = cryptos.name;

            div.appendChild(a);
        })
        

    //     <h1>Cryptos</h1>
    //     <div class="collection">
    //     <a class="collection-item">Bitcoin</a> 
    //     <a class="collection-item">Ethereum</a> 
    //     <a class="collection-item">Cardano</a> 
    //     <a class="collection-item">Ripple</a> 
    //     <a class="collection-item">Dogecoin</a> 
    //     <a class="collection-item">Polygon</a> 
    //     <a class="collection-item">Binance</a> 
    //     <a class="collection-item">Solana</a>
    //     <a class="collection-item">Avalanche</a>       
    // </div>

        mainDiv().appendChild(h1) 
        mainDiv().appendChild(div)
    }



    const loadComment = event => {
        event.preventDefault();
        resetMainDiv();

        const h1 = document.createElement('h1');
        h1.innerText = 'Comment';

        mainDiv().appendChild(h1)
    }


/** REQUESTS **/
    const getCryptos = () => {
        fetch(baseURL + '/cryptos')
        .then(resp => resp.json())
        .then(data => {
            // console.log('data', data)
            cryptos = data;
        })
    }

/** MISC **/
const resetMainDiv = () => {
    mainDiv().innerHTML = " "
}

/** Startup **/


document.addEventListener('DOMContentLoaded', function(){
    //what do we want to do when the page loads?
    //load the home page
    getCryptos();
    // loadHome();
    attachHomePageLinkeEvent();
    attachCryptosLinkEvent();
    attachCommentLinkEvent();
})