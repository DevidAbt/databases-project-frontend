import { Component, OnInit } from '@angular/core';

import { StatService } from 'src/app/services/stat.service';
import { NumOfSubjectTypes } from 'src/app/models/NumOfSubjectTypes';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  currentClass = 1;
  currentNumOfTypes: NumOfSubjectTypes = {real: 0, human: 0, sport: 0, egyeb: 0};
  numOfSubjectsByType = {
    view: [700, 400],
    colorScheme : {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    },
    data: null
  }
  numOfSubjectsByRooms = {
    view: [900, 600],
    data: null
  }
  bigRooms: {szam: number, nev: string}[];
  displayedColumns: string[] = ['szam', 'nev'];


  constructor(private _service: StatService) { }

  ngOnInit(): void {
    this.getData();
    this.getBigRooms();
  }

  getData(){
    this.getNumOfSubjectByTypeOfClass();
    this.getNumOfSubjectByRoomsOfClass();
  }

  getNumOfSubjectByTypeOfClass(){
    this._service.getNumOfSubjectByTypesOfClass(this.currentClass).subscribe(result => {
      this.numOfSubjectsByType.data = result;
    });
  }

  getNumOfSubjectByRoomsOfClass(){
    this._service.getNumOfSubjectByRoomsOfClass(this.currentClass).subscribe(result => {
      this.numOfSubjectsByRooms.data = result;
    });
  }

  getBigRooms(){
    this._service.getBigRooms().subscribe(result => {
      this.bigRooms = result;
    })
  }

  setCurrentClass(num: number){
    this.currentClass = num;
    this.getData();
  }
}
