import * as _ from 'lodash';
import { Observable } from 'rxjs';

Observable.interval(1000).take(5).subscribe(x => console.log(x));

function component() {
  var element = document.createElement('div');
  element.classList.add('info');
  element.innerHTML = _.join(['Hello', 'webpack14'], ' ');
  console.log('test13');
  return element;
}

document.body.appendChild(component());
