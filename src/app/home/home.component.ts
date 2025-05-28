import { Component } from '@angular/core';

@Component({
  standalone: true, // ✅ Ensure standalone is set
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { }
