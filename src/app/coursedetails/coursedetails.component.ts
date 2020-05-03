import { Component, OnInit } from '@angular/core';
import { MeanappService } from '../meanapp.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styles: []
})
export class CoursedetailsComponent implements OnInit {
  courseDetails: any = [];
  id: string;
  constructor(private q: MeanappService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.q.readCoursebyid(this.id).subscribe(k => {
      this.courseDetails = k['course'];
    });
  }

}
