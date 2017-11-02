let factor2 = 0
let factor1 = 0
input.onButtonPressed(Button.B, () => {
    basic.showNumber(factor1 * factor2)
})
input.onButtonPressed(Button.A, () => {
    factor1 = Math.random(11)
    factor2 = Math.random(11)
    basic.showNumber(factor1)
    basic.pause(500)
    basic.showString("*")
    basic.pause(500)
    basic.showNumber(factor2)
})
factor1 = 0
factor2 = 0
 
