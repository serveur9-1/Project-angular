import { Evenement } from './../api/models/evenement';
import { Component, OnInit } from '@angular/core';
import { EvenementControllerService } from '../api/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  evenement  = new Evenement();
  submitted =false;
  constructor(private eventService :  EvenementControllerService, private router:Router) { }

  ngOnInit(): void {
  }

  newEvent(): void {
    this.submitted = false;
    this.evenement = new Evenement();
  }

  save() {
    this.eventService.createOrUpdateEvenementUsingPOST(this.evenement)
      .subscribe(data => console.log(data), error => console.log(error));
    this.evenement = new Evenement  ();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  gotoList() {
      this.router.navigate(['/events']);
    }

}
