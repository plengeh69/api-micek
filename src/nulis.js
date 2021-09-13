const bent = require('bent')
const baseURI = 'https://api-micek.herokuapp.com'
const { API_KEY } = require('../config.json')

module.exports.bukukiri = function bukukiri(text) {
    return new Promise((resolve, reject) => {
        bent('buffer')(baseURI + '/api/nulis/bukukiri?text=' + encodeURIComponent(text) + '&apikey=' + API_KEY)
        .then(resolve)
        .catch(reject)
    })
}

module.exports.bukukanan = function bukukanan(text) {
    return new Promise((resolve, reject) => {
        bent('buffer')(baseURI + '/api/nulis/bukukanan?text=' + encodeURIComponent(text) + '&apikey=' + API_KEY)
        .then(resolve)
        .catch(reject)
    })
}

module.exports.foliokiri = function foliokiri(text) {
    return new Promise((resolve, reject) => {
        bent('buffer')(baseURI + '/api/nulis/foliokiri?text=' + encodeURIComponent(text) + '&apikey=' + API_KEY)
        .then(resolve)
        .catch(reject)
    })
}

module.exports.foliokanan = function foliokanan(text) {
    return new Promise((resolve, reject) => {
        bent('buffer')(baseURI + '/api/nulis/foliokanan?text=' + encodeURIComponent(text) + '&apikey=' + API_KEY)
        .then(resolve)
        .catch(reject)
    })
}