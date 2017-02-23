import './index2.scss';
import './index.css';

import util from './util';

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    util.log(this.name, this.age);
  }
}

var person = new Person('lichenbuliren', '28');
person.sayHi();

var moment = require('moment');
console.log(moment().format());
console.log(util.$('body')[0]);