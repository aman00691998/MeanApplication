import { Component, OnInit } from '@angular/core';
import { MeanappService } from '../meanapp.service';
import { ToastrService } from 'ngx-toastr';
import { MappingsContext } from 'source-list-map';
import { Router } from '@angular/router';
declare var jQuery: any;
@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styles: []
})
export class Header1Component implements OnInit {
  msg: string;
  constructor(private q: MeanappService, private toastr: ToastrService, private route: Router) { }

  ngOnInit() {
  }
  signup(ud) {
    this.q.addUser(ud.value).subscribe(k => {
      this.toastr.success('Register Successfully', 'Success', {
        closeButton: true,
        progressBar: true,
        timeOut: 3000
      });
      jQuery("#exampleModal1").modal("hide");
    });
  }
  signin(ld) {
    console.log(ld.value)
    this.q.signinUser(ld.value).subscribe(k => {
      this.msg = k['data'];
      if (this.msg == "") {
        this.toastr.error('Login Failed', 'Failed', {
          closeButton: true,
          progressBar: true,
          timeOut: 3000
        });
      }
      else {
        jQuery("#exampleModal").modal("hide");
        this.route.navigate(['/user']);

      }
    });
  }


}
