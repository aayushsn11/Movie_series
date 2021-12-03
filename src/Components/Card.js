import React from "react";

function Card({ url, title }) {
  return (
    <div class="ui card">
      <div class="image">
        <img alt="img" src={url} />
      </div>
      <div class="content">
        <p class="header">{title}</p>
      </div>
    </div>
  );
}

export default Card;
