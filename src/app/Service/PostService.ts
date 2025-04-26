import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/Model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseURL = 'https://localhost:7104/api/';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(this.baseURL + 'Post/getPosts');
  }

  getPostsByUserId(userId: number): Observable<any> {
    return this.http.get(this.baseURL + 'Post/getPosts/' + userId);
  }

  addPost(post: Post): Observable<any> {
    return this.http.post<Post>(this.baseURL + 'Posts', post);
  }
}
