def on_button_pressed_a():
    motorbit.forward(50)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_tilt_left():
    motorbit.turnleft(50)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_button_pressed_b():
    motorbit.back(50)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_tilt_right():
    motorbit.turnleft(50)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_forever():
    basic.show_leds("""
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        """)
basic.forever(on_forever)

def on_gesture_shake():
    pass
input.on_gesture(Gesture.SHAKE, on_gesture_shake)