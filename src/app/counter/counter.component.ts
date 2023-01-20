import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  //this is variable to strore number
  projectcount:number = 0;
  accuratecount:number =0;
  clientcount:number = 0;
  customercount:number = 0;
 // creted setInterval function with arrow function
  prjectcountstop:any = setInterval(()=>{
    this.projectcount++;
  // we need to stop this in a perticular condition
    if(this.projectcount == 255){
      clearInterval(this.prjectcountstop);
    }
  },10);
  accuratecountstop:any = setInterval(()=>{
    this.accuratecount++;
    if(this.accuratecount == 98){
      clearInterval(this.accuratecountstop);
    }
  },100);
  clientcountstop:any = setInterval(()=>{
    this.clientcount++;
    if(this.clientcount == 363){
      clearInterval(this.clientcountstop);
    }
  },10);
  customercountstop:any = setInterval(()=>{
    this.customercount++;
    if(this.customercount == 100){
      clearInterval(this.customercountstop);
    }
  },100);
  constructor() { }

  ngOnInit(): void {
  }

}
