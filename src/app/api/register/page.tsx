import LayoutLink from '@/app/layout/LayoutLink';
import React from 'react'

const Registerpage = () => {
  return (
    <div className='flex items-center justify-center '>

        <div className='absolute top-5 left-5'>
            <LayoutLink/>
        </div>
        <form action="" className='mt-24 bg-white p-8 rounded-md'>
            <p className='text-center text-2xl font-semibold mb-4'>Registrate</p>
        <div className='flex flex-col gap-2 mb-5'>
            <label htmlFor="" className='font-semibold'>Nombre de usuario:</label>
            <input type="text" className='ring-2 ring-blue-600 rounded-md focus:outline-none px-3 py-1 bg-gray-100' />
        </div>
        <div className='flex flex-col gap-2 mb-5'>
        <label htmlFor="" className='font-semibold'>Contraseña:</label>
        <input type="text" className='ring-2 ring-blue-600 rounded-md focus:outline-none px-3 py-1 bg-gray-100'/>
        </div>

            <button type='submit' className='px-3 py-1 rounded-md bg-blue-600 text-white font-semibold shadow-xl '>Registrarse</button>
        </form>
    </div>
  )
}

export default Registerpage;