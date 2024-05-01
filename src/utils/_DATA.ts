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
      name: 'ITALIAN HERB CHICKEN BRUSCJETTA',
      category: 'Quickies',
      imgSrc: ladduImgForMenu,
      price: 399,
      paragraph:
         "Relish the Italian Herb Chicken Bruschetta, a symphony of flavors where tender chicken, infused with Italian herbs, unites with the crispness of toasted artisan bread. Juicy tomatoes, fresh basil, and a hint of garlic are nestled atop, finished with a drizzle of extra-virgin olive oil and a balsamic glaze that whispers the secrets of the Mediterranean. Each bite is a celebration of tradition and taste, offering a nourishing experience with approximately 310 calories.\n◉ 12g of fat.\n◉ 3.2g of Fiber.\n◉ 18% of Iron.\nThis bruschetta is not just a dish; it's a journey through the heart of Italian cuisine, crafted for those who cherish the elegance of simplicity.",
      modelGlbUrl:
         'https://cdn.glitch.global/5767c9cd-c490-463b-851a-d7521d46400c/Chicken_bread.glb?v=1714461899816',
      modelUsdzUrl:
         https://cdn.glitch.global/5767c9cd-c490-463b-851a-d7521d46400c/Chicken_bread.usdz?v=1714461871192',
   },
   {
      id: 3,
      name: 'FIERY WONTON NACHOS',
      category: 'Quickies',
      imgSrc: pumkinImgForMenu,
      price: 199,
      paragraph:
         "Dive into the Fiery Wonton Nachos, a daring blend of crisp wonton chips, smothered in melted cheese and fiery jalapeños. Each nacho is a crunchy delight, topped with scallions, cilantro, and a creamy avocado crema. This spicy ensemble delivers a satisfying crunch with every bite, offering 630 calories,\n◉ 29g of fat\n◉23% iron.\n It's a perfect fusion of heat and flavor, crafted for those who love their snacks with a kick.",
      modelGlbUrl:
         'https://cdn.glitch.global/5767c9cd-c490-463b-851a-d7521d46400c/Nachos.glb?v=1714462741449',
      modelUsdzUrl:
         'https://cdn.glitch.global/5767c9cd-c490-463b-851a-d7521d46400c/Nachos.usdz?v=1714462866369',
   },
   {
      id: 4,
      name: 'SPAGHETTI POMODORO PASTA',
      category: 'Italian Feast',
      imgSrc: papadImgForMenu,
      price: 299,
      paragraph:
         "Indulge in the timeless elegance of our *Spaghetti Pomodoro Pasta, a quintessential Italian masterpiece. Savor the twirl of spaghetti strands, bathed in a sun-kissed tomato sauce that sings with the essence of ripe tomatoes. Each forkful is a harmony of fresh basil and aromatic garlic, drizzled with a golden thread of **extra-virgin olive oil. Crowned with a sprinkle of aged Parmesan, this dish is a love letter to the simplicity and richness of Italy's culinary tradition. Each serving is a balanced symphony of nutrition, providing approximately 550 calories.\n ◉21g of fat.\n◉ 4.3g of Fiber.\n◉ 19% of Iron.",
      modelGlbUrl:
         'https://cdn.glitch.global/5767c9cd-c490-463b-851a-d7521d46400c/spaghetti.glb?v=1714462266092',
      modelUsdzUrl:
         'https://cdn.glitch.global/5767c9cd-c490-463b-851a-d7521d46400c/spaghetti.usdz?v=1714462104526',
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
