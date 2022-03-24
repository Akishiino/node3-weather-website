const request = require('request')
//funkcija koja ce nam pokazati vreme na trenutnoj lokaciji koju smo nasli preko long i lat


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9e51b64a78e731236aadea44160f1847&query=' + latitude + ',' + longitude + '&units=f'

    request({url, json: true}, (error, { body }) => {
        if(error)
        {
            callback('Unable to connect to location server!', undefined)
        } else if(body.error) {
            callback('Unable to find location!',undefined)
        } else {
            callback(undefined, body.current.temperature + ' deegres is our temperature, ' + body.current.feelslike + ' is what it is feelslike')
        }
    })
}

module.exports = forecast
