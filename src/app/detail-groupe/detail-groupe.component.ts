import { Groupe_candidats } from './../api/models/groupe-_candidats';
import { CandidatComponent } from './../candidat/candidat.component';
import { Candidats } from './../api/models/candidats';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Groupes } from '../api/models';
import { CandidatControllerService, GroupeCandidatControllerService, GroupeControllerService } from '../api/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail-groupe',
  templateUrl: './detail-groupe.component.html',
  styleUrls: ['./detail-groupe.component.css']
})
export class DetailGroupeComponent implements OnInit {

  GroupeD: any = {};
  groupeId!: number;
  candidatId!: number;
  allCandid: Candidats[] = [];
  candidatByGroup: Groupe_candidats[] = [];
  addCandGroupForm!: FormGroup;

  candidatForm!: FormGroup;
  submitted =false;
  candidId!: number;
  userFile: any;
  public imagePath: any;
  imgURL: any;
  message: string | undefined;
  image: any;
  eventId!: number;

  constructor(private groupeCandidatService: GroupeCandidatControllerService, private groupeService: GroupeControllerService, private toastr: ToastrService, private fb: FormBuilder, private router: ActivatedRoute, private candidatService: CandidatControllerService, private HttpClient: HttpClient) { }

  ngOnInit(): void {
    this.reloadData();
    this.groupeCFormInit();
    this.candidatByGroupe();
    this.candidForm();
  }

  candidForm(){
    this.candidatForm = this.fb.group({
      candidatId : [100000, Validators.required],
      candidatCode : ["", Validators.required],
      candidatEmail : ["", Validators.required],
      candidatNom : ["", Validators.required],
      candidatPhoto : [],
      candidatTelephone : ["", Validators.required],
      candidatPrenoms : ["", Validators.required],
    })
  }

  groupeCFormInit() {
    this.addCandGroupForm = this.fb.group({
      groupeCandidatId: [100000],
      candidatId: ["", Validators.required],
    })
  }

  reloadData() {
    
    this.groupeId = this.router.snapshot.params.id;
    this.groupeService.getEvenementByIdUsingGET1(this.groupeId).subscribe(
      (res) => {
        this.GroupeD = res;
      },
      (error) => {
        console.error(error)
      }
    )
  }

  addData() {
    this.eventId = this.router.snapshot.params.id2;
    this.groupeId = this.router.snapshot.params.id;
    console.log('mmmmmm',this.eventId,this.groupeId);
    const formData: any = new FormData();
    const candidat =  {...this.candidatForm.value, evenement: {evenementId:this.eventId}}
    delete candidat.candidatPhoto;
    const myObjStr = JSON.stringify(candidat);

    formData.append('candidat', myObjStr);
    formData.append('file', this.image);
    console.log('object',candidat);

    this.HttpClient.post<Candidats>("http://127.0.0.1:8080/candidat", formData).subscribe(
      data => {
          this.toastr.success("candidat ajouté avec succès");
          console.log('lololo',data);
          this.groupeCandidatService.createOrUpdateGroupeCandidatUsingPOST({ ...this.addCandGroupForm.value, candidat: { candidatId: data.candidatId }, groupe: { groupeId: this.groupeId } }).subscribe(
            data => {console.log(data);
              this.candidatByGroupe()}
          )

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



  candidatByGroupe() {
    this.groupeId = this.router.snapshot.params.id;
    this.groupeCandidatService.getGroupeCandidatByGroupIdUsingGET(this.groupeId).subscribe(
      (res) => {
        this.candidatByGroup = res;
      },
      (error) => {
        console.error(error)
      }
    )
  }

  deletecandidat(candidatId: number) {
    this.candidatId = candidatId; // **stored particular Id**
  }
  deleteOK() {

    this.groupeCandidatService.deleteUsingDELETE3(this.candidatId)
      .subscribe(
        data => {
          this.toastr.success("utilisateur supprimé avec succès");
          this.candidatByGroupe();
        },
        error => console.log(error));
  }

}
