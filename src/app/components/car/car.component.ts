import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.less']
})
export class CarComponent implements OnInit {
  name: string;
  speed: number;
  model: string;
  colors: Colors;
  options: string[];
  isEdit = false;

  constructor() { }

  showEdit() {
    this.isEdit = !this.isEdit;
  }

  ngOnInit() {
    this.name = 'Audi';
    this.speed = 230;
    this.model = 'RX8';
    this.colors = {
      car: 'White',
      salon: 'Black',
      wheels: 'Silver'
    };
    this.options = ['ABS', 'AutoPilot', 'AutoParking'];
  }

  addOpt(option: string) {
    this.options.unshift(option);
    return false;
  }

  delOpt(option: string) {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] === option) {
        this.options.splice(i, 1);
        break;
      }
    }
  }

  carSelect(carName: string) {
    if (carName === 'bmw') {
      this.name = 'BMW';
      this.speed = 250;
      this.model = 'M5';
      this.colors = {
        car: 'Black',
        salon: 'Black',
        wheels: 'Silver'
      };
      this.options = ['ABS', 'AutoPilot', 'AutoParking'];
    } else if (carName === 'zaz') {
      this.name = 'Zaz';
      this.speed = 230;
      this.model = '40';
      this.colors = {
        car: 'White',
        salon: 'Black',
        wheels: 'Silver'
      };
      this.options = ['ABS', 'AutoPilot', 'AutoParking', 'Conduck'];
    } else {
      this.name = 'Mers';
      this.speed = 205;
      this.model = 'c180';
      this.colors = {
        car: 'Grey',
        salon: 'White',
        wheels: 'Black'
      };
      this.options = ['ABS', 'AutoPilot', 'AutoParking', 'GUR'];
    }
  }
}


interface Colors {
  car: string;
  salon: string;
  wheels: string;
}
