import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule, // ✅ Required for HTTP requests
  ],
  
})
export class AppModule {}
