import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comment} from '../models/Comment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

comments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments`);
}

commentsById(id): Observable<Comment[]> {
  return this.httpClient.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments/${id}`);
}

filterComments(comments, comment): Comment {
    return comments.filter(value => value.id === +value.id || value.body.toLowerCase().includes(comment.body.toLowerCase()));
}
}
