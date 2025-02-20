import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  blog: any;
  isAdmin = localStorage.getItem("isAdmin") === "true";

  constructor(private route: ActivatedRoute, private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.blogService.getBlogById(id).subscribe(
        blog => {
          this.blog = blog;
        },
        error => {
          console.error("❌ Error fetching blog post:", error);
          alert("Error loading blog post.");
        }
      );
    }
  }

  deleteBlog() {
    if (!this.blog || !this.blog._id) {
      console.error("❌ Error: Blog ID is missing!");
      alert("Error: Blog ID is missing!");
      return;
    }

    if (confirm("Are you sure you want to delete this blog post?")) {
      this.blogService.deleteBlog(this.blog._id).subscribe(
        () => {
          alert("Blog deleted successfully!");
          this.router.navigate(['/blog']);
        },
        error => {
          console.error("❌ Error deleting blog:", error);
          alert("Error deleting blog.");
        }
      );
    }
  }
}
