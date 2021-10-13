import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  [
    { input: '1,2,    3', expected: 'The minumum number is 1' },
    { input: '2,-3,1', expected: 'The minumum number is -3' },
    {
      input: 'sample',
      expected: 'The entered string has some non numerical data',
    },
  ].forEach((item) => {
    it(`if input is ${item.input} value expected is ${item.expected}`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      app.findSmall(item.input);
      expect(app.output).toEqual(item.expected);
    });
  });
});
