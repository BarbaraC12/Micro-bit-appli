input.onButtonPressed(Button.A, function () {
    radio.sendString("Hello World!")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
