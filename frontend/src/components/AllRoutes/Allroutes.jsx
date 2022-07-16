import {Routes,Route} from "react-router-dom";
import {HomeScreen} from '../HomeScreen/HomeScreen';
import {SingleBlog} from '../SingleBlog/SingleBlog';
import {BlogPost} from '../BlogPostScreen/BlogPost';
export const Allroutes = () =>{
    return(
        <>
        <Routes>
           <Route path="/" element={<HomeScreen/>}></Route>
           <Route path="/:id" element={<SingleBlog/>}></Route>
           <Route path="/newBlog" element={<BlogPost/>}></Route>
        </Routes>
        </>
    )
}