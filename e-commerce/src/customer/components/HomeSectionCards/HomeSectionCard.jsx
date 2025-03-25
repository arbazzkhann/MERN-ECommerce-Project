import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
        
        <div className='h-[13rem] w-[10rem]'>
          <img className='object-cover object-top w-full h-full' src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c530fcc4-84d1-4cdc-8698-cdb03d9eef6b/AIR+JORDAN+4+RM.png" alt="" />
        </div>
        <div className='p-4'>
          <h3 className='text-lg font-medium text-green-900'>Air Jordan 4 RM</h3>
          <p className='mt-2 text-sm text-gray-500'>Men's Shoes</p>
        </div>
    </div>
  )
}

export default HomeSectionCard