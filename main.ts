input.onButtonPressed(Button.A, function () {
    varyable += -1
})
input.onButtonPressed(Button.B, function () {
    varyable += 1
})
let varyable = 0
basic.forever(function () {
    basic.showString("" + (varyable))
})
