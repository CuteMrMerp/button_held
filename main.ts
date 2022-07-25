basic.showLeds(`
    # # # # #
    # . . . #
    # # # # #
    # . . . #
    # . . . #
    `)
basic.forever(function () {
    if (IsButtonHeld.held(1000, Button.A)) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else {
    	
    }
})
