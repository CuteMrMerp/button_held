basic.forever(function () {
    ButtonHeld.held(1000, Button.A, function () {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    })
})
