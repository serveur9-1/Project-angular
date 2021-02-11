import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Evenement, Jury } from '../api/models';
import { EvenementControllerService } from '../api/services';
import { JuryControllerService } from '../api/services/jury-controller.service';

@Component({
  selector: 'app-jury',
  templateUrl: './jury.component.html',
  styleUrls: ['./jury.component.css']
})
export class JuryComponent implements OnInit {

  allJuries : Jury[] = []
  allEvents : Evenement[] = [];
  juryId!: number;
  constructor(private juryService : JuryControllerService,private toastr: ToastrService,private eventService: EvenementControllerService) { }

  ngOnInit(): void {
    this.reloadData();

  }
  reloadData(){

    this.juryService.getAllJuriesUsingGET().subscribe(

      (res)=>{
        this.allJuries = res;
      },
      (error) => {
        console.error(error)
      }
    )
  }

  deleteJury(juryId: number) {
    this.juryId = juryId ; 
  }
  deleteOK() {
    this.juryService.deleteUsingDELETE5(this.juryId)
      .subscribe(
        data => {
          this.toastr.success("jury supprimé avec succès");
          this.reloadData();
        },
        error => this.toastr.error(error));
  }

}
