console.log('home.js')


let time = document.getElementById('time');
let counter = parseInt(time.innerText);

const countdown = setInterval(async () => {
    counter--;
    time.innerText = counter;

    if (counter === 0) {
        counter = 59

        // make request
        const data = await fetchData()
        if (data.message === 'success') {

            // set the values to the layout
            console.log('success')
        }

    }
}, 1000);

async function fetchData() {
    try {

        const URL = 'http://localhost:3000/get-data'

        const response = await fetch(URL)

        const data = await response.json()
     
        return data
    } catch (error) {

        console.log('fetch --> ', error)
    }
}