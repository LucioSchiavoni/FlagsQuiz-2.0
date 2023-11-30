"use client"
import { useState } from 'react';
import { shuffle } from 'lodash';
import axios from 'axios';
import Flag from '../api/FlagInterface';



const CardItem: React.FC = () => {
  const [item, setItem] = useState<Flag[]>([]);
  const [flagName, setFlagName] = useState<string>('');
  const [points, setPoints] = useState<number>(0);
  const [selectedFlag, setSelectedFlag] = useState<string | null>(null);


//    Usar Image de next y no img para menor carga




  const handleFlagSelection = (selectedFlagName: string) => {
    if (selectedFlagName === flagName) {
      setPoints((prevPoints) => prevPoints + 1);
    } else {
    console.log(points)

    //aqui el mutation de graphql con value: points
    //  try {
    //     await axios.post('URL_DEL_BACKEND', { points });
    //   } catch (error) {
    //     console.error('Error al enviar los puntos al backend', error);
    //   }

      //  try {
      //   // Consulta para obtener el puntaje actual
      //   const response = await axios.get('URL_DEL_BACKEND');
      //   const currentPoints = response.data.points;

      //   // Verifica si el nuevo puntaje es mayor antes de actualizar
      //   if (points > currentPoints) {
      //     // Realiza la mutación de GraphQL con value: points
      //     await axios.post('URL_DEL_BACKEND', { points });
      //   }
      
      // } catch (error) {
      //   console.error('Error al consultar o enviar los puntos al backend', error);
      // }

    setPoints(0)  
       
    }
    setSelectedFlag(selectedFlagName);
    
  };
  

  return (
    <>
 
    <div className='w-full flex flex-col'>
         <p className="bg-white w-28 shadow-xl border  ring-2 ring-blue-700 rounded-md px-1 font-semibold ">Aciertos: {points}</p>
      <div className=" mt-8 backdrop-blur-sm p-2">
        <p className="text-center text-4xl font-bold font-serif ">{flagName}</p>
        <div className="grid grid-cols-2 gap-5 mt-10 ">
          {item.map((flag) => (
            <div key={flag.translations?.spa?.common}>
              <button
                className="focus:bg-gray-200 "
                onClick={() => handleFlagSelection(flag.translations?.spa?.common || '')}
              >
                <img
                  src={flag.flags?.png || ''}
                  alt="flag-foto"
                  className="m-auto h-24 shadow-lg w-64 shadow-black"
                />
              </button>
            </div>
          ))}
        </div>
      </div> 
    </div>
    
    </>
  );
};

export default CardItem;
