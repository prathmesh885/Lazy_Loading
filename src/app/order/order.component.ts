import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
   track="Placing Order"
   order=75;
   orderfun(){
    if(this.order==0){
      this.track="Placing Order";
    }
    else if(this.order<=25 && this.order>0 ){
      this.track="Order Preparing"
    }
    else if(this.order<=50 && this.order>25 ){
      this.track="Out From Hotel"
    }
    else if(this.order<=75 && this.order>50 ){
      this.track="On The Way"
    }
    else if(this.order<=99 && this.order>75 ){
       this.track="Near By Area"
    }
    else{
       this.track="Reached Home!"
    }
   }
   
  constructor() { }

  ngOnInit(): void {
   
  }

}
