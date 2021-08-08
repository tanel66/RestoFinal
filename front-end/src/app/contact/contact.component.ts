import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 
  constructor() { 
  }

  alertMe(){
    alert("Sorry, we are not a real restaurant (yet)! ")
  }
  
  ngOnInit(): void {
  }

}
