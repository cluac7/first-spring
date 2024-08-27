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
let moves = 0
let lastpressed = ""

setLegend(
  [player, bitmap`
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
6666666666666666`],
  [wall, bitmap`
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
  [touched, bitmap`
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

setSolids([player, wall])

let level = 0
const levels = [
  map`
wwwwwwwwwwwwwww
wp.....ww.....w
wwwwww.ww.ww..w
w.........ww.ww
wwwww.........w
w...wwwww..w.ww
www.wwwww..w.ww
www.w......w.ww
w...w.....ww.ww
w.wwwwwwwwww..w
w........www..w
w...ww.....w..w
ww.www.www.w..w
ww.....www....w
wwwwwwwwwwwwwww`
]

setMap(levels[level])

setPushables({
  [player]: []
})
onInput("w", () => {
  if (lastpressed !== "w") { moves++ }

  const player = getFirst("p")
  let futureY = player.y - 1

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
  lastpressed = "w"

})
onInput("s", () => {
  if (lastpressed !== "s") { moves++ }

  const player = getFirst("p")
  let futureY = player.y + 1

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
  lastpressed = "s"


})
onInput("a", () => {
  if (lastpressed !== "a") { moves++ }

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
  lastpressed = "a"


})
onInput("d", () => {
  if (lastpressed !== "d") { moves++ }

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
  lastpressed = "d"

})


afterInput(() => {
  addText(`${moves}`, {
    x: 1,
    y: 1,
    color: color`8`
  })
})