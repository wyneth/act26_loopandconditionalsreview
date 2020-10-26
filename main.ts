let hight = 0
let sum_heights = 0
let cont_short = 0
let cont_medium = 0
let cont_tall = 0
let average = 0
let random_number = 0
let cont_green = 0
let cont_blue = 0
let cont_red = 0
let cont_even = 0
let angle = 0
let cont_acute = 0
let cont_straight = 0
let cont_obtuse = 0
let x = 0
let y = 0
input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 30; index++) {
        hight = randint(100, 200)
        sum_heights += hight
        if (hight <= 150) {
            basic.showNumber(hight)
            basic.showString("short person")
            cont_short += 1
        } else if (hight >= 151 && hight <= 170) {
            basic.showNumber(hight)
            basic.showString("medium height")
            cont_medium += 1
        } else if (hight >= 171) {
            basic.showNumber(hight)
            basic.showString("tall person")
            cont_tall += 1
        }
    }
    basic.showString("total short persons")
    basic.showNumber(cont_short)
    basic.showString("total medium persons")
    basic.showNumber(cont_medium)
    basic.showString("total tall persons")
    basic.showNumber(cont_tall)
    average = sum_heights / 30
    basic.showString("average heights")
    basic.showNumber(average)
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        random_number = randint(1, 6)
        if (random_number == 3 || random_number == 1) {
            basic.showString("Team green")
            cont_green += 1
        } else if (random_number == 2 || random_number == 5) {
            basic.showString("Team blue")
            cont_blue += 1
        } else {
            basic.showString("Team red")
            cont_red += 1
        }
    }
    basic.showString("Team green")
    basic.showNumber(cont_green)
    basic.showString("Team blue")
    basic.showNumber(cont_blue)
    basic.showString("Team red")
    basic.showNumber(cont_red)
})
input.onButtonPressed(Button.B, function () {
    cont_even = randint(0, 10)
    if (cont_even % 2 == 0) {
        basic.showString("Even")
        cont_even += 1
    } else {
        basic.showString("Odd")
        cont_even += 1
    }
    basic.showString("total even")
    basic.showNumber(cont_even)
    basic.showString("total odd")
    basic.showNumber(cont_even)
})
input.onPinPressed(TouchPin.P1, function () {
    angle = randint(0, 180)
    for (let index = 0; index < 10; index++) {
        if (angle < 90) {
            basic.showString("acute")
            cont_acute += 1
        } else if (angle == 90) {
            basic.showString("straight")
            cont_straight += 1
        } else if (angle > 90) {
            basic.showString("obtuse")
            cont_obtuse += 1
        }
    }
    basic.showString("acute")
    basic.showNumber(cont_acute)
    basic.showString("straight")
    basic.showNumber(cont_straight)
    basic.showString("obtuse")
    basic.showNumber(cont_obtuse)
})
basic.forever(function () {
    x = randint(0, 5)
    y = randint(0, 5)
    while (input.pinIsPressed(TouchPin.P2)) {
        led.plot(x, y)
        basic.pause(300)
        if (x == y) {
            music.playMelody("C5 B A G F E D C ", 120)
        } else if (x != y) {
            music.playTone(247, music.beat(BeatFraction.Whole))
        }
        basic.clearScreen()
    }
})
