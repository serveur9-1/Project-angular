import { Groupes } from './../api/models/groupes';
import { IParticipantService } from './../api/models/iparticipant-service';
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Evenement } from '../api/models';
import { GroupeControllerService, EvenementControllerService } from '../api/services';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-groupe1',
  templateUrl: './add-groupe1.component.html',
  styleUrls: ['./add-groupe1.component.css']
})
export class AddGroupe1Component implements OnInit {

  allEvents: IParticipantService[] = [];
  groupForm!: FormGroup;
  submitted = false;
  groupeId!: number;
  userFile: any;
  public imagePath: any;
  imgURL: any;
  message: string | undefined;
  image: any;
  eventId!: number;

  constructor(private groupService: GroupeControllerService, private eventService: EvenementControllerService, private toastr: ToastrService, private fb: FormBuilder, private router: ActivatedRoute, private HttpClient: HttpClient) { }

  get f() {
    return this.groupForm.controls;
  }

  ngOnInit(): void {
    this.groupeForm();
  }

  groupeForm() {
    this.groupForm = this.fb.group({
      groupeId: [100000],
      groupeCode: ["", Validators.required],
      groupeNom: ["", Validators.required],
      groupePhoto: [],

    })
  }

  addData() {
    this.eventId = this.router.snapshot.params.id;
    const formData: any = new FormData();
    const groupe =  {...this.groupForm.value, evenement: {evenementId:this.eventId}}
    delete groupe.groupePhoto;
    const myObjStr = JSON.stringify(groupe);

    formData.append('groupe', myObjStr);
    formData.append('file', this.image);
    console.log('object',groupe);

    // this.eventService.createOrUpdateEvenementUsingPOST(JSON.stringify(formData)).subscribe(
    //   data => console.log('tttt',data)
    // )
    this.HttpClient.post<Groupes>("http://127.0.0.1:8080/groupe", formData).subscribe(
      data => {
          this.toastr.success("groupe ajouté avec succès");
          this.groupForm.reset();
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


  onSubmit() {

    if (!this.groupForm.valid) {
      this.toastr.error("Veuillez renseigner les champs réquis");
    } else {
      this.addData();
    }
  }

}
