import axios from "axios";
import Flag from "../api/FlagInterface";
import { shuffle } from "lodash";


export const getItems = async (
    region: string,
    setFlagName: React.Dispatch<React.SetStateAction<string>>,
    setItem: React.Dispatch<React.SetStateAction<Flag[]>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
        
    try {
        setLoading(true)
        const res = await axios.get<Flag[]>('https://restcountries.com/v3.1/all')
        const dataFlags = res.data

        const filteredFlags = dataFlags.filter((flag) => flag.region === region);

        const shuffleFlags = shuffle(filteredFlags)

        const selectedFlags = shuffleFlags.slice(0, 4);

        const randomFlagIndex = Math.floor(Math.random() * selectedFlags.length);
        const randomFlagName = selectedFlags[randomFlagIndex].translations?.spa?.common || '';

        setFlagName(randomFlagName)
        setItem(selectedFlags)
        console.log(dataFlags)
    } catch (error) {
        console.log(error)
    } finally{
        setLoading(false)
    }
}