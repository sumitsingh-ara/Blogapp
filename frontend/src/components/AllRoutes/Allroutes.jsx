import {Routes,Route} from "react-router-dom";
import {HomeScreen} from '../HomeScreen/HomeScreen';
import {SingleBlog} from '../SingleBlog/SingleBlog';
export const Allroutes = () =>{
    return(
        <>
        <Routes>
           <Route path="/" element={<HomeScreen/>}></Route>
           <Route path="/:id" element={<SingleBlog/>}></Route>
        </Routes>
        </>
    )
}