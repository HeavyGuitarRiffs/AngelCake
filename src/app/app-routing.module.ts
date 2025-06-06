import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: '', redirectTo: 'blog', pathMatch: 'full' }, // ✅ No starting "/"
  { path: '**', redirectTo: 'blog' } // ✅ Catch-all for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

