import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
declare var anime: any;
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements AfterViewInit {
  show: boolean = true
 
  ngOnInit() {
 

  }
  start(){
    setTimeout(() => {
      this.show = !this.show
      this.start()
    }, 4000);
  }
  ngAfterViewInit(): void {
    this.start();
    // Wrap every letter in a span
   
    const textWrapper = document.querySelector('.fonction') as any;
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({ loop: true })
    
      .add({
        targets: '.fonction .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 900,
        delay: (_el: any, i: number) => 70 * i
      }).add({
        targets: '.fonction',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1900
      });
      const textWrapper1 = document.querySelector('.fonction1') as any;
      textWrapper.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      anime.timeline({ loop: true })
      
        .add({
          targets: '.fonction1 .letter',
          scale: [4, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 2900,
          delay: (_el: any, i: number) => 70 * i
        }).add({
          targets: '.fonction1',
          opacity: 0,
          duration: 3000,
          easing: "easeOutExpo",
          delay: 4000
        });
  

  }
}
