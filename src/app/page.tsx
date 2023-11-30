"use client"
import Image from 'next/image'
import { useSession } from "next-auth/react"
import DashboardPage from './api/dashboard/page'
import { signIn} from "next-auth/react"


export default function Home() {

    const {data: session, status} = useSession()

  return (
    <main className="flex flex-col items-center  ">
     
      {
        status === "loading" ?
        <div className='pt-24 font-semibold text-xl'><p>Cargando...</p></div>
        :
        session?.user ? (
           <DashboardPage/>
        )
        :
        (
          <>
          <div className='flex flex-col justify-center items-center pt-24 gap-5'>
          <img src="/assets/quiz-flag.png" 
          alt="logo"
          width={120}
          height={120}
          />
           
            <h1 className='text-3xl  text-blue-700 font-bold'>Flags Quiz</h1>
            <p className='text-md font-semibold'>Ingresa a tu cuenta y juega</p>
            <button onClick={()=> signIn()} className='w-56 text-2xl font-semibold rounded-md bg-blue-600 text-white pb-1 '>Ingresar con google</button>
                  <button  className='w-56 text-2xl font-semibold rounded-md bg-blue-600 text-white pb-1 '>Iniciar sesion</button>
          </div>
           <footer className='absolute bottom-2 font-semibold text-sm'>
        <span>By Lucio Schiavoni</span>
      </footer>
      </>
        ) 
       
      }
     
    </main>
  )
}
