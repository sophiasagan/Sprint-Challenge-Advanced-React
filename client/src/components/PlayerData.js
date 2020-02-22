import React, { useEffect } from "react";

function PlayerData(props) {
  const { data } = props;


  return (
    <div className="card-container">
      {data.map(data => (
        <div key={data.id} className="person-card">
          <h1>{data.name}</h1>
          <p>Country: {data.country}</p>
          <p>Google Searches: {data.searches}</p>
        </div>
      ))}
    </div>
  );
}

export default PlayerData;