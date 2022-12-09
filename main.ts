input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    keyboard.sendString(" ")
})
keyboard.startKeyboardService()
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        keyboard.sendString(keyboard.keys(keyboard._Key.left))
    }
    if (input.isGesture(Gesture.TiltRight)) {
        keyboard.sendString(keyboard.keys(keyboard._Key.right))
    }
})
