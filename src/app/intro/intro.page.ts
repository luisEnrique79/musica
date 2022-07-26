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
      title: "titulo 1",
      subtitle: "sub title 1",
      icon: "musical-notes-outline",
      img: "assets/images/slide1.jpg",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "titulo 2",
      subtitle: "sub title 2",
      icon: "musical-note-outline",
      img: "assets/images/slide2.jpg",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
    },
    {
      title: "titulo 3",
      subtitle: "sub title 3",
      icon: "play-outline",
      img: "assets/images/slide3.jpg",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."  
    },
    {
      title: "titulo 4",
      subtitle: "sub title 4",
      icon: "musical-notes-outline",
      img: "assets/images/slide4.jpg",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ]
  constructor(private router: Router, private storage:Storage) {
    this.storage.create();
  }

  ngOnInit(): void{
    this.showe().then( x => {
      if (x){
        this.router.navigateByUrl("/home")
      }
    })
  }

  async showe() {
    const show = await this.storage.get("isIntroShowed");
    return show
    
  }

  finish() {
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/home");
  }

}
