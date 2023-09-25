import React from "react";
import "./index.css";
import { data } from "../../api/dummyData";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
function BlogDetails() {
  return (
    <div className="blogContents">
      <div className="blogTitle">{data.post[0].title}</div>

      <div className="author-Date">
        <div className="blogAuthor">
          <img src="https://imagekit.io/blog/content/images/2020/05/Cloudflare-01--1-.png" alt="" />
          {data.post[0].authorName}
          </div>
        <div className="blogdate">{data.post[0].createdAt}</div>
      </div>

      <div className="banner">
        <img
          src="https://imagekit.io/blog/content/images/2020/05/Cloudflare-01--1-.png"
          alt=""
        />
      </div>

      <div className="contents">
        {data.post[0].content.map((data) =>
          data.type === "text" ? (
            <div className="texts">
              <p>{data.value}</p>
            </div>
          ) : (
            <>
              <SyntaxHighlighter language={data.language} style={atomOneDark}>
                {data.value}
              </SyntaxHighlighter>
            </>
          )
        )}
      </div>
    </div>
  );
}

export default BlogDetails;
