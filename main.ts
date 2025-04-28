input.onButtonPressed(Button.A, function () {
    motorbit.forward(50)
})
input.onGesture(Gesture.FreeFall, function () {
	
})
input.onGesture(Gesture.TiltLeft, function () {
    motorbit.turnleft(50)
})
input.onButtonPressed(Button.B, function () {
    motorbit.back(50)
})
input.onGesture(Gesture.TiltRight, function () {
    motorbit.turnleft(50)
})
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
let distance = 0;

basic.forever(function () {
    // Trigger the ultrasonic sensor to send a pulse
    let echo = ultrasonic.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.MicroSeconds);

    // Convert the time of the echo pulse to distance in cm
    distance = Math.idiv(echo, 58);  // 58 is a constant that converts time to cm

    // Show the distance on the micro:bit's LED display
    basic.showNumber(distance);

    // Add a small delay between readings
    basic.pause(500);
});