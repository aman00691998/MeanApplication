import { Component, OnInit } from '@angular/core';
import { MeanappService } from '../meanapp.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styles: []
})
export class AddcourseComponent implements OnInit {

  constructor(private q: MeanappService) { }

  ngOnInit() {
  }
  Add(cd) {
    this.q.addCourse(cd.value).subscribe();
  }
}
