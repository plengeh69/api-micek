const { API_KEY } = require('../config.json')
const axios = require('axios')
const baseURI = 'https://api-micek.herokuapp.com'

module.exports.caklontong = function caklontong() {
    return new Promise((resolve, reject) => {
        axios.get(baseURI + '/api/kuis/caklontong?apikey=' + API_KEY)
        .then(res => res.data)
        .then(resolve)
        .catch(reject)
    })
}

module.exports.family100 = function family100() {
    return new Promise((resolve, reject) => {
        axios.get(baseURI + '/api/kuis/family100?apikey=' + API_KEY)
        .then(res => res.data)
        .then(resolve)
        .catch(reject)
    })
}

module.exports.tebakgambar = function tebakgambar() {
    return new Promise((resolve, reject) => {
        axios.get(baseURI + '/api/kuis/tebakgambar?apikey=' + API_KEY)
        .then(res => res.data)
        .then(resolve)
        .catch(reject)
    })
}

module.exports.susunkata = function susunkata() {
    return new Promise((resolve, reject) => {
        axios.get(baseURI + '/api/kuis/susunkata?apikey=' + API_KEY)
        .then(res => res.data)
        .then(resolve)
        .catch(reject)
    })
}