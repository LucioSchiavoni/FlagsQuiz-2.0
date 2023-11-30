import LayoutLink from "@/app/layout/LayoutLink"
import Link from "next/link"

const RegionPage = () => {
  return (
    <div className='flex flex-col gap-10 mt-10 text-4xl font-semibold text-white p-10'>
        <div className="absolute top-5 left-5 text-xl">
            <LayoutLink/>
        </div>
        <p className="text-center text-3xl font-semibold text-black">Selecciona un continente</p>
             <Link href='/api/categories/asia' className='bg-blue-500 px-3 py-1  rounded-md text-center'>Asia</Link>
           <Link href='/api/categories/africa' className='bg-blue-500 px-3 py-1  rounded-md text-center'>Africa</Link>
      <Link href='/api/categories/europe' className='bg-blue-500 px-3 py-1  rounded-md text-center'>Europa</Link>
            <Link href='/api/categories/america' className='bg-blue-500 px-3 py-1  rounded-md text-center'>America</Link>
       <Link href='/api/categories/northAmerica' className='bg-blue-500 px-3 py-1  rounded-md text-center'>Norte America</Link>
      <Link href='/api/categories/southAmerica' className='bg-blue-500 px-3 py-1  rounded-md text-center' >Sud America</Link>
    </div>
  )
}

export default RegionPage