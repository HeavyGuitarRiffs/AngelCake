import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent {
  blog: any = { title: '', content: '' };
  selectedFile: File | null = null;

  constructor(private blogService: BlogService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  saveBlog() {
    this.blogService.createBlog(this.blog, this.selectedFile).subscribe(() => {
      alert("Blog post saved!");
    });
  }
}
