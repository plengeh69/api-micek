const axios = require('axios')
const baseURI = 'https://api-micek.herokuapp.com'
const { API_KEY } = require('../config.json')
const { servers, yta, ytv } = require('../lib/y2mate')
const request = require('request')

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
        try {
            let server = (servers[0]).toLowerCase()
		    let { dl_link, thumb, title, filesize, filesizeF } = await yta(url, servers.includes(server) ? server : servers[0])

            request(`https://tinyurl.com/api-create.php?url=${dl_link}`, function(err, res, body) {
                resolve({
                    creator: "arjn.me",
                    code: 200,
                    status: true,
                    result: {
                        title: title,
                        thumbnail: thumb,
                        filesize: filesizeF,
                        url: body
                    }
                })
            })
        } catch (err) {
            console.error(err)
            reject({
                creator: "arjn.me",
                code: 503,
                status: false,
                message: "Server Maintenance!"
            })
        }
    })
}

module.exports.ytmp4 = function ytmp4(url) {
    return new Promise((resolve, reject) => {
        try {
            let server = (servers[0]).toLowerCase()
		    let { dl_link, thumb, title, filesize, filesizeF } = await ytv(url, servers.includes(server) ? server : servers[0])

            request(`https://tinyurl.com/api-create.php?url=${dl_link}`, function(err, res, body) {
                resolve({
                    creator: "arjn.me",
                    code: 200,
                    status: true,
                    result: {
                        title: title,
                        thumbnail: thumb,
                        filesize: filesizeF,
                        url: body
                    }
                })
            })
        } catch (err) {
            console.error(err)
            reject({
                creator: "arjn.me",
                code: 503,
                status: false,
                message: "Server Maintenance!"
            })
        }
    })
}

module.exports.ytplay = function ytplay(query) {
    return new Promise((resolve, reject) => {
        try {
            let json = await yts(query)
            let yt = json.all.find(video => video.seconds < 3600)
		    let server = (servers[0]).toLowerCase()
		    let { dl_link, title, filesize, filesizeF } = await yta(yt.url, servers.includes(server) ? server : servers[0])

            request(`https://tinyurl.com/api-create.php?url=${dl_link}`, function(err, res, body) {
                resolve({
                    creator: "arjn.me",
                    code: 200,
                    status: true,
                    result: {
                        title: title,
                        thumbnail: yt.thumbnail,
                        views: yt.views,
                        duration: yt.timestamp,
                        upload: yt.ago,
                        filesize: filesizeF,
                        url: body
                    }
                })
            })
        } catch (err) {
            console.error(err)
            reject({
                creator: "arjn.me",
                code: 503,
                status: false,
                message: "Server Maintenance!"
            })
        }
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