let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distance <= 25 && distance > 0) {
        basic.showString("低低")
    }
    if (distance <= 50 && distance > 25) {
        basic.showString("低中")
    }
    if (distance <= 100 && distance > 50) {
        basic.showString("低高")
    }
    if (distance > 100 && distance <= 200) {
        basic.showString("中低")
    }
    if (distance > 100 && distance <= 200) {
        basic.showString("中中")
    }
    if (distance > 200 && distance <= 300) {
        basic.showString("中高")
    }
    if (distance > 300 && distance <= 500) {
        basic.showString("高低")
    }
    if (distance > 500 && distance <= 600) {
        basic.showString("高中")
    }
    if (distance > 600 && distance <= 800) {
        basic.showString("高高")
    }
})
