
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const mesage1 = document.querySelector('#msg1')
const mesage2 = document.querySelector('#msg2')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    mesage1.textContent='Loading...'
    mesage2.textContent=''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                mesage1.textContent = data.error
            } else {
                mesage1.textContent = data.location
                mesage2.textContent = data.forecast
            }
        })
    })
})