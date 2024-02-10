import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { menuItemsData } from '../utils/_DATA'
import backgroundImage from '../assets/homepage/ar-background.jpg';

const DetailItemPage: FC = () => {
   const { id } = useParams<{ id: string }>()
   const isMobile = window.innerWidth < 768
   const item = menuItemsData.find(each => each.id === parseInt(id!))

   return (
      <section className="text-gray-600 body-font" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}>
         <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" >
            <div className="bg-primary-codGray p-0.5 mb-8 md:mb-0">
               <model-viewer
                  src={item?.modelGlbUrl}
                  ios-src={item?.modelUsdzUrl}
                  alt="A 3D model of an astronaut"
                  style={{
                     width: isMobile ? '380px' : '540px',
                     height: isMobile ? '250px' : '400px',
                     backgroundColor: 'white',
                  }}
                  min-camera-orbit="auto 0deg auto"
                  max-camera-orbit="auto 69deg auto"
                  ar
                  camera-controls></model-viewer>
            </div>

            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
               <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  {item?.name}
               </h1>
               <p className="mb-8 leading-relaxed">{item?.paragraph}</p>
            </div>
         </div>
      </section>
   )
}

export default DetailItemPage
