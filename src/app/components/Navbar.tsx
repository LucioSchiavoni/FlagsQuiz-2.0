"use client"
import Link from 'next/link'
import { signIn, useSession, signOut } from "next-auth/react"
import Image from 'next/image'


const Navbar = () => {


    const {data: session, status} = useSession()

  return (
    <nav className="flex justify-between backdrop-blur-3xl  px-4 py-3">
       <div className='flex gap-2 items-center'>
        <img src='/assets/quiz-flag.png'
         alt='logo' 
        className=' rounded-full'
        width={40}
        height={40}
        />
       
        </div> 
        
{
    status === 'loading' ?
    (
        <div className='flex items-center justify-center gap-2'>
            
            <p>Cargando...</p>
        </div>
    ) : 
    (
    <>
    {
    session?.user ? 
    <div className='flex gap-x-2'>
        <p className='font-semibold flex  items-center text-white'>{session.user.name}</p>
        {
            session.user.image && (
                    <img 
        src={session.user.image} 
        alt="image-profile" 
        className='rounded-full w-10'
        /> 
        )
        }
        <button className='px-2.5 py-2 bg-white rounded-md text-black' onClick={ async() => await signOut({
            callbackUrl: "/",

        })}>S</button>
    
    </div> 
    : 
    <div className='hidden'>
    <button onClick={()=>  signIn()} className='bg-white px-3 py-1 text-blue-600 rounded-md '>Iniciar sesion</button>
        </div>
}
    </> 
    )

}

        
    </nav>
  )
}

export default Navbar