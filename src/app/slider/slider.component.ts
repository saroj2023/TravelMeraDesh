import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  sliderdata:any = [
    {
      imageUrl: "assets/images/slider-5.jpg",
      imageWelcome: "assets/images/namas.png",
      header: ["WELCOME", "TO", "TRAVEL" ,"MERA" ,"DESH"],
      subHeader: "MAKE Y0UR DREAM TRUE",
      longDesc: "Opportunity to step outside our well-worn, self-constructed, plebian realities and provides a platform to explore and practice our ideal visions for ourselves Traveling is amazing in many ways. You’ll get the chance to do things you’ve never donebefore, meet new people, eat different kinds of food and experience different cultures.",
    },
    {
      imageUrl:"assets/images/Slider-2.jpg",
      imageWelcome: "assets/images/namas.png",
      header: ["WELCOME", "TO", "TRAVEL" ,"MERA" ,"DESH"],
      subHeader: "MAKE Y0UR DREAM TRUE",
      longDesc: "Canacona in South Goa has some gorgeous beaches like Agonda Beach,Butterfly Beach and Palolem Beach. These beaches are flanked by ravishing,lush green mountains. On one side of the beaches, there are sands and towering palm trees, and on the other side, there are the never-ending waters and the hills.",
    },
    {
      imageUrl: "assets/images/slider-3.jpg",
      imageWelcome: "assets/images/namas.png",
      header: ["WELCOME", "TO", "TRAVEL" ,"MERA" ,"DESH"],
      subHeader: "MAKE Y0UR DREAM TRUE",
      longDesc: "Sun and beach tourism refers to holidays taken for the purpose of staying in or near beaches. The most common activity for Indian on a beach holiday is relaxing,which means they go sunbathing, swim, picnic and play on the beach. For many young people,beach holidays also includes partying and clubbing.",
    },
    {
      imageUrl: "assets/images/slider-4.jpg",
      imageWelcome: "assets/images/namas.png",
      header: ["WELCOME", "TO", "TRAVEL" ,"MERA" ,"DESH"],
      subHeader: "MAKE Y0UR DREAM TRUE",
      longDesc: "Popularly renowned as the land of Sun, Sea and Sand, Goa has some of the most spectacular and fun beaches. The place is not only the most popular beach destination of India but one of the most famous beach destinations in the world as well. It has a coastline of around 103 km lapped by the Arabian Sea.",
    },
    {
      imageUrl: "assets/images/slider-1.jpg",
      imageWelcome: "assets/images/namas.png",
      header: ["WELCOME", "TO", "TRAVEL" ,"MERA" ,"DESH"],
      subHeader: "MAKE Y0UR DREAM TRUE",
      longDesc: "Cultural tourism experiences include architectural and archaeological treasures, culinary activities, festivals or events, historic or heritage, sites, monuments and landmarks, museums and exhibitions, national parks and wildlife sanctuaries,religious venues,temples and churches.",
    },
    {
      imageUrl: "assets/images/slider-6.jpg",
      imageWelcome: "assets/images/namas.png",
      header: ["WELCOME", "TO", "TRAVEL" ,"MERA" ,"DESH"],
      subHeader: "MAKE Y0UR DREAM TRUE",
      longDesc: "India is known for its rich cultural heritage and an element of mysticism, which is why tourists come to India to experience it for themselves. The various fairs and festivals that tourists can visit in India are the Pushkar fair (Rajasthan),Taj Mahotsav (Uttar Pradesh), and Suraj Kund mela (Haryana).",
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
