import { Component, OnInit } from '@angular/core';

import { TimetableService } from 'src/app/services/timetable.service';
import { Week } from 'src/app/enums/week';
import { TimeTableRow } from 'src/app/models/TimeTableRow';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {

  currentClass = 1;
  currentWeek: Week = Week.A;
  timeTableRows: TimeTableRow[];
  displayedColumns: string[] = ['idopont', 'hetfo', 'kedd', 'szerda', 'csutortok', 'pentek'];

  constructor(private _service: TimetableService) { }

  ngOnInit(): void {
    this.getTimetable();
  }

  getTimetable(): void{
    this._service.getTimetable(this.currentClass, this.currentWeek).subscribe(result => {
      this.timeTableRows = result;
    });
  }

  setCurrentClass(num: number): void{
    // this.clearFields();
    this.currentClass = num;
    this.getTimetable();
  }

  setCurrentWeek(week: string): void{
    if (week === 'A') {
      this.currentWeek = Week.A;
    }
    else{
      this.currentWeek = Week.B;
    }
    this.getTimetable();
  }
}
