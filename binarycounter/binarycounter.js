let remainder = 0
let counter = 0
input.onPinPressed(TouchPin.P0, () => {
    counter += 1
})
basic.forever(() => {
    if (counter >= 32) {
        counter = 0
    }
    remainder = counter
    if (remainder - 16 < 0) {
        led.unplot(0, 4)
    } else {
        remainder = remainder - 16
        led.plot(0, 4)
    }
    if (remainder - 8 < 0) {
        led.unplot(0, 3)
    } else {
        remainder = remainder - 8
        led.plot(0, 3)
    }
    if (remainder - 4 < 0) {
        led.unplot(0, 2)
    } else {
        remainder = remainder - 4
        led.plot(0, 2)
    }
    if (remainder - 2 < 0) {
        led.unplot(0, 1)
    } else {
        remainder = remainder - 2
        led.plot(0, 1)
    }
    if (remainder - 1 < 0) {
        led.unplot(0, 0)
    } else {
        remainder = remainder - 1
        led.plot(0, 0)
    }
})
counter = 0
 
