import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ This makes it a standalone component
  imports: [RouterModule],
  template: `<nav>
    <a routerLink="/blog">Blog</a>
  </nav>
  <router-outlet></router-outlet>`
})
export class AppComponent { }
