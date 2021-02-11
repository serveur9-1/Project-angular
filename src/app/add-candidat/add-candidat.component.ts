import { IParticipantService } from './../api/models/iparticipant-service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CandidatControllerService, EvenementControllerService } from '../api/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css']
})
export class AddCandidatComponent implements OnInit {

  allEvents : IParticipantService[] = [];
  candidatForm!: FormGroup;
  submitted =false;
  candidId!: number;

  constructor(private candidatService : CandidatControllerService,private eventService: EvenementControllerService,private toastr: ToastrService, private fb: FormBuilder, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadData();
    this.candidForm();
    this.candidId = this.router.snapshot.params.id;
    if(this.candidId){
      this.candidatService.getCandidatByIdUsingGET(this.candidId).subscribe(
        data => this.candidatForm = this.fb.group({
          candidatId : data.candidatId,
          candidatCode : data.candidatCode,
          candidatEmail : data.candidatEmail,
          candidatNom : data.candidatNom,
          candidatTelephone : data.candidatTelephone,
          candidatPrenoms : data.candidatPrenoms,
          evenementId : data.evenement?.evenementId,
        }),
        error => console.log(error)
      )
    } 
    
   
  }

  candidForm(){
    this.candidatForm = this.fb.group({
      candidatId : [100000],
      candidatCode : ["", Validators.required],
      candidatEmail : ["", Validators.required],
      candidatNom : ["", Validators.required],
      groupePhoto : [null],
      candidatTelephone : ["", Validators.required],
      candidatPrenoms : ["", Validators.required],
      evenementId : ["", Validators.required],
    })
  }

  reloadData(){

    this.eventService.getAllEvenementsUsingGET().subscribe(

      (res)=>{
        this.allEvents = res;
      },
      (error) => {
        console.error(error)
      }
    )
  }

  onSubmit(){
    if (!this.candidatForm.valid) {
      this.toastr.error("Veuillez renseigner les champs réquis");
    } else {
      this.candidatService.createOrUpdateCandidatUsingPOST({...this.candidatForm.value, evenement: {evenementId:this.candidatForm.value.evenementId}})
      .subscribe(
        data => {
          this.toastr.success("candidat ajouté avec succès");
          this.candidatForm.reset();
        },
        error => this.toastr.error(error.message)
        );
    }
    }

}
