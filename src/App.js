import React from "react";

const Hood = ['Stacy', 'Aditya', 'Pushpendra']

const Niggers = () => {
  return (
    <>
      {Hood.map((naam) => (
        <NiggaText NiggaName={naam} />
      ))}
    </>      
    )
}

const NiggaText = ({NiggaName}) =>{
      return(
        <>
          <h1>Hi {NiggaName}</h1>
        </>
      )
}

export default Niggers