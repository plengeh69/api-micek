const axios = require('axios')
const { API_KEY } = require('../config.json')
const baseURI = 'https://api-micek.herokuapp.com'

module.exports.glitch = function glitch(text, text2) {
    return new Promise((resolve, reject) => {
        axios.get(baseURI + '/api/textmaker?text=' + encodeURIComponent(text) + '&text2=' + encodeURIComponent(text2) + '&theme=glitch&apikey=' + API_KEY)
        .then(res => res.data)
        .then(resolve)
        .catch(reject)
    })
}

module.exports.google = function google(text, text2, text3) {
    return new Promise((resolve, reject) => {
        axios.get(baseURI + '/api/textmaker?text=' + encodeURIComponent(text) + '&text2=' + encodeURIComponent(text2) + '&text3=' + encodeURIComponent(text3) + '&theme=google-suggestion&apikey=' + API_KEY)
        .then(res => res.data)
        .then(resolve)
        .catch(reject)
    })
}

module.exports.pubg = function pubg(text, text2) {
    return new Promise((resolve, reject) => {
        axios.get(baseURI + '/api/textmaker/game?text=' + encodeURIComponent(text) + '&text2=' + encodeURIComponent(text2) + '&theme=pubg&apikey=' + API_KEY)
        .then(res => res.data)
        .then(resolve)
        .catch(reject)
    })
}

module.exports.glow = function glow(text) {
    return new Promise((resolve, reject) => {
        axios.get(baseURI + '/api/textmaker/metallic?text=' + encodeURIComponent(text) + '&theme=glow&apikey=' + API_KEY)
        .then(res => res.data)
        .then(resolve)
        .catch(reject)
    })
}