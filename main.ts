input.onButtonPressed(Button.A, function () {
    radio.sendValue("andar", 1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("andar", 0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("andar", 2)
})
basic.showLeds(`
    # # # # #
    . . . . #
    # # # # #
    # . . . .
    # # # # #
    `)
radio.setGroup(2)
basic.forever(function () {
    radio.sendValue("virar", input.rotation(Rotation.Roll))
})
