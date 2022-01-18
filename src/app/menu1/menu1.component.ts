import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component implements OnInit {
 //////cheese///////
  cheesetotal=0;
  cheese=0;
  cheesefun(){
    this.cheesetotal=this.cheese*99;
  }
  cheeseplus(){
    this.cheese++;
    this.cheesefun()
    
  }
  cheeseminus(){
    if(this.cheese>0){
      this.cheese--;
      this.cheesefun()
    }
  }
  ///////onion////////
  oniontotal=0;
  onion=0;
  onionfun(){
    this.oniontotal=this.onion*99;
  }
  onionplus(){
    this.onion++;
    this.onionfun()
    
  }
  onionminus(){
    if(this.onion>0){
      this.onion--;
      this.onionfun()
    }
  }
  /////tomato////
  tomatototal=0;
  tomato=0;
  tomatofun(){
    this.tomatototal=this.tomato*99;
  }
  tomatoplus(){
    this.tomato++;
    this.tomatofun()
    
  }
  tomatominus(){
    if(this.tomato>0){
      this.tomato--;
      this.tomatofun()
    }
  }
  ///////////chicken////
  chickentotal=0;
  chicken=0;
  chickenfun(){
    this.chickentotal=this.chicken*99;
  }
  chickenplus(){
    this.chicken++;
    this.chickenfun()
    
  }
  chickenminus(){
    if(this.chicken>0){
      this.chicken--;
      this.chickenfun()
    }
  }

  ///////////capsicum////
  capsicumtotal=0;
  capsicum=0;
  capsicumfun(){
    this.capsicumtotal=this.capsicum*99;
  }
  capsicumplus(){
    this.capsicum++;
    this.capsicumfun()
    
  }
  capsicumminus(){
    if(this.capsicum>0){
      this.capsicum--;
      this.capsicumfun()
    }
  }
///////////italian////
italiantotal=0;
italian=0;
italianfun(){
  this.italiantotal=this.italian*99;
}
italianplus(){
  this.italian++;
  this.italianfun()
  
}
italianminus(){
  if(this.italian>0){
    this.italian--;
    this.italianfun()
  }
}

  constructor() { }

  ngOnInit(): void {
  }

}
