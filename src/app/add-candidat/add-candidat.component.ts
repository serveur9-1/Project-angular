import { IParticipantService } from './../api/models/iparticipant-service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Evenement } from '../api/models';
import { CandidatControllerService, EvenementControllerService } from '../api/services';

@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css']
})
export class AddCandidatComponent implements OnInit {

  allEvents : IParticipantService[] = [];
  candidatForm!: FormGroup;
  submitted =false;

  constructor(private candidatService : CandidatControllerService,private eventService: EvenementControllerService,private toastr: ToastrService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.reloadData();
    this.candidatForm = this.fb.group({
      groupeId : [100000],
      groupeCode : ["", Validators.required],
      groupeNom : ["", Validators.required],
      groupePhoto : [null],
      evenementId : ["", Validators.required],
    })
   
  }

  reloadData(){

    this.eventService.getAllEvenementsUsingGET().subscribe(

      (res)=>{
        this.allEvents = res;
        console.log(res)
      },
      (error) => {
        console.error(error)
      }
    )
  }

  onSubmit(){
    if (!this.candidatForm.valid) {
      this.toastr.error("Veuillez renseigner les champs réquis");
      console.log(this.candidatForm.value)
    } else {
      this.candidatService.createOrUpdateCandidatUsingPOST({...this.candidatForm.value, evenement: {evenementId:this.candidatForm.value.evenementId}})
      .subscribe(
        data => {
          this.toastr.success("candidat ajouté avec succès");
          this.candidatForm.reset();
          console.log(data);
        },
        error => this.toastr.error(error.message)
        );
    }
    }

}
