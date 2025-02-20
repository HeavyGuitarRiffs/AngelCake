import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component'; // ✅ Import Blog Component

@NgModule({
  declarations: [
    AppComponent, // ✅ Ensure this is included
    BlogComponent // ✅ Add Blog Component to declarations
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // ✅ Ensure AppComponent is bootstrapped
})
export class AppModule { }
