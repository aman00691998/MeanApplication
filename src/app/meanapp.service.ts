import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeanappService {

  private baseurl = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  addCourse(cd) {
    return this.http.post(this.baseurl + "/addcourse", cd);
  }
  readCourse() {
    return this.http.get(this.baseurl + "/viewcourse");
  }
  readCoursebyid(id) {
    return this.http.get(this.baseurl + "/readcourse/" + id);
  }
  addUser(ud) {
    return this.http.post(this.baseurl + "/adduser", ud);
  }
  signinUser(ld) {
    return this.http.post(this.baseurl + "/signin", ld);
  }
}
