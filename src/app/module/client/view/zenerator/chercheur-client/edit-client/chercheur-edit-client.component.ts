import {Component, OnInit} from '@angular/core';
import {ChercheurService} from 'src/app/controller/service/Chercheur.service';
import {ChercheurVo} from 'src/app/controller/model/Chercheur.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DateUtils} from '../../../../../../utils/DateUtils';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-chercheur-edit-client',
  templateUrl: './chercheur-edit-client.component.html',
  styleUrls: ['./chercheur-edit-client.component.css']
})
export class ChercheurEditClientComponent implements OnInit {


constructor(private datePipe: DatePipe, private chercheurService: ChercheurService
 ,       private roleService:RoleService
 ,       private messageService: MessageService
 ,       private router: Router
) {
}

// methods
ngOnInit(): void {
}

public edit(){
this.editWithShowOption(false);
}
public editWithShowOption(showList: boolean){
            this.selectedChercheur.createdAt = DateUtils.toDate(this.selectedChercheur.createdAt);
            this.selectedChercheur.updatedAt = DateUtils.toDate(this.selectedChercheur.updatedAt);
    this.chercheurService.edit().subscribe(chercheur=>{
    const myIndex = this.chercheurs.findIndex(e => e.id === this.selectedChercheur.id);
    this.chercheurs[myIndex] = this.selectedChercheur;
    this.editChercheurDialog = false;
    this.selectedChercheur = new ChercheurVo();


    }, error => {
        console.log(error);
    });

}

// methods

hideEditDialog(){
    this.editChercheurDialog  = false;
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

   get editChercheurDialog(): boolean {
           return this.chercheurService.editChercheurDialog;

       }
    set editChercheurDialog(value: boolean) {
        this.chercheurService.editChercheurDialog = value;
       }


    get dateFormat(){
            return environment.dateFormatEdit;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
