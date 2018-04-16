import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User;
  private sub: any;
  public id: number;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute 
  ) { }

  ngOnInit() {
    this.sub  = this.route.params.subscribe(
      params => {
        this.id = params['id'];
      }
    );
    this.userService.getSingleUser(this.id).subscribe(
      data => {
        this.user = JSON.parse(JSON.stringify(data.body));
      }
    );
  }

}
