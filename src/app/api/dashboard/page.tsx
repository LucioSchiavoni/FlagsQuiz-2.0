
import Link from 'next/link';

const DashboardPage = () => {



  return (
    <div className='flex flex-col gap-10 mt-32 text-4xl font-semibold text-white justify-center items-center ' >
      <Link href='/api/region' className='bg-blue-500 px-3 py-1 rounded-md'>Jugar por continentes</Link>
        <Link href='/api/categories/global' className='bg-blue-500 px-3 py-1 rounded-md'>Modo experto</Link>
        
    </div>
  )
}

export default DashboardPage;