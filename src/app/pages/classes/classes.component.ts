import { Component, OnInit } from '@angular/core';

import { ClassService } from 'src/app/services/class.service'

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  classes: string = '';

  constructor(private _service : ClassService) { }

  ngOnInit(): void {
    this._service.getAllClasses().subscribe((result)=>{
      this.classes = result;
    })
  }

}
