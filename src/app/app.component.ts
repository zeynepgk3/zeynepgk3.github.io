import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
}

// const cursor = document.querySelector('.cursor');

// document.addEventListener('mousemove', el => {
//   console.log("mouse hareket etti");
//   cursor.setAttribute("style", "top: " + (el.pageY - 10) + "px; left: " + (el.pageX - 10) + "px;")
// })
