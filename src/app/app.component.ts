import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mail="pizza@xyz.com"
  word="123123"
  pass=""
  email=""
  form=true
  title = 'Pizzalazyloading';
  signin=true;
  abc=true;
  fun(){
  
    if(this.email==this.mail && this.pass== this.word){
      this.form= false;
      this.signin=true;

    }



    
  }
}
