import { Component, OnInit } from '@angular/core';
import { MeanappService } from '../meanapp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styles: []
})
export class ViewcourseComponent implements OnInit {
  allcourse: any = [];
  constructor(private q: MeanappService, private route: Router) {
    this.ngOnInit();
  }

  ngOnInit() {
    this.q.readCourse().subscribe(k => {
      this.allcourse = k['data'];
    });
  }
  Coursedetails(_id) {
    this.route.navigate(['/details/', _id]);
  }
}
