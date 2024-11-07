import React from "react";

import StudentCard from "./Components/Card";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 py-10 ">
      <StudentCard name="izzah" rollNumber="007821" Day="Monday" imgSrc = "/pic01.png" /> <br></br>
      <StudentCard name="fatima" rollNumber="002873" Day="Tuesday" imgSrc="/pic02.png" /> <br></br>
      <StudentCard name="Alveena" rollNumber="002717" Day="Wednesday"  imgSrc= "/pic03.png" />

    </div>
  );
}




  
