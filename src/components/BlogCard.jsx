import React from "react";

import "./BlogCard.css";
import { Link } from "react-router-dom";
function BlogCard({ data }) {
  return (

    <Link to={data._id}>
    
    <div className="blogCard">
      <div className="image">
        <img
          src="https://imagekit.io/blog/content/images/2020/05/Cloudflare-01--1-.png"
          alt=""
        />
      </div>
      <div className="blogTitle">
        <p>{data.title} </p>
      </div>
      <div className="sortDesc">
        <p>{data.content[0].value}</p>
      </div>

      <div className="date-author">
        <div className="date">{new Date(data.createdAt).toDateString()}</div>
        <div className="author">
          <p>Bappa Bannerjee</p>
        </div>
      </div>

      <div className="tag">
        {data.categories.map((data) => (
          <p>{data}</p>
        ))}
      </div>
    </div>
    </Link>
   
  );
}

export default BlogCard;
