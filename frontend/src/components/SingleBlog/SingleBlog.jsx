import {useState,useEffect} from "react";
import {useParams,Link} from 'react-router-dom';
import styles from './SingleBlog.module.css';
import Home from '../Icons/Home.svg';
export const SingleBlog = () =>{
    const {id} = useParams();
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    useEffect(()=>{
      const getData = async()=>{
        try{
          let data = await fetch(`http://localhost:7448/blog/single/${id}`)
          data = await data.json();
          setData(data);
          setLoading(false);
        }catch(err){
          setError(true);
        }
      }
      getData();
    },[id])

    return(
        <div className={styles.mainContainer}>
            {loading?<h1>Loading...</h1>:error?<h1>Error...</h1>:<>
            <div><h1 className={styles.title}>{data.title}</h1></div>
            <div className={styles.desBox}>{data.description}</div>
            </>}
            <Link to="/">
            <div className={styles.home}><img src={Home} alt="" /></div>
            </Link>
        </div>
    )
}