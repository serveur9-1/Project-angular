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
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  allEvents: IParticipantService[] = [];
  groupForm!: FormGroup;
  submitted = false;
  groupeId!: number;
  userFile: any;
  public imagePath: any;
  imgURL: any;
  message: string | undefined;
  image: any;

  constructor(private groupService: GroupeControllerService, private eventService: EvenementControllerService, private toastr: ToastrService, private fb: FormBuilder, private router: ActivatedRoute, private HttpClient: HttpClient) { }

  get f() {
    return this.groupForm.controls;
  }

  ngOnInit(): void {
    this.reloadData();
    this.groupeForm();
    this.groupeId = this.router.snapshot.params.id;
    if (this.groupeId) {
      this.groupService.getEvenementByIdUsingGET1(this.groupeId).subscribe(
        data => this.groupForm = this.fb.group({
          groupeId: data.groupeId,
          groupeCode: data.groupeCode,
          groupeNom: data.groupeNom,
          groupePhoto: data.groupePhoto,
          evenementId: data.evenement?.evenementId,
        }),
        error => console.log(error)
      )
    }

  }


  groupeForm() {
    this.groupForm = this.fb.group({
      groupeId: [100000],
      groupeCode: ["", Validators.required],
      groupeNom: ["", Validators.required],
      groupePhoto: [],
      evenementId: ["", Validators.required],

    })
  }

  reloadData() {

    this.eventService.getAllEvenementsUsingGET().subscribe(

      (res) => {
        this.allEvents = res;
      },
      (error) => {
        console.error(error)
      }
    )
  }

  addData() {

    const formData: any = new FormData();
    const groupe =  {...this.groupForm.value, evenement: {evenementId:this.groupForm.value.evenementId}}
    delete groupe.groupePhoto;
    delete groupe.evenementId;
    const myObjStr = JSON.stringify(groupe);

    formData.append('groupe', myObjStr);
    formData.append('file', this.image);
    console.log('object',groupe);

    // this.eventService.createOrUpdateEvenementUsingPOST(JSON.stringify(formData)).subscribe(
    //   data => console.log('tttt',data)
    // )
    this.HttpClient.post<Groupes>("http://127.0.0.1:8080/groupe", formData).subscribe(
      data => {
        if (this.groupeId) {

          this.toastr.success("groupe modifié avec succès");

        } else {

          this.toastr.success("groupe ajouté avec succès");
          this.groupForm.reset();
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


  onSubmit() {

    if (!this.groupForm.valid) {
      this.toastr.error("Veuillez renseigner les champs réquis");
    } else {
      this.addData();
    }
  }

}
