(function(){
    // find the button object with the id #btn
    const button = document.querySelector('#btn');
    // find the object "body"
    const body = document.querySelector('body');
    // create the array of values in a hex code
    const hexValues = [0,1,2,3,4,5,6,7,8,0,'A','B','C','E','F',];
    
    const value = document.querySelector('#hex-value');
    // creates an Onclick event which flips the background color to the random hex code
    button.addEventListener('click', changeHex);

    function changeHex(){
        let hex = '#';

        for (let i = 0; i < 6; i++){
            const index = Math.floor(Math.random()*hexValues.length);
            hex += hexValues[index];
        }
        console.log(hex);
        value.textContent = hex;
        body.style.backgroundColor = hex;
    }
})();