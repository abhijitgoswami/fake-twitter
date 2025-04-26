import { Component } from '@angular/core';
import { AuthService } from 'src/app/Service/AuthService';
import { PostService } from 'src/app/Service/PostService';
import { UserService } from 'src/app/Service/UserService';
import { Post } from 'src/Model/Post';
import { User } from 'src/Model/User';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
  providers: [PostService, UserService, AuthService],
})
export class PostComponent {
  posts: Post[] = []; // Initialize posts as an empty array
  users: User[] = [];
  isLoggedIn: boolean = false; // Initialize isLoggedIn to false
  loggedInUserName: string = ''; // Initialize loggedInUser to an empty string
  loggedInUser: User | null = null;

  constructor(private postService: PostService, private userService: UserService, private authService: AuthService) {
    // Check if the user is logged in
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });

    if (this.isLoggedIn) {
      this.loggedInUserName = this.authService.getLoggedInUser() ?? ''

      this.userService.getUser(this.loggedInUserName).subscribe((user: User) => {
        this.loggedInUser = user; // Assign the fetched user to the component's loggedInUser property
      });

      if (this.loggedInUser?.id !== undefined) {
        this.postService.getPostsByUserId(this.loggedInUser.id).subscribe((posts: Post[]) => {
          this.posts = posts; // Assign the fetched posts to the component's posts property
        });
      }
    }
    else{
      this.postService.getPosts().subscribe((posts: Post[]) => {
        this.posts = posts; // Assign the fetched posts to the component's posts property
      });

      this.userService.getUsers().subscribe((users: User[]) => {
        this.users = users;
      });
    }
  }

  ngonInit() {
    // Initialization logic can be added here if needed
  }

  getUserName(id: number){
    let userName;

    this.userService.getUserById(id).subscribe((user: User) => {
      userName = user.firstName + ' ' + user.lastName
    });

    return userName
  }
}
