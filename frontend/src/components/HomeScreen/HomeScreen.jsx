import NewBlog from '../Icons/NewBlog.svg'
import styles from './HomeScreen.module.css';
import {Link} from 'react-router-dom';
import {BlogPost} from './BlogPost';
import {useState,useEffect} from "react";
export const HomeScreen = () => {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);
  useEffect(()=>{
    const getData = async()=>{
      try{
        let data = await fetch('http://localhost:7448/blog/allblogs')
        data = await data.json();
        setData(data);
        setLoading(false);
      }catch(err){
        setError(true);
      }
    }
    getData();
  },[])
  return <div className={styles.mainContainer}>
    {loading?<h1>Loading...</h1>:error?<h1>Error...</h1>:<>
    {data.map((item)=>{
      return <BlogPost key={item._id} item={item}/>
    })}
    </>}    
    <Link to='/newBlog'><div className={styles.blogAdd}><img src={NewBlog} alt="" /></div></Link>
  </div>;
};
