console.log('home.js')


let time = document.getElementById('time');
let counter = parseInt(time.innerText);

const countdown = setInterval(() => {
    counter--;
    time.innerText = counter;
  
    if (counter === 0) {
        counter = 59

        // make request
    }
}, 1000);