import styles from "./BlogPost.module.css";
import { Link } from "react-router-dom";
export const BlogPost = ({ item }) => {
  return (
    <div className={styles.blogpostcard}>
      <Link to={`/${item._id}`} style={{ textDecoration: 'none' }}>
        <div className={styles.blogpostcardInside}>
          <h3>{item.title}</h3>
        </div>
      </Link>
    </div>
  );
};
