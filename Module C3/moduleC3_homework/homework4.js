function ElectricalAppliance(brand, name, power) {
    this.brand = brand;
    this.name = name;
    this.power = power;
    this.plugIn = false;
}

ElectricalAppliance.prototype.plugInOut = function() {
    if (this.plugIn) {
        this.plugIn = false;
        console.log(`Прибор ${this.name} выключен из розетки`);
    } else {
        this.plugIn = true;
        console.log(`Прибор ${this.name} включен в розетку`);
    }
};

function Light(brand, name, power, placement, lamps) {
    this.brand = brand;
    this.name = name;
    this.power = power;
    this.type = 'light';
    this.placement = placement;
    this.lamps = lamps;
    this.plugIn = false;
    this.lightOn = false;
}

Light.prototype = new ElectricalAppliance();

Light.prototype.turnLight = function() {
    if (this.lightOn) {
        this.lightOn = false;
        console.log(`На ${this.name} выключили свет`);
    } else {
        this.lightOn = true;
        console.log(`На ${this.name} включили свет`);
    }
}

function Computer(brand, name, power, pcType) {
    this.brand = brand;
    this.name = name;
    this.power = power;
    this.type = 'computer';
    this.pcType = pcType;
    this.plugIn = false
}

Computer.prototype = new ElectricalAppliance();


let room_lamp = new Light('ABB', 'XK7', 75, 'floor', 3);
let kitchen_lamp = new Light('ABB', 'RU3', 55, 'roof', 1);

let pc = new Computer('Apple', 'iMac', 150, 'station');
let laptop = new Computer('Apple', 'Macbook', 50, 'laptop');

let flat_appliance = [room_lamp, kitchen_lamp, pc, laptop];
let current_power = 0;

room_lamp.plugInOut();
kitchen_lamp.plugInOut();
pc.plugInOut();
pc.plugInOut();
pc.plugInOut();
kitchen_lamp.turnLight();

for (element of flat_appliance) {
    if (element.plugIn) {
        if (element.type === 'light') {
            if (element.lightOn) {
                current_power += element.power;
            }
        } else {
            current_power += element.power;
        }
    }
    // console.log(element.power);
}

console.log(current_power);