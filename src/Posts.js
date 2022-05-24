import React, { useState } from "react";
const Posts = (props) => {
  let [likes, setLikes] = useState(props.initialLikes || 0);
  let [showComments, setShowComments] = useState(false);

const like = () => {
  setLikes(likes + 1);
};

  return (
    <div className="container">
      <div className="post">
        <h3 className="user-name">{props.name || "user can't be displayed"}</h3>
        <p className="text"> {props.text || "post can't be displayed"}</p>
        <p className="likes">Likes: {likes}</p>
        <div className="buttons">
        <button onClick={like}>Like!</button>
        <div>
          {showComments && <p>Meow!</p>}
          <button
          onClick={()=>{
            setShowComments(!showComments);
          }}
          >
            {showComments ? 'Comments':'Comments'}
          </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Posts;