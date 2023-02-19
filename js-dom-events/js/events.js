// option 1: direcly set on the HTML element
// <button onclick="console.log(65)"> another button</button>
console.log('This is separate JS file');

// option 2: add onclick function on the HTML element
// IMPORTANT: wE WILL USE THIS
// <button onclick="makeRed()"Make Red</button>
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option 3:
const makeBlueButton = document.getElementById('make-blue');
    makeBlueButton.onclick = makeBlue;
    function makeBlue(){
        document.body.style.backgroundColor = 'blue'
    
    }

    // option 3:another
    const pinkButton = document.getElementById('make-pink');
    pinkButton.addEventListener('click', makePink);
        
    function makePink(){
        document.body.style.backgroundColor = 'pink'
    }

    // option 4:add EventListener
    const PurpleButton = document.getElementById('make-purple');
    PurpleButton.onclick = function makePurple(){
        document.body.style.backgroundColor = 'purple'
    }
    // option 4:another
    const makeGreenButton = document.getElementById('make-green');
    makeGreenButton.addEventListener('click', function makeGreen(){
      document.body.style.backgroundColor = 'green'
    })

    // option 4: final
    // Important: We will use this sometimes
        document.body.style.backgroundColor = 'goldenRod';
    // document.getElementById('make-goldenRod').addEventListener('click', function(){})
    document.getElementById('make-goldenRod').addEventListener('click', function(){
        document.body.style.backgroundColor = 'goldenRod';
      })