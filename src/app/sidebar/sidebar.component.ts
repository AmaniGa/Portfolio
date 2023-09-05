import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicChildLoaderDirective } from '../directives/dynamic-child-loader.directive';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,DynamicChildLoaderDirective],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private _general: GeneralService) {}
  @Output() openAbout = new EventEmitter();
  @Output() openResume = new EventEmitter();
  @Output() openProjects = new EventEmitter();
  @Output() openContact = new EventEmitter();

  About(){
    this.openAbout.emit('out');
    this._general.homeSideBar.next(false)
  }
  Resume(){
    this.openResume.emit('out');
    this._general.homeSideBar.next(false)
  } 
  Projects(){
    this.openProjects.emit('out');
    this._general.homeSideBar.next(false)
  
  }
  Contact(){
    this.openContact.emit('out');
    this._general.homeSideBar.next(false)
  }

}
