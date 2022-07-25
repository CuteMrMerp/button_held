namespace ButtonHeld {
    /**
    *If a button is held when this
    *is run, it will run the following
    *code. Otherwise, it will not.
    */
    //% blockId=ifbuttonisheld
    //% block="if $button held for $dur (use increments of 10ms)"
    //% dur.shadow="timePicker"
    //% button.shadow="buttonPicker"
    //% handlerStatement
    export function held(dur: number, button: Button, handler: () => void) {
        let complete = true
        for (let index = 0; index <= dur; index += 10) {
            basic.pause(10)
            if (input.buttonIsPressed(button)) {

            } else {
                complete = false
                break;
            }
        }
        if (complete) {
            handler()
        }
    }
}