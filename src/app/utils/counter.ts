import { Dispatch, SetStateAction } from 'react';
import { getItems } from './getItems';

export const counter = (
 selectedFlagName: string,
  points: number,
  setPoints: Dispatch<SetStateAction<number>>,
  setFlagName: Dispatch<SetStateAction<string>>,
  flagName: string,
  setSelectedFlag: Dispatch<SetStateAction<string>>,
) => {

   
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
    

}

