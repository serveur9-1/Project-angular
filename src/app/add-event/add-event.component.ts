import { Evenement } from './../api/models/evenement';
import { Component, OnInit } from '@angular/core';
import { EvenementControllerService } from '../api/services/evenement-controller.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  file=new FormControl('');
  file_data:any='';
  urls: any;
  images: any;


  constructor(private eventService :  EvenementControllerService,private toastr: ToastrService, private fb: FormBuilder, private router: ActivatedRoute) {}

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
      evenementPhoto: [null]
    })
  }
  fileChange(event: any) {
    
    this.urls = [];
    this.images = [];
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        this.images[i] = event.target.files[i];
        const reader = new FileReader();
        // console.log(new FileReader());
        // tslint:disable-next-line:no-shadowed-variable
        reader.onload = (event: any) => {
          this.urls.push(event.target.result);
        };
        reader.readAsDataURL(event.target.files[i]);
      }
    }
    // console.log(this.urls[0]);

  }

  onSelectFile(event: any) {

    this.urls = [];
    this.images = [];
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        this.images[i] = event.target.files[i];
        const reader = new FileReader();
        // console.log(new FileReader());
        // tslint:disable-next-line:no-shadowed-variable
        reader.onload = (event: any) => {
          this.urls.push(event.target.result);
        };
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }


  onSubmit(){

    this.eventForm.value.evenementPhoto = this.urls[0];
    if (!this.eventForm.valid) {
      this.toastr.error("Veuillez renseigner les champs réquis");
    } else {
      this.eventService.createOrUpdateEvenementUsingPOST(this.eventForm.value)
      .subscribe(
        data => {
          if (this.evenId) {

          this.toastr.success("evenement modifié avec succès");
            
          } else {

          this.toastr.success("evenement ajouté avec succès");
          this.eventForm.reset();
          }
        },
        error => this.toastr.error(error.message)
        );
    }
    }

}
