import React from "react";

function Department() {
    const Departments = [
        "pharmacy",
        "Casualty/Emergency",
        "Neonatual Unit",
        "Dietetice",
        "Hematologyl",
        "oncology",
        "Physiotherapy",
        "pathology",
        "Critic Care",
        "cardiology",
    ]
  return (
    <div className=" border-2 border-zinc-300 mt-10 " >
      <table className=" w-full pt-10   shadow-xl ">
        <thead>
          <tr>
            <th className="font-bold bg-blue-200 border-b-2 border-zinc-300  p-3 text-lg">DepartMent</th>
          </tr>
        </thead>
        
        <tbody >
            {
                Departments.map((department)=>(
                   <tr className="shadow hover:bg-yellow-500  ">
                    <td className=" px-5  font-semibold text-lg py-3">{department}</td>
                   </tr>
          
                ))
            }
         

        </tbody>
      </table>
    </div>
  );
}

export default Department;
