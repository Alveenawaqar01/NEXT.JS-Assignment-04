import React from "react";

interface Tprops {
  imgSrc: string | undefined;
  name: string;
  rollNumber: string;
  Day:string
}

   
    const Card = (props:Tprops) => {
    return (
      <div className=" rounded-2xl p-5 m-5 bg-lime-100 font-sans w-96 h-30 border-4 border-black shadow-2xl text-justify ">
         <img src={props.imgSrc} className="rounded-full h-32 w-32 mx-auto mb-4" alt="profile" />
      <h1 className="text-black">Name :<span className="text-black font-semibold " > {props.name} </span> </h1>
      <h1 className="text-black">roll Number : <span className="text-black font-semibold">{props.rollNumber}</span></h1>
      <h1 className="text-black">Day : <span className="text-black font-semibold">{props.Day}</span></h1>

</div>


    )
  }

  
  export default Card 


  