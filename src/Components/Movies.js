import React from "react";
import Card from "./Card";

function Movies({ data }) {
  return (
    <div>
      <div className="ui grid container">
        {data.map((item) => {
          return (
            <div className="four wide column">
              <Card
                url={item.images["Poster Art"].url}
                key={item.title}
                title={item.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Movies;
