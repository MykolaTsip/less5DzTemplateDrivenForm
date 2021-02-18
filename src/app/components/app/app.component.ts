import {Component} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';
import {PostService} from '../../services/post.service';
import {CommentService} from '../../services/comment.service';
import {Post} from '../../models/Post';
import {Comment} from '../../models/Comment';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService: UserService) {
  }

  // // 1
  // title = '';
  //
  // logTitle(): void {
  //   console.log(this.title);
  // }


// // 2
//   text = '';
//
//   showText(): void {
//     console.log(this.text);
//   }


//   // 3
// id: number;
// user: User;
//
//
//   showUser(userId: HTMLInputElement): void {
//     this.userService.userById(userId.value)
//       .subscribe(user => this.user = user);
//   }


//   // 4
// id: number;
//   name: string;
//   user: User[];
//
//   showUsersByName(userName: NgModel): void {
//     this.userService.users()
//       .subscribe(users => {
//        this.user = this.userService.filterByNameUsers(users, userName.value);
//        console.log(this.user);
//       });
//   }


  // // 5
  // user: User = {id: 0, username: ''};
  //
  // users: User[];
  //
  // showCustomer(usrId: NgModel, usrName: NgModel): void {
  //   this.userService.users()
  //     .subscribe(users => {
  //       console.log(this.user);
  //       console.log(users);
  //       this.users = this.userService.filterUsersByIdAndName(users, this.user);
  //     });
  // }


  // 6

  formaBit(name: any, username: any, numb: number, forma: any): void {
    console.log(name);
    console.log(username);
    console.log(numb);

    console.log(forma);

  }
}
