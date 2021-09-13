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
| ytmp3 | url | youtube url | json | Get Youtube Audio |
| ytmp4 | url | youtube url | json | Youtube Video |
| igdl | url | instagram url | json | Instagram Post |
| igstalk | username | instagram username | json | Instagram Profile |
| igstory | username | instagram username | json | Instagram Story |
| tiktok | url | tiktok url | json | tiktok downloader No Wm |
| twtdl | url | twitter url | json | Twitter downloader |
| mediafire | url | mediafire url | json | Mediafire downloader |

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
  <summary><b>Lists of module name (type = sosmed)</b> (click to show)</summary>

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
})
.catch(err => console.log(err))
```

<details>
  <summary><b>Lists of module name (type = sosmed)</b> (click to show)</summary>

| module name | params | thing | response | description |
| :--- | :---------- | :--- | :--- | :--- |
| bukukiri | text | your text | buffer | nulis buku kiri |
| bukukanan | text | your text | buffer | nulis buku kanan |
| foliokiri | text | your text | buffer | nulis folio kiri |
| foliokanan | text | your text | buffer | nulis folio kanan |

</details>


  # Thanks To
* [`ArugaZ`](https://github.com/ArugaZ)
* [`Hexagonz`](https://github.com/Hexagonz)