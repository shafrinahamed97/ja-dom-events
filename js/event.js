console.log('This is separate JS file');
// Option 1: Directly set on the HTML element
//<button onclick="console.log(65)">Other Button</button>

// Option 2: Add onclick function on the html fucntion
//<button onclick="makeRed()">Make Red</button>
function makeRed()
   {
    document.body.style.backgroundColor = 'red';
   }   
   
   // option: 3
   const makeBlueButton = document.getElementById('make_blue');
    makeBlueButton.onclick = makeBlue;   
    function makeBlue()
    {
        document.body.style.backgroundColor = 'blue';
    }

    // option: 3 Another
    const purpleButton= document.getElementById('make_purple');
    purpleButton.onclick = function makePurple()
    {
        document.body.style.backgroundColor = 'purple'
    }