import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {User} from "./user.model";
import {UserService} from "./user.service";

@Component({
  selector: 'edit-user',
  templateUrl: 'edit-user.component.html'
})

export class EditUserComponent implements OnInit{

  user: User;

  constructor(private route : ActivatedRoute,
              private userService : UserService){
    this.user = new User();

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        let id = params['id'];
        this.userService.find(id).subscribe((res) => this.onSuccess(res), () => console.log('error'));
      }
    });
  }

  onSuccess(res){
    this.user = res;
  }

  edit(){
    this.userService.update(this.user,this.user.id).subscribe((res) => console.log('success'), () => console.log('error'))
  }


}
