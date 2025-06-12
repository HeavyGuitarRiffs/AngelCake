import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule], // ✅ Add HttpClientModule
  template: `
    <h1>Welcome to the Blog</h1>
    <ul>
      <li *ngFor="let blog of blogs">
        <a [routerLink]="['/blog', blog.id]">{{ blog.title }}</a>
      </li>
    </ul>
  `
})
export class BlogComponent implements OnInit {
  blogs: any[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(data => {
      this.blogs = data;
    });
  }
}
