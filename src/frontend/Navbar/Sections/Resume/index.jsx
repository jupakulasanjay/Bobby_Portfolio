import React from "react";

const Resume = () => {
  const handleDownload = () => {
    const fileUrl = `${process.env.PUBLIC_URL}/sanjay_Resume.pdf`;
    const fileName = "sanjay_Resume.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="d-flex flex-column align-items-center resume-container">
      <span className="resume-heading"> Download Resume</span>
      <button
        onClick={handleDownload}
        className="resume-button"
      >
        Download
      </button>
    </div>
  );
};

export default Resume;
