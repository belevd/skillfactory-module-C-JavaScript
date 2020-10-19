class ElectricalAppliance {
  constructor(brand, name, power) {
    this.brand = brand;
    this.name = name;
    this.power = power;
    this.plugIn = false;
  }

  plugInOut() {
    if (this.plugIn) {
      this.plugIn = false;
      console.log(`Прибор ${this.name} выключен из розетки`);
    } else {
      this.plugIn = true;
      console.log(`Прибор ${this.name} включен в розетку`);
    }
  }
}

class Light extends ElectricalAppliance {
  constructor(brand, name, power, placement, lamps) {
    super(brand, name, power);
    this.type = 'light';
    this.placement = placement;
    this.lamps = lamps;
    this.plugIn = false;
    this.lightOn = false;
  }

  turnLight() {
    if (this.lightOn) {
      this.lightOn = false;
      console.log(`На ${this.name} выключили свет`);
    } else {
      this.lightOn = true;
      console.log(`На ${this.name} включили свет`);
    }
  }
}

class Computer extends ElectricalAppliance {
  constructor(brand, name, power, pcType) {
    super(brand, name, power);
    this.plugIn = false;
    this.type = "computer";
    this.pcType = pcType;
  }
}

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