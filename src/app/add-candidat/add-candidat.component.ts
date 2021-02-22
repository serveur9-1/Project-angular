import { Candidats } from './../api/models/candidats';
import { IParticipantService } from './../api/models/iparticipant-service';
import { HttpClient } from '@angular/common/http';
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
  userFile: any;
  public imagePath: any;
  imgURL: any;
  message: string | undefined;
  image: any;

  constructor(private candidatService : CandidatControllerService,private eventService: EvenementControllerService,private toastr: ToastrService, private fb: FormBuilder, private router: ActivatedRoute, private HttpClient: HttpClient) { }

  get f() {
    return this.candidatForm.controls;
  }
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
      candidatPhoto : [],
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

  addData() {

    const formData: any = new FormData();
    const candidat =  {...this.candidatForm.value, evenement: {evenementId:this.candidatForm.value.evenementId}}
    delete candidat.candidatPhoto;
    delete candidat.evenementId;
    const myObjStr = JSON.stringify(candidat);

    formData.append('candidat', myObjStr);
    formData.append('file', this.image);
    console.log('object',candidat);

    // this.eventService.createOrUpdateEvenementUsingPOST(JSON.stringify(formData)).subscribe(
    //   data => console.log('tttt',data)
    // )
    this.HttpClient.post<Candidats>("http://127.0.0.1:8080/candidat", formData).subscribe(
      data => {
        if (this.candidId) {

          this.toastr.success("groupe modifié avec succès");

        } else {

          this.toastr.success("groupe ajouté avec succès");
          this.candidatForm.reset();
        }
      },
      error => console.error(error)

    )
  }

  onSelectFile(event: any) {
    let blobTest: any;
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      let blob: any;
      this.image = file;
      // COnversion en type blob
      file.arrayBuffer().then((arrayBuffer: any) => {
        blobTest = arrayBuffer;
        blob = new Blob([new Uint8Array(blobTest)], { type: file.type });
        console.log('file blob', blobTest)
      });
      this.userFile = file;
      // this.f['evenementPhoto'].setValue(blobTest);
      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "cette image n'est pas supportée.";
        return;
      }
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };

    }
  }

  onSubmit(){
    if (!this.candidatForm.valid) {
      this.toastr.error("Veuillez renseigner les champs réquis");
    } else {
      this.addData();
    }
    }

}
