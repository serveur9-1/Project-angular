import { IParticipantService } from './../api/models/iparticipant-service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Evenement } from '../api/models';
import { CritereControllerService, EvenementControllerService } from '../api/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-critere',
  templateUrl: './add-critere.component.html',
  styleUrls: ['./add-critere.component.css']
})
export class AddCritereComponent implements OnInit {

  allEvents : IParticipantService[] = [];
  critereForm!: FormGroup;
  critereId!: number;
  submitted =false;
  constructor(private critereService : CritereControllerService,private eventService: EvenementControllerService,private toastr: ToastrService, private fb: FormBuilder, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadData();
    this.critereFormInit()
    this.critereId = this.router.snapshot.params.id;
    if(this.critereId){
      this.critereService.getCritereByIdUsingGET(this.critereId).subscribe(
        data => this.critereForm = this.fb.group({
        critereId : data.critereId,
        critereBareme : data.critereBareme,
        critereLibelle : data.critereLibelle,
        evenementId : data.evenement?.evenementId,
        }),
        error => console.log(error)
      )
    }

  }

  critereFormInit(){
    this.critereForm = this.fb.group({
      critereId : [100000],
      critereBareme : ["", Validators.required],
      critereLibelle : ["", Validators.required],
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
    if (!this.critereForm.valid) {
      this.toastr.error("Veuillez renseigner les champs réquis");
      console.log(this.critereForm.value)
    } else {
      this.critereService.createOrUpdateCritereUsingPOST({...this.critereForm.value, evenement: {evenementId:this.critereForm.value.evenementId}})
      .subscribe(
        data => {
          if (this.critereId) {

            this.toastr.success("critère modifié avec succès");
            console.log(data);
              
            } else {
  
            this.toastr.success("critère ajouté avec succès");
            this.critereForm.reset();
            console.log(data);
            }
        },
        error => this.toastr.error(error.message)
        );
    }
    }

}
