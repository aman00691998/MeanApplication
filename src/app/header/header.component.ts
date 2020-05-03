import { Component, OnInit } from '@angular/core';
import { MeanappService } from '../meanapp.service';
import { ToastrService } from 'ngx-toastr';
declare var jQuery: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private q: MeanappService, private toastr: ToastrService) { }

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
  signin(ud) {
    this.q.addUser(ud.value).subscribe();
  }


}
