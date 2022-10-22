import "./BeerListContainer.css";
// import React from "react";
import SingleBeer from "../SingleBeer/SingleBeer";

const BeerListContainer = ({beerList}) => {
  let selectedBrews = beerList.map((brew) => {
    return (
      <SingleBeer 
        abv={brew.abv}
        ibu={brew.ibu}
        name={brew.name}
        style={brew.style}
      />
    )
  })

  return (
    <div className="tap-listing">
      <h1>What's on Tap</h1>
      {selectedBrews}
    </div>

  ) 


};

export default BeerListContainer;
