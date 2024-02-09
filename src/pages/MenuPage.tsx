import { FC } from 'react'
import { menuItemsData } from '../utils/_DATA'
import MenuItem from '../components/menu/MenuItem'

// import Button from './Buttons'
// import Parallax from './Parallax'

import { Link } from 'react-router-dom'
// Import your background image
import backgroundImage from '../assets/homepage/menu-bg-tablet@2x.jpg';

const MunuPage: FC = () => {
   return (
      <section className="text-gray-600 body-font" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}>
         <img src="../assets/homepage/beef-mobile@2x.jpg" alt=""/>
         <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
            {/* <img src="src\assets\homepage\beef-mobile@2x.jpg" alt=""/> */}
               <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  Our Menu
               </h1>
               <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Whatever cardigan tote bag tumblr hexagon brooklyn
                  asymmetrical gentrify, subway tile poke farm-to-table. Franzen
                  you probably haven't heard of them.
               </p>
            </div>
            <div className="flex flex-wrap -m-2">
               {menuItemsData.map(each => {
                  return (
                     <MenuItem
                        key={each.id}
                        id={each.id}
                        name={each.name}
                        category={each.category}
                        imgSrc={each.imgSrc}
                        price={each.price}
                        paragraph={each.paragraph}
                        modelGlbUrl={each.modelGlbUrl}
                        modelUsdzUrl={each.modelUsdzUrl}
                     />
                     // <Link key={each.name} to={`/menu/${each.name}`}>
                     // </Link>
                  )
               })}
            </div>
         </div>
      </section>
   )
}

export default MunuPage
