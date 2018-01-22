let value = 0
let hb = ""
let connected = false
input.onButtonPressed(Button.A, () => {
    if (!(connected)) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Triangle)
    }
})
bluetooth.onBluetoothConnected(() => {
    connected = true    
})
bluetooth.onBluetoothDisconnected(() => {
    connected = false
})
basic.forever(() => {
    if (connected) {
        hb = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Fullstop))
        if (hb == "reset") {
            control.reset()
        } else {
            value = parseInt(hb)
            led.plotBarGraph(
                value,
                100
            )
            if (value <= 50) {
                basic.setLedColor(basic.rgbw(
                    0,
                    255,
                    0,
                    0
                ))
            } else {
                if (value <= 75) {
                    basic.setLedColor(basic.rgbw(
                        255,
                        69,
                        0,
                        0
                    ))
                } else {
                    basic.setLedColor(basic.rgbw(
                        255,
                        0,
                        0,
                        0
                    ))
                }
            }
        }
    }
})
bluetooth.startUartService()
basic.showIcon(IconNames.Square)
