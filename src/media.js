const axios = require('axios')
const baseURI = 'https://api-micek.herokuapp.com'
const { API_KEY } = require('../config.json')

module.exports.igdl = function igdl(url) {
    return new Promise((resolve, reject) => {
        axios.get(baseURI + '/api/dl/igdl?url=' + url + '&apikey=' + API_KEY)
        .then(res => res.data)
        .then(resolve)
        .catch(reject)
    })
}

module.exports.igstory = function igstory(username) {
    return new Promise((resolve, reject) => {
        axios.get(baseURI + '/api/dl/igstory?username=' + encodeURIComponent(username) + '&apikey=' + API_KEY)
        .then(res => res.data)
        .then(resolve)
        .catch(reject)
    })
}

module.exports.igstalk = function igstalk(username) {
    return new Promise((resolve, reject) => {
        axios.get(baseURI + '/api/igstalk?username=' + encodeURIComponent(username) + '&apikey=' + API_KEY)
        .then(res => res.data)
        .then(resolve)
        .catch(reject)
    })
}

module.exports.tiktok = function tiktok(url) {
    return new Promise((resolve, reject) => {
        axios.get(baseURI + '/api/dl/tiktok?url=' + url + '&apikey=' + API_KEY)
        .then(res => res.data)
        .then(resolve)
        .catch(reject)
    })
}

module.exports.twtdl = function twtdl(url) {
    return new Promise((resolve, reject) => {
        axios.get(baseURI + '/api/dl/twitter?url=' + url + '&apikey=' + API_KEY)
        .then(res => res.data)
        .then(resolve)
        .catch(reject)
    })
}

module.exports.ytsearch = function ytsearch(query) {
    return new Promise((resolve, reject) => {
        axios.get(baseURI + '/api/ytsearch?query=' + encodeURIComponent(query) + '&apikey=' + API_KEY)
        .then(res => res.data)
        .then(resolve)
        .catch(reject)
    })
}

module.exports.ytmp3 = function ytmp3(url) {
    return new Promise((resolve, reject) => {
        axios.get(baseURI + '/api/dl/ytmp3?url=' + url + '&apikey=' + API_KEY)
        .then(res => res.data)
        .then(resolve)
        .catch(reject)
    })
}

module.exports.ytmp4 = function ytmp4(url) {
    return new Promise((resolve, reject) => {
        axios.get(baseURI + '/api/dl/ytmp4?url=' + url + '&apikey=' + API_KEY)
        .then(res => res.data)
        .then(resolve)
        .catch(reject)
    })
}

module.exports.ytplay = function ytplay(query) {
    return new Promise((resolve, reject) => {
        axios.get(baseURI + '/api/dl/play?query=' + encodeURIComponent(query) + '&apikey=' + API_KEY)
        .then(res => res.data)
        .then(resolve)
        .catch(reject)
    })
}

module.exports.mediafire = function mediafire(url) {
    return new Promise((resolve, reject) => {
        axios.get(baseURI + '/api/mediafire?url=' + url + '&apikey=' + API_KEY)
        .then(res => res.data)
        .then(resolve)
        .catch(reject)
    })
}

module.exports.xnxxsearch = function xnxxsearch(query) {
    return new Promise((resolve, reject) => {
        axios.get(baseURI + '/api/xnxx-search?query=' + encodeURIComponent(query) + '&apikey=' + API_KEY)
        .then(res => res.data)
        .then(resolve)
        .catch(reject)
    })
}

module.exports.xnxxdl = function xnxxdl(url) {
    return new Promise((resolve, reject) => {
        axios.get(baseURI + '/api/dl/xnxx?url=' + url + '&apikey=' + API_KEY)
        .then(res => res.data)
        .then(resolve)
        .catch(reject)
    })
}