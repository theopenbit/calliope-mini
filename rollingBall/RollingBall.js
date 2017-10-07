let attitudeY = 0
let deltaY = 0
let attitudeX = 0
let deltaX = 0
let ball: game.LedSprite = null
basic.forever(() => {
    deltaX = attitudeX - (4000 + input.acceleration(Dimension.X))
    deltaY = attitudeY - (4000 + input.acceleration(Dimension.Y))
    attitudeX = 4000 + input.acceleration(Dimension.X)
    attitudeY = 4000 + input.acceleration(Dimension.Y)
    if (deltaY > 15) {
        ball.change(LedSpriteProperty.Y, -1)
    }
    if (deltaY < 15) {
        ball.change(LedSpriteProperty.Y, 1)
    }
    if (deltaX > 15) {
        ball.change(LedSpriteProperty.X, -1)
    }
    if (deltaX < 15) {
        ball.change(LedSpriteProperty.X, 1)
    }
    basic.pause(200)
})
ball = game.createSprite(2, 2)
attitudeX = 4000 + input.acceleration(Dimension.X)
attitudeY = 4000 + input.acceleration(Dimension.Y)
 
