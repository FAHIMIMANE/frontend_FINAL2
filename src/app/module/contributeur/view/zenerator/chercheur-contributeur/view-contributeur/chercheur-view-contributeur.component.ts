import {Component, OnInit} from '@angular/core';
import {ChercheurService} from 'src/app/controller/service/Chercheur.service';
import {ChercheurVo} from 'src/app/controller/model/Chercheur.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-chercheur-view-contributeur',
  templateUrl: './chercheur-view-contributeur.component.html',
  styleUrls: ['./chercheur-view-contributeur.component.css']
})
export class ChercheurViewContributeurComponent implements OnInit {


constructor(private datePipe: DatePipe, private chercheurService: ChercheurService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewChercheurDialog  = false;
}

// getters and setters

get chercheurs(): Array<ChercheurVo> {
    return this.chercheurService.chercheurs;
       }
set chercheurs(value: Array<ChercheurVo>) {
        this.chercheurService.chercheurs = value;
       }

 get selectedChercheur(): ChercheurVo {
           return this.chercheurService.selectedChercheur;
       }
    set selectedChercheur(value: ChercheurVo) {
        this.chercheurService.selectedChercheur = value;
       }

   get viewChercheurDialog(): boolean {
           return this.chercheurService.viewChercheurDialog;

       }
    set viewChercheurDialog(value: boolean) {
        this.chercheurService.viewChercheurDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
