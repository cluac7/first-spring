/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: 
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"
const wall = "w"
const touched = "t"

setLegend(
  [ player, bitmap`
6666666666666666
6666666666666666
6666666666666666
6666C666666C6666
6666C666666C6666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666066666666
6666666066666666
6666600000666666
6660006660006666
6666066666066666
6666666666666666
6666666666666666` ],
  [ wall, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777`],
  [ touched, bitmap`
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DD444444444444DD
DD444444444444DD
DD448888888844DD
DD448DDDDDD844DD
DD448DDDDDD844DD
DD448DDDDDD844DD
DD448DDDDDD844DD
DD448DDDDDD844DD
DD448DDDDDD844DD
DD448888888844DD
DD444444444444DD
DD444444444444DD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD`]
)

setSolids([ player, wall ])

let level = 0
const levels = [
  map`
wwwwwwwwwwwwwww
p......ww.wwwww
wwwwww.ww......
...........www.
wwwww..........
....wwwww..w.w.
www.wwwww..w.w.
www.w......w.w.
....w.....ww.w.
..wwwwwwwwww...
.........www...
....ww.....w...
wwwww..www.w...
w......www.....
wwwwwwwwww....w`
]

setMap(levels[level])

setPushables({
  [ player ]: []
})

onInput("w", () => {
  const player = getFirst("p")
  const futureY = player.y - 1
  const futureTile = getTile(player.x, futureY)
  addSprite(player.x, player.y, "t")

  while (!futureTile.some(sprite => sprite.type === "w")) {
    // Move the player up if there are no walls in the future tile
    player.y = futureY
    const futureY = player.y - 1
    const futureTile = getTile(player.x, futureY)
    addSprite(player.x, player.y, "t")
  }
})
onInput("s", () => {
  const player = getFirst("p")
  const futureY = player.y + 1
  const futureTile = getTile(player.x, futureY)
  addSprite(player.x, player.y, "t")

  while (!futureTile.some(sprite => sprite.type === "w")) {
    // Move the player up if there are no walls in the future tile
    player.y = futureY
    const futureY = player.y + 1
    const futureTile = getTile(player.x, futureY)
    addSprite(player.x, player.y, "t")
  }
})
onInput("a", () => {
  const player = getFirst("p")
  const futureX = player.x - 1
  const futureTile = getTile(player.x, futureX)
  addSprite(player.x, player.y, "t")

  while (!futureTile.some(sprite => sprite.type === "w")) {
    // Move the player up if there are no walls in the future tile
    player.x = futureX
    const futureX = player.x - 1
    const futureTile = getTile(futureX, player.y)
    addSprite(player.x, player.y, "t")
  }
})
onInput("d", () => {
  const player = getFirst("p")
  let futureX = player.x + 1
  let futureTile = getTile(futureX, player.y)
  addSprite(player.x, player.y, "t")

  while (!futureTile.some(sprite => sprite.type === "w")) {
    // Move the player up if there are no walls in the future tile
    player.x = futureX
    let futureX = player.x + 1
    let futureTile = getTile(player.x, futureX)
    addSprite(player.x, player.y, "t")
  }
})

afterInput(() => {
  
})