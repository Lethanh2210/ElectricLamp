class SwitchButton {
    constructor(status,ElectricLamp) {
        this.status = status;
        this.lamp = ElectricLamp
    }
    connectToLamp(ElectricLamp){
        this.lamp = ElectricLamp._status
    }
    SwitchButton(ElectricLamp){
        ElectricLamp._status = !ElectricLamp._status

    }
    switchOff(ElectricLamp){
        ElectricLamp._status = false
        console.log(`the ${ElectricLamp._name} is off`)
    }
    switchOn(ElectricLamp){
        ElectricLamp._status = true
        console.log(`the ${ElectricLamp._name} is on`)

    };


}

class ElectricLamp {
    constructor(status,name) {
        this._name = name
        this._status = status
    }
    ElectricLamp(SwitchButton){
        this._status = SwitchButton.status
    }
    turnOffLamp(){
        this._status = false
        console.log(`the ${this._name} is off`)
    }
    turnOnLamp(){
        this._status = true
        console.log(`the ${this._name} is on`)
    }

}

let HomeLamp = new ElectricLamp(false,"HomeLamp")
let LampSwitch = new SwitchButton(false, HomeLamp)

for (let i = 0; i < 10; i++) {
    LampSwitch.switchOn(HomeLamp)
    console.log(HomeLamp._status);
    LampSwitch.switchOff(HomeLamp)
    console.log(HomeLamp._status);
}