import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  onSubmit(form, value: any){
    console.log(value);
    this.userService.postUsers(value).subscribe(
      data => {
        console.log(data);
        form.reset();
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

}
