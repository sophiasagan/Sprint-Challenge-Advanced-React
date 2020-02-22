import React, { useEffect } from "react";

function PlayerData(props) {
  const { data } = props;
  useEffect(() => {
    console.log("coming from PlayerData.js", data);
  }, [data]);

  return (
    <div className="card-container">
      {props.data.map(data => (
        <div key={data.id} className="person-card">
          <h1>Name: {data.name}</h1>
          <p>Country: {data.country}</p>
          <p>Searches: {data.searches}</p>
        </div>
      ))}
    </div>
  );
}

export default PlayerData;