import { FC } from 'react'
import { IMenuItemData } from '../../interfaces/index.interface'
import { Link } from 'react-router-dom'

const MenuItem: FC<IMenuItemData> = ({ id, name, category, imgSrc, price }) => {
   return (
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
         <Link to={`/menu/${id}`}>
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
               <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={imgSrc}
               />
               <div className="flex-grow">
                  <h3 className="text-gray-900 title-font font-medium">
                     {name}
                  </h3>
                  <p className="text-gray-500 text-base">
                     {category} -{' '}
                     <span className="font-semibold">₹{price}</span>
                  </p>
               </div>
            </div>
         </Link>
      </div>
   )
}

export default MenuItem
