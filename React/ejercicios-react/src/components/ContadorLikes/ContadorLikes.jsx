import React, { useState } from 'react';
import "./ContadorLikes.css";


const ContadorLikes = (props) => {
    const likes = 0;
    const dislikes = 0;

    const [likesCounter, setLikesCounter] = useState(likes);
    const [dislikesCounter, setDislikesCounter] = useState(dislikes);

const increaseLikes = () => {
    setLikesCounter(likesCounter + 1);
}

const increaseDislikes = () => {
    setDislikesCounter(dislikesCounter + 1);
}

  return (
    <div className='contador_likes_alerta'>
      <h2>{props.children}</h2>
      <div className='likes'>
        <p>Likes: {likesCounter}</p>
        <button onClick={increaseLikes}>Like</button>
      </div>
      <div className='dislikes'>
        <p>Dislikes: {dislikesCounter}</p>
        <button onClick={increaseDislikes}>Dislike</button>
      </div>
    </div>
  )
}

export default ContadorLikes;
