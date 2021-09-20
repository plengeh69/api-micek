<div align="center">
<img src="https://avatars1.githubusercontent.com/u/63069639?v=4" alt="Arjn" width="170" />

## API-MICEK

</div>

<p align="center">
<a href="##"><img title="api-micek" src="https://img.shields.io/static/v1?label=package&message=api-micek&color=red"></a>
</p>
<p align="center">
  <a href="https://github.com/plengeh69"><img title="Author" src="https://img.shields.io/badge/Author-Arjn-red.svg?style=for-the-badge&logo=github" /></a>
</p>
<p align="center">
<a href="#"><img title="mengapi" src="https://img.shields.io/static/v1?label=FREE&message=api-micek&color=pink"></a>
</p>

## Installation

Via NPM:
```bash
$ npm install @arjn/api-micek
```

### Social Media

```js
//Example!
const arjn = require('@arjn/api-micek')

arjn.sosmed.igstalk('arjn.id')
.then(res => console.log(res))
.catch(err => console.log(err))
```

<details>
  <summary><b>Lists of module name (type = sosmed)</b> (click to show)</summary>

| module name | params | thing | response | description |
| :--- | :---------- | :--- | :--- | :--- |
| ytsearch | query | youtube title | json | Youtube Search |
| ytplay | query | youtube title | json | Get YouTube Audio |
| ytmp3 | url | youtube url | json | Get Youtube Audio |
| ytmp4 | url | youtube url | json | Youtube Video |
| igdl | url | instagram url | json | Instagram Post |
| igstalk | username | instagram username | json | Instagram Profile |
| igstory | username | instagram username | json | Instagram Story |
| tiktok | url | tiktok url | json | tiktok downloader No Wm |
| twtdl | url | twitter url | json | Twitter downloader |
| mediafire | url | mediafire url | json | Mediafire downloader |
| xnxxsearch | query | xnxx title | json | xnxx Search |
| xnxxdl | url | xnxx url | json | Get xnxx Video |

</details>

## Games Api

```js
//Example!
const arjn = require('@arjn/api-micek')

arjn.game.tebakgambar()
.then(res => console.log(res))
.catch(err => console.log(err))
```

<details>
  <summary><b>Lists of module name (type = game)</b> (click to show)</summary>

| module name | params | thing | response | description |
| :--- | :---------- | :--- | :--- | :--- |
| tebakgambar | - | - | json | Game tebakgambar |
| susunkata | - | - | json | Game susunkata |
| caklontong | - | - | json | Game caklontong |
| family100 | - | - | json | Game family100 |

</details>

## Nulis Api

```js
//Example!
const arjn = require('@arjn/api-micek')
const fs = require('fs')

arjn.nulis.bukukiri('My name is Arjn')
.then(res => {
    const data = Buffer.from(res)
    fs.writeFileSync('./nulis.jpg', data)
    console.log('Success writing...')
})
.catch(err => console.log(err))
```

<details>
  <summary><b>Lists of module name (type = nulis)</b> (click to show)</summary>

| module name | params | thing | response | description |
| :--- | :---------- | :--- | :--- | :--- |
| bukukiri | text | your text | buffer | write book left |
| bukukanan | text | your text | buffer | write book right |
| foliokiri | text | your text | buffer | write folio left |
| foliokanan | text | your text | buffer | write folio right |

</details>


## Text Maker API

```js
//Example!
const arjn = require('@arjn/api-micek')

arjn.photooxy.google('Arjn', 'Arjn is blablabla', 'Arjn lalalala')
.then(res => console.log(res))
.catch(err => console.log(err))
```

<details>
  <summary><b>Lists of module name (type = photooxy)</b> (click to show)</summary>

| module name | params | thing | response | description |
| :--- | :---------- | :--- | :--- | :--- |
| google | text, text2, text3 | any text, any text, any text | json | Google suggestion text |
| glitch | text, text2 | any text, any text | json | Glitch text effect |
| pubg | text, text2 | any text, any text | json | Pubg text effect |
| glow | text | any text | json | Glow text effect |

</details>


  # Thanks To
* [`ArugaZ`](https://github.com/ArugaZ)
* [`Hexagonz`](https://github.com/Hexagonz)