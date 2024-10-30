input.onButtonPressed(Button.A, function () {
    if (FrenteFast) {
        radio.sendValue("andar", 11)
    } else {
        radio.sendValue("andar", 1)
    }
    FrenteFast = !(FrenteFast)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("andar", 0)
})
input.onButtonPressed(Button.B, function () {
    if (TrasFast) {
        radio.sendValue("andar", 22)
    } else {
        radio.sendValue("andar", 2)
    }
    TrasFast = !(TrasFast)
})
let TrasFast = false
let FrenteFast = false
basic.showLeds(`
    # # # # #
    . . . . #
    # # # # #
    # . . . .
    # # # # #
    `)
radio.setGroup(2)
FrenteFast = false
TrasFast = false
basic.forever(function () {
    radio.sendValue("virar", input.rotation(Rotation.Roll))
})
