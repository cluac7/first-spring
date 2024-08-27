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
DD44DDDDDDDD44DD
DD44DDDDDDDD44DD
DD44DDDDDDDD44DD
DD44DDDDDDDD44DD
DD44DDDDDDDD44DD
DD44DDDDDDDD44DD
DD44DDDDDDDD44DD
DD44DDDDDDDD44DD
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
wp.....ww.wwwww
wwwwww.ww.....w
w..........wwww
wwwww.........w
w...wwwww..w.ww
www.wwwww..w.ww
www.w......w.ww
w...w.....ww.ww
w.wwwwwwwwww..w
w........www..w
w...ww.....w..w
wwwww..www.w..w
w......www....w
wwwwwwwwwwwwwww`
]

setMap(levels[level])

setPushables({
  [ player ]: []
})
onInput("w", () => {
  const player = getFirst("p")
  let futureY = player.y -1
  
  // Continuously move the player to the right until a wall is encountered
  while (!getTile(player.x, futureY).some(sprite => sprite.type === "w")) {
    // Clear the current player position
    clearTile(player.x, player.y)
    addSprite(player.x, player.y, "t")

    // Move the player to the right
    player.y = futureY
    // Add the player back to the new position
    addSprite(player.x, player.y, "p")
    // Update the future position for the next iteration
    futureY--
  }
})
onInput("s", () => {
  const player = getFirst("p")
  let futureY = player.y +1
  
  // Continuously move the player to the right until a wall is encountered
  while (!getTile(player.x, futureY).some(sprite => sprite.type === "w")) {
    // Clear the current player position
    clearTile(player.x, player.y)
    addSprite(player.x, player.y, "t")

    // Move the player to the right
    player.y = futureY
    // Add the player back to the new position
    addSprite(player.x, player.y, "p")
    // Update the future position for the next iteration
    futureY++
  }
})
onInput("a", () => {
  const player = getFirst("p")
  let futureX = player.x - 1
  
  // Continuously move the player to the right until a wall is encountered
  while (!getTile(futureX, player.y).some(sprite => sprite.type === "w")) {
    // Clear the current player position
    clearTile(player.x, player.y)
    addSprite(player.x, player.y, "t")

    // Move the player to the right
    player.x = futureX
    // Add the player back to the new position
    addSprite(player.x, player.y, "p")
    // Update the future position for the next iteration
    futureX--
  }
})
onInput("d", () => {
  const player = getFirst("p")
  let futureX = player.x + 1
  
  // Continuously move the player to the right until a wall is encountered
  while (!getTile(futureX, player.y).some(sprite => sprite.type === "w")) {
    // Clear the current player position
    clearTile(player.x, player.y)
    addSprite(player.x, player.y, "t")

    // Move the player to the right
    player.x = futureX
    // Add the player back to the new position
    addSprite(player.x, player.y, "p")
    // Update the future position for the next iteration
    futureX++
  }
})


afterInput(() => {
  
})