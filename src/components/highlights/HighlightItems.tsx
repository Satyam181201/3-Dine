import { FC } from 'react'
import HighlightItem from './HighlightItem'
// Images
import gavarImgForMenu from './../../assets/homepage/gavar-desktop-tablet@2x.png'
import ladduImgForMenu from './../../assets/homepage/laddu-desktop-tablet@2x.png'
import pumkinImgForMenu from './../../assets/homepage/pumkin-desktop-tablet@2x.png'

const HighlightItems: FC = () => {
   return (
      <div
         className="mt-14 mx-auto xl:mx-0 max-w-[35.8125rem] xl:max-w-[33.75rem]
         animate animate-fade-in">
         <HighlightItem
            imgSrc={gavarImgForMenu}
            heading="Crunchy Okra Delight"
            paragraph="Crispy okra seasoned with spices, served with fresh veggies for a delightful twist on Indian cuisine."
         />
         <HighlightItem
            imgSrc={ladduImgForMenu}
            heading="Motichur Ludo Delight"
            paragraph="Perfectly crafted motichur ladoos adorned with edible pearls for a sweet taste of nostalgia."
         />
         <HighlightItem
            imgSrc={pumkinImgForMenu}
            heading="Crowned Pumpkin Mix"
            paragraph="Tender pumpkin chunks infused with aromatic spices, topped with fresh coriander for a flavorful autumn treat."
         />
      </div>
   )
}

export default HighlightItems
