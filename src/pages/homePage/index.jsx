import React from 'react'
import "./index.css"
import BlogCard from '../../components/BlogCard'
import { data } from '../../api/dummyData'
import {Wave} from "../../components/wave"
function HomePage() {
  return (
    <div className="homeContainer">
      
<div className="banner">
  {/* <img src="https://imagekit.io/blog/content/images/2020/05/Cloudflare-01--1-.png" alt="" /> */}
<Wave/>

</div>
<div className="recentBlog">
{
  data.post.map((data)=>(
    <BlogCard data = {data}/>
  ))
}
</div>
<div className="category">

</div>
<div className="mostLike">

</div>
      
      
      </div>
  )
}

export default HomePage