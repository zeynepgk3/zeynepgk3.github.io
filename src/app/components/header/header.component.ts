import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener("scroll",()=>{
      var header=document.querySelector('nav');
      // console.log(header);
      header?.classList.toggle("sticky",window.scrollY>0);
    })
  }
  scrollTo(category: string) {
    let el = document.getElementById(category);
    // console.log("fonksiyon çalışıyor "+el+" "+category);
    el?.scrollIntoView({ behavior: "smooth" });

    
  }

  //<span class="sr-only">(current)</span>

}
