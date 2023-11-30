"use client"
// import { getItemsBySubregion } from "@/app/utils/getItemsBySubregion"
import { getItems } from "@/app/utils/getItems"
import {useState, useEffect} from 'react'
import Flag from "@/app/api/FlagInterface"
import Loading from "../loading/Loading"
import LayoutLink from "@/app/layout/LayoutLink"


const EuropeItem: React.FC = () => {
    const [points, setPoints] = useState<number>(0);
    const [flagName, setFlagName] = useState<string>('')
    const [item, setItem] = useState<Flag[]>([])
    const [selectedFlag, setSelectedFlag] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true)

    const handleFlagSelection = (selectedFlagName: string) => {
        
        if(selectedFlagName === flagName){
            setPoints(points + 1)
    setSelectedFlag(selectedFlagName)
        }else{

        // logica para guardar record si es que lo hay
        //y redireccion a una alerta o algo
            setPoints(0)
        }
       
        setSelectedFlag(selectedFlagName);
         getItems('Europe', setFlagName, setItem, setLoading)
    }

useEffect(()=> {
 getItems('Europe', setFlagName, setItem, setLoading)
},[])
    
   console.log(item)
  return (
    <div className=" flex flex-col items-center justify-center ">
      <div className="absolute top-5 left-5">
            <LayoutLink/>
        </div>
    <p className="bg-white px-3 py-1 ring-2 ring-blue-600 font-semibold rounded-md mb-10 mt-32">Record: {points}</p>

    <p className="text-3xl font-serif font-semibold">{flagName}</p>
    <div className="grid grid-cols-2 gap-5 p-4" >
        {

            loading ? (
             <Loading/>
            )
            :
            item.map((item, index) => (
                <div key={index}>
                <button onClick={()=> handleFlagSelection(item.translations?.spa?.common || '')}>
                
                <img
                src={item.flags?.png || ''}
                alt="flag-foto"
                className="m-auto h-24 shadow-lg w-64 shadow-black"
                />
                    </button>
                </div>
            ))
        }
    </div> 
    </div>
  )
}

export default EuropeItem