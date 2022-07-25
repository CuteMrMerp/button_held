//&color="#42f598"
namespace IsButtonHeld {
    /**
    *Outputs true if the button is pressed for the specified time.
    */
    //% blockId=ifbuttonisheld
    //% block="check if $button is held for $dur and wait"
    //% dur.shadow="timePicker"
    //% button.shadow="buttonPicker"
    //% draggableParameters
    //% handlerStatement
    export function held(dur: number, button: Button): boolean {
        let complete = true
        for (let index = 0; index <= dur; index += 10) {
            basic.pause(10)
            if (input.buttonIsPressed(button)) {

            } else {
                complete = false
                return(false)
                break;
            }
        }
        if (complete) {
            return (true)
        }
        else{
            return (true)
        }
    }
}