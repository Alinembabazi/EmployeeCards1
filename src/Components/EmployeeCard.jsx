// import React, { useRef } from "react";
// import html2canvas from "html2canvas";

// const EmployeeCard = ({ user }) => {
//   const { id, name, email, phone, website, company } = user;

//   const cardRef = useRef(null);

//   const handlePrintCard = () => {
//     window.print();
//   };

//   const handleDownloadCard = async () => {
//     const canvas = await html2canvas(cardRef.current);
//     const image = canvas.toDataURL("image/png");

//     const link = document.createElement("a");
//     link.href = image;
//     link.download = `${name}-employee-card.png`;
//     link.click();
//   };

//   return (
//     <div ref={cardRef} className="employee-card border p-4 rounded shadow bg-white">
      
//       <div className="card-header">
//         <span className="id-badge font-bold text-blue-600">#{id}</span>
//         <h3 className="text-lg font-semibold">{name}</h3>
//       </div>

//       <div className="card-body mt-2">
//         <p><strong>Email:</strong> {email}</p>

//         <p><strong>Phone:</strong> {phone}</p>

//         <p>
//           <strong>Website:</strong>{" "}
//           <a href={`http://${website}`} target="_blank" rel="noreferrer" className="text-blue-500">
//             {website}
//           </a>
//         </p>

//         <p><strong>Company:</strong> {company.name}</p>
//       </div>

//       <div className="flex justify-between mt-4">
//         <div className="card-actions">
//           <button onClick={handlePrintCard} className="bg-blue-500 text-white px-3 py-1 rounded">
//             Print Card
//           </button>
//         </div>

//         <div className="card-actions">
//           <button onClick={handleDownloadCard} className="bg-green-500 text-white px-3 py-1 rounded">
//             Download Card
//           </button>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default EmployeeCard;

import React, { useRef } from "react";
import html2canvas from "html2canvas";

const EmployeeCard = ({ user }) => {
  const { id, name, email, phone, website, company } = user;

  const cardRef = useRef(null);

  const handlePrintCard = () => {
    window.print();
  };

  const handleDownloadCard = async () => {
    const canvas = await html2canvas(cardRef.current);
    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = `${name}-employee-card.png`;
    link.click();
  };

  return (
    <div ref={cardRef} className="employee-card border p-4 rounded shadow bg-white">
      
      <div className="card-header">
        <span className="id-badge font-bold text-blue-600">#{id}</span>
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>

      <div className="card-body mt-2">
        <p><strong>Email:</strong> {email}</p>

        <p><strong>Phone:</strong> {phone}</p>

        <p>
          <strong>Website:</strong>{" "}
          <a href={`http://${website}`} target="_blank" rel="noreferrer" className="text-blue-500">
            {website}
          </a>
        </p>

        <p><strong>Company:</strong> {company.name}</p>
      </div>

      <div className="flex justify-between mt-4">
        <div className="card-actions">
          <button onClick={handlePrintCard} className="bg-blue-500 text-white px-3 py-1 rounded">
            Print Card
          </button>
        </div>

        <div className="card-actions">
          <button onClick={handleDownloadCard} className="bg-green-500 text-white px-3 py-1 rounded">
            Download Card
          </button>
        </div>
      </div>

    </div>
  );
};

export default EmployeeCard;