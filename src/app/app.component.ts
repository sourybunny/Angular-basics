import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  username = '';
  count: number;
  countArr;
  flag: boolean;

  constructor(){
    this.flag= true;
    this.count = 0;
    this.countArr = [];
  }
  handleClick(){
    this.count = this.count +1;
    this.flag= !this.flag;
    this.countArr.push(this.count);
    console.log(this.countArr);
  }


}
