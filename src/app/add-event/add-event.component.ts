import { Evenement } from './../api/models/evenement';
import { Component, OnInit } from '@angular/core';
import { EvenementControllerService } from '../api/services/evenement-controller.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  evenement!: Evenement;
  eventForm!: FormGroup;
  evenId!: number;
  submitted =false;
  constructor(private eventService :  EvenementControllerService,private toastr: ToastrService, private fb: FormBuilder, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.evenFormInit()
    this.evenId = this.router.snapshot.params.id;
    if(this.evenId){
      this.eventService.getEvenementByIdUsingGET(this.evenId).subscribe(
        data => this.eventForm.patchValue(data),
        error => console.log(error)
      )
    }
  }

  evenFormInit(){
    this.eventForm = this.fb.group({
      evenementId : [100000],
      evenementNom : ["", Validators.required],
      evenementType : ["Individuel", Validators.required],
      evenementDateDebut : ["", Validators.required],
      evenementDateFin : ["", Validators.required],
    })
  }

  onSubmit(){
    if (!this.eventForm.valid) {
      this.toastr.error("Veuillez renseigner les champs réquis");
    } else {
      console.log(this.eventForm)
      this.eventService.createOrUpdateEvenementUsingPOST(this.eventForm.value)
      .subscribe(
        data => {
          if (this.evenId) {

          this.toastr.success("evenement modifié avec succès");
          console.log(data);
            
          } else {

          this.toastr.success("evenement ajouté avec succès");
          this.eventForm.reset();
          console.log(data);
          }
        },
        error => this.toastr.error(error.message)
        );
    }
    }

}
