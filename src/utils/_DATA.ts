// images
import GatheringImg from '../assets/homepage/family-gathering-mobile.jpg'
import GatheringImgTab from '../assets/homepage/family-gathering-tablet.jpg'
import GatheringImgDt from '../assets/homepage/family-gathering-desktop.jpg'
import specialEventsImg from '../assets/homepage/special-events-mobile.jpg'
import specialEventsImgTab from '../assets/homepage/special-events-tablet.jpg'
import specialEventsImgDt from '../assets/homepage/special-events-desktop.jpg'
import socialEventsImg from '../assets/homepage/social-events-mobile.jpg'
import socialEventsImgTab from '../assets/homepage/social-events-tablet.jpg'
import socialEventsImgDt from '../assets/homepage/social-events-desktop.jpg'
import { IMenuItemData } from '../interfaces/index.interface'

import gavarImgForMenu from './../assets/homepage/gavar-desktop-tablet@2x.png'
import ladduImgForMenu from './../assets/homepage/laddu-desktop-tablet@2x.png'
import pumkinImgForMenu from './../assets/homepage/pumkin-desktop-tablet@2x.png'
import papadImgForMenu from './../assets/homepage/papad-desktop-tablet.png'
import dalRiceImgForMenu from './../assets/homepage/dal_rice-desktop-tablet@2x.png'

// Static data for events section
export const eventsData = [
   {
      name: 'Gathering',
      paragraph:
         'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
      img: [GatheringImg, GatheringImgTab, GatheringImgDt],
   },
   {
      name: 'Special Events',
      paragraph:
         'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
      img: [specialEventsImg, specialEventsImgTab, specialEventsImgDt],
   },
   {
      name: 'Social Events',
      paragraph:
         'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
      img: [socialEventsImg, socialEventsImgTab, socialEventsImgDt],
   },
]

export const menuItemsData: IMenuItemData[] = [
   {
      id: 1,
      name: 'Crunchy Okra Delight',
      category: 'Snacks',
      imgSrc: gavarImgForMenu,
      price: 99.0,
      paragraph:
         'Treat yourself to our Crunchy Okra Delight, a crispy twist on a beloved Indian classic. Enjoy the golden-brown goodness of thinly sliced okra, fried to perfection for a satisfying crunch in every bite. Bursting with flavor, our okra is seasoned with a special mix of spices, balancing savory and tangy tastes. Served with fresh veggies, this dish promises a delightful dining experience, bringing you the best of Indian cuisine with love.',
      modelGlbUrl:
         'https://cdn.glitch.global/5767c9cd-c490-463b-851a-d7521d46400c/fried_gavar.glb?v=1707632846462',
      modelUsdzUrl:
         'https://cdn.glitch.global/5767c9cd-c490-463b-851a-d7521d46400c/fried_gavar.usdz?v=1707632856510',
   },
   {
      id: 2,
      name: 'Motichur Ludo Delight',
      category: 'Desert',
      imgSrc: ladduImgForMenu,
      price: 59.99,
      paragraph:
         'Indulge in our delightful Motichur Ludo, a playful twist on a traditional favorite. Enjoy two delectable servings of motichur ladoo, each crafted to perfection with fine chickpea flour, ghee, and aromatic spices. These sweet treats are adorned with edible pearls, adding a touch of elegance to every bite. Perfect for sharing or savoring solo, our Motichur Ludo promises a nostalgic journey through the flavors of India, bringing joy and sweetness to your dining experience.',
      modelGlbUrl:
         'https://cdn.glitch.global/5767c9cd-c490-463b-851a-d7521d46400c/laddu.glb?v=1707632715921',
      modelUsdzUrl:
         'https://cdn.glitch.global/5767c9cd-c490-463b-851a-d7521d46400c/laddu.usdz?v=1707632719601',
   },
   {
      id: 3,
      name: 'Crowned Pumpkin Mix',
      category: 'main',
      imgSrc: pumkinImgForMenu,
      price: 23.99,
      paragraph:
         'Treat yourself to our Coriander Crowned Pumpkin Mix—a delightful blend of autumn flavors. Dive into tender pumpkin chunks, infused with aromatic spices that dance on your tongue with every bite. Topped with fresh coriander for a burst of freshness and beauty, this dish is a feast for both your taste buds and your eyes. Immerse yourself in the rich flavors of the season and let this dish take you on a culinary journey of pure delight.',
      modelGlbUrl:
         'https://cdn.glitch.global/5767c9cd-c490-463b-851a-d7521d46400c/pumkin.glb?v=1707632839047',
      modelUsdzUrl:
         'https://cdn.glitch.global/5767c9cd-c490-463b-851a-d7521d46400c/pumkin.usdz?v=1707632842626',
   },
   {
      id: 4,
      name: 'Crunchy Papad Platter',
      category: 'Starter',
      imgSrc: papadImgForMenu,
      price: 29.99,
      paragraph:
         'Enjoy our Crunchy Papad Platter, featuring thin, crispy papads served with a variety of zesty chutneys. Perfect as a savory appetizer or accompaniment to your meal, this dish adds a delightful crunch to your dining experience.',
      modelGlbUrl:
         'https://cdn.glitch.me/5767c9cd-c490-463b-851a-d7521d46400c/papad.glb?v=1707632746301',
      modelUsdzUrl:
         'https://cdn.glitch.me/5767c9cd-c490-463b-851a-d7521d46400c/papad.usdz?v=1707632837732',
   },
   {
      id: 5,
      name: 'Rice & Dal Harmony',
      category: 'Main',
      imgSrc: dalRiceImgForMenu,
      price: 199.99,
      paragraph:
         'Indulge in our comforting Dal & Rice Delight, a wholesome combination of aromatic basmati rice and flavorful lentils, simmered to perfection. Topped with sautéed onions and fresh coriander, this hearty dish offers a symphony of textures and tastes that will warm your soul with every bite. Experience the true essence of comfort food with this classic Indian favorite, crafted with love and care to delight your senses.',
      modelGlbUrl:
         'https://cdn.glitch.me/5767c9cd-c490-463b-851a-d7521d46400c/dal_rice.glb?v=1707638141994',
      modelUsdzUrl:
         'https://cdn.glitch.me/5767c9cd-c490-463b-851a-d7521d46400c/dal_rice.usdz?v=1707638090839',
   },
]
