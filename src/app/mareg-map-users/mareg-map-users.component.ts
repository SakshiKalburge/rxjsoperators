import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-mareg-map-users',
  templateUrl: './mareg-map-users.component.html',
  styleUrls: ['./mareg-map-users.component.scss']
})
export class MaregMapUsersComponent implements OnInit {
userandBlog:Array<any> = []
  constructor(
    private _userservice : UsersService
  ) { }

  ngOnInit(): void {
    this.fetchUsersandBlog()
  }

  fetchUsersandBlog(){
    this._userservice.fetchUsers()
    .subscribe({
      next:(data:any[]) =>{
        data.forEach(user=>{
          console.log(user.id);
          this._userservice.fetchuserBlogs(user.id)
          .subscribe({
            next:res=>{
              this.userandBlog.push({...user,blogs : res})
            }
          })
        })
      }
    })
  }
}
