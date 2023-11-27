"use client"
import React, { useEffect, useState } from 'react';
import { shuffle } from 'lodash';
import axios from 'axios';


interface Flag {
  translations?: {
    spa?: {
      common?: string;
    };
  };
  flags?: {
    png?: string;
  };
}

const CardItem: React.FC = () => {
  const [item, setItem] = useState<Flag[]>([]);
  const [flagName, setFlagName] = useState<string>('');
  const [points, setPoints] = useState<number>(0);
  const [selectedFlag, setSelectedFlag] = useState<string | null>(null);

  useEffect(() => {
    getItems();
  }, []);

//    Usar Image de next y no img para menor carga

  const getItems = async () => {
    try {
      const res = await axios.get<Flag[]>('https://restcountries.com/v3.1/all');
      const allFlags = res.data;

     
      const shuffledFlags = shuffle(allFlags);

      const selectedFlags = shuffledFlags.slice(0, 4);

  
      const randomFlagIndex = Math.floor(Math.random() * selectedFlags.length);
      const randomFlagName = selectedFlags[randomFlagIndex].translations?.spa?.common || '';

      setFlagName(randomFlagName);
      setItem(selectedFlags);
    } catch (error) {
      console.error(error);
    }
  };


  const handleFlagSelection = (selectedFlagName: string) => {
    if (selectedFlagName === flagName) {
      setPoints(points + 1);
    } else {
    console.log(points)

    //aqui el mutation de graphql con value: points

    setPoints(0)  
       
    }
    setSelectedFlag(selectedFlagName);
    getItems();
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
