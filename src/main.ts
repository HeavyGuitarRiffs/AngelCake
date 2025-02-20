import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// ✅ Import standalone components correctly
import { importProvidersFrom } from '@angular/core';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { ContactComponent } from './app/contact/contact.component';
import { GalleryComponent } from './app/gallery/gallery.component';
import { PortfolioComponent } from './app/portfolio/portfolio.component';
import { BlogComponent } from './app/blog/blog.component'; // ✅ Add BlogComponent

// ✅ Add Blog to Routes
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'blog', component: BlogComponent }, // ✅ Added Blog Page Route
    ]),
  ],
});

// ✅ Ensure AppModule is Bootstrapped
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
