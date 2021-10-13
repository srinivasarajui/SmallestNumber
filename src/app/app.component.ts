import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  output = '';

  findSmall(input: string) {
    try {
      var numberStringArray = input.split(',');
      var numberArray = numberStringArray.map((v) => +v.trim());
      var result = numberArray.reduce(
        (p, c) => (p < c ? p : c),
        numberArray[0]
      );
      if (isNaN(result)) {
        this.output = 'The entered string has some non numerical data';
      } else {
        this.output = 'The minumum number is ' + result;
      }
    } catch (error) {
      this.output = 'Error while procsessing';
    }
  }
}
