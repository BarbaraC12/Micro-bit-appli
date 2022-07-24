let Direction2 = 0
let Count = 0
let rand = 0
input.onButtonPressed(Button.A, function () {
    Direction2 = input.compassHeading()
    basic.showString("" + (Direction2))
    if (Direction2 < 45 || Direction2 >= 315) {
        basic.showString("N")
    } else if (Direction2 >= 225 && Direction2 < 315) {
        basic.showString("O")
    } else if (Direction2 >= 135 && Direction2 < 225) {
        basic.showString("S")
    } else {
        basic.showString("E")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Count = 10
    while (Count > 0) {
        Count += -1
        basic.showString("" + (Count))
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        # # . # #
        # . # . #
        . # # # .
        # . # . #
        # # . # #
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    rand = randint(0, 2)
    if (rand < 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (rand == 1) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
})
