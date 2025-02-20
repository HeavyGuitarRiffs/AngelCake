import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'http://localhost:5000/api/blogs';

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getBlogById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createBlog(blog: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, blog);
  }

  deleteBlog(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
