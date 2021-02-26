import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CandidatControllerService, EvenementControllerService } from '../api/services';
import { ActivatedRoute } from '@angular/router';
import { Candidats } from './../api/models/candidats';
import { IParticipantService } from './../api/models/iparticipant-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-candidat1',
  templateUrl: './add-candidat1.component.html',
  styleUrls: ['./add-candidat1.component.css']
})
export class AddCandidat1Component implements OnInit {

  allEvents : IParticipantService[] = [];
  candidatForm!: FormGroup;
  submitted =false;
  candidId!: number;
  userFile: any;
  public imagePath: any;
  imgURL: any;
  message: string | undefined;
  image: any;
  eventId!: number;

  constructor(private candidatService : CandidatControllerService,private eventService: EvenementControllerService,private toastr: ToastrService, private fb: FormBuilder, private router: ActivatedRoute, private HttpClient: HttpClient) { }

  ngOnInit(): void {

    this.candidForm();
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
    })
  }

  addData() {
    this.eventId = this.router.snapshot.params.id;
    const formData: any = new FormData();
    const candidat =  {...this.candidatForm.value, evenement: {evenementId:this.eventId}}
    delete candidat.candidatPhoto;
    const myObjStr = JSON.stringify(candidat);

    formData.append('candidat', myObjStr);
    formData.append('file', this.image);
    console.log('object',candidat);

    // this.eventService.createOrUpdateEvenementUsingPOST(JSON.stringify(formData)).subscribe(
    //   data => console.log('tttt',data)
    // )
    this.HttpClient.post<Candidats>("http://127.0.0.1:8080/candidat", formData).subscribe(
      data => {
          this.toastr.success("candidat ajouté avec succès");
          console.log('lololo',data.candidatId);
          this.candidatForm.reset();
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
