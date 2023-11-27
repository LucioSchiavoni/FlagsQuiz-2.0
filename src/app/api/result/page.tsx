import Link from 'next/link'
const ResultPage = () => {




  return (
    <div className=''>
        <Link href='/dashboard' className='absolute top-24 left-10 p-4 bg-blue-800 text-white font-semibold rounded-md'>Reintentar</Link>
        <p>Perdiste!!</p>
    </div>
  )
}

export default ResultPage