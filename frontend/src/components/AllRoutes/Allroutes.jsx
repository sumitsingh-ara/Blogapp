import {Routes,Route} from "react-router-dom";
import {HomeScreen} from '../HomeScreen/HomeScreen';
export const Allroutes = () =>{


    return(
        <>
        <Routes>
           <Route path="/" element={<HomeScreen/>}></Route>
        </Routes>
        </>
    )
}