let block_y = -1
let block_x = 0
let inGame = false
let player_x = 0
let lives = 3
let score = 0
basic.showString("Hit A+B to start")

input.onButtonPressed(Button.A, () => {
    player_x += -1
    if (player_x <= 0) {
        player_x = 0
    }
})
input.onButtonPressed(Button.AB, () => {
    lives = 3

    basic.setLedColor(Colors.Yellow)
    basic.showString("3")
    basic.pause(1000)
    basic.showString("2")
    basic.pause(1000)
    basic.showString("1")
    basic.pause(1000)
    inGame = true
})
input.onButtonPressed(Button.B, () => {
    player_x += 1
    if (player_x >= 4) {
        player_x = 4
    }
})
basic.forever(() => {
    if (inGame) {
        basic.clearScreen()
        led.plot(player_x, 4)
        led.plot(block_x, block_y)
    }
})

basic.forever(() => {
    if (inGame) {
        basic.setLedColor(basic.rgbw(
            0,
            0,
            0,
            0
        ))
        block_x = Math.random(5)
        for (let i = 0; i <= 4; i++) {
            basic.pause(400)
            block_y += 1
        }
        block_y = -1
        if (block_x == player_x) {
            basic.setLedColor(Colors.Green)
            score = score + 1
            music.playTone(555, music.beat(BeatFraction.Sixteenth))
        } else {
            basic.setLedColor(Colors.Red)
            music.playTone(111, music.beat(BeatFraction.Half))
            lives = lives - 1
            if (lives == 0) {
                basic.setLedColor(0)
                inGame = false
                basic.showString("Game over!!! Score: " + score + " For replay hit A+B")
            }
        }
        basic.pause(1000)
    }
})
