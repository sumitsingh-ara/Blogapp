import styles from "./BlogPost.module.css";
import Home from "../Icons/Home.svg";
import PublishBlog from "../Icons/PublishBlog.svg";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


export const BlogPost = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [title, setTitle] = useState("");


  const makePostCall = () => {
    if(!title.trim() || !data.trim())return alert("Title or description is empty");
    let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

let raw = JSON.stringify({
  "title": title,
  "description": data
});

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:7448/blog/addblog", requestOptions)
  .then(response => response.text())
  .then((res)=>{
    navigate(-1);
  })
  .catch(error => alert('error', error.message));
  }
  return (
    <div>
      <Link to="/">
        <div className={styles.home}>
          <img src={Home} alt="" />
        </div>
      </Link>
      <div style={{cursor: 'pointer'}} onClick={makePostCall} className={styles.publish}>
        <img src={PublishBlog} alt="" />
      </div>
      {/* Editor below */}
      <div className={styles.inputBox}>
        <div className={styles.inputTitle}>
          <div>
            <label>Enter Title</label>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
            />
          </div>
        </div>
        <CKEditor
          editor={ClassicEditor}
          config={{
            plugins: ["Paragraph", "Bold", "Italic", "Essentials"],
            toolbar: [
              "bold",
              "italic",
              "link",
              "undo",
              "redo",
              "numberedList",
              "bulletedList",
            ],
          }}
          data={data}
          onChange={(event, editor) => {
            const data = editor.getData();
            setData(data);
          }}
        />
      </div>

    </div>
  );
};
