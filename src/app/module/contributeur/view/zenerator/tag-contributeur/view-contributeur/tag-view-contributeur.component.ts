import {Component, OnInit} from '@angular/core';
import {TagService} from 'src/app/controller/service/Tag.service';
import {TagVo} from 'src/app/controller/model/Tag.model';
import {RoleService} from 'src/app/controller/service/role.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-tag-view-contributeur',
  templateUrl: './tag-view-contributeur.component.html',
  styleUrls: ['./tag-view-contributeur.component.css']
})
export class TagViewContributeurComponent implements OnInit {


constructor(private datePipe: DatePipe, private tagService: TagService
,private roleService:RoleService
,private messageService: MessageService
, private router: Router
) {
}

// methods
ngOnInit(): void {
}

hideViewDialog(){
    this.viewTagDialog  = false;
}

// getters and setters

get tags(): Array<TagVo> {
    return this.tagService.tags;
       }
set tags(value: Array<TagVo>) {
        this.tagService.tags = value;
       }

 get selectedTag(): TagVo {
           return this.tagService.selectedTag;
       }
    set selectedTag(value: TagVo) {
        this.tagService.selectedTag = value;
       }

   get viewTagDialog(): boolean {
           return this.tagService.viewTagDialog;

       }
    set viewTagDialog(value: boolean) {
        this.tagService.viewTagDialog= value;
       }


    get dateFormat(){
            return environment.dateFormatView;
    }

    get dateFormatColumn(){
            return environment.dateFormatList;
     }
}
