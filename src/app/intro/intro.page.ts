import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage  {
  
  slideOpt = {
    initialSlide: 0,
    slidesPerView:1, //slide por vista
    centeredSlides: true,
    speed: 400 //velocidad de movimiento de slide
  }

  
  slides = [
    {
      title: "Crossover",
      subtitle: "Artistas",
      icon: "musical-notes-outline",
      img: "assets/images/slide1.jpg",
      description: "Artistas Latinos"
    },
    {
      title: "Rock",
      subtitle: "Artistas",
      icon: "musical-note-outline",
      img: "assets/images/slide2.jpg",
      description: "Clasicos del Rock" 
    },
    {
      title: "Jazz",
      subtitle: "Artistas",
      icon: "play-outline",
      img: "assets/images/slide3.jpg",
      description: "Exponentes del Jazz"  
    },
    {
      title: "Pop",
      subtitle: "Artistas",
      icon: "musical-notes",
      img: "assets/images/slide4.jpg",
      description: "Pop Latino"  
    }
  ]
  constructor(private router: Router, private storage:Storage) { 
    this.storage.create();
  }

  ngOnInit(): void {
    this.showe().then( x =>{
      //console.log(x)
      if (x) {
        this.router.navigateByUrl("/home")
      }
    })
  } 

  async showe() {
    const show = await this.storage.get("isIntroShowed")
    return show;
  }

  finish() {
    this.storage.set( "isIntroShowed", true);
    this.router.navigateByUrl("/home");
  }

}