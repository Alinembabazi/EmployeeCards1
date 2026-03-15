
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

const EmployeeCard = ({ user, extraButtons }) => {
  const { id, name, email, phone, website, company } = user;
  const cardRef = useRef();

  // Function to download the card as PNG
  const handleDownload = async () => {
    const confirmDownload = window.confirm(
      "Are you sure you want to download this employee card?"
    );
    if (!confirmDownload) return;

    try {
      const canvas = await html2canvas(cardRef.current, { scale: 2, useCORS: true });
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = `${name}-employee-card.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      alert("Card downloaded successfully!");
    } catch (error) {
      alert("Download failed. Please try again.");
      console.error(error);
    }
  };

  // Function to print the card
  const handlePrint = () => {
    window.print();
  };

  // Merge default buttons with any extra dynamic buttons
  const buttons = [
    { label: "Print Card", action: handlePrint, color: "bg-blue-500 text-white" },
    { label: "Download Card", action: handleDownload, color: "bg-green-500 text-white" },
    ...(extraButtons || []),
  ];

  return (
    <div ref={cardRef} className="bg-white border rounded-lg shadow-md p-5 w-80">
      {/* Header */}
      <div className="mb-3">
        <span className="text-blue-600 font-bold">#{id}</span>
        <h2 className="text-lg font-semibold">{name}</h2>
      </div>

      {/* Body */}
      <div className="text-sm space-y-2">
        <p>
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {phone}
        </p>
        <p>
          <span className="font-semibold">Website:</span>{" "}
          <a href={`http://${website}`} target="_blank" rel="noreferrer" className="text-blue-500">
            {website}
          </a>
        </p>
        <p>
          <span className="font-semibold">Company:</span> {company?.name}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            onClick={btn.action}
            className={`px-3 py-1 rounded ${btn.color || "bg-gray-500 text-white"} hover:opacity-80`}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmployeeCard;

