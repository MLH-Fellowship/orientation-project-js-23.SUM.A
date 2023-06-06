import React from "react";
import { useReactToPrint } from "react-to-print";
import ResumeToExport from "./ResumeToExport";

const PrintButton = () => {
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <button onClick={handlePrint}>Print</button>
      <div style={{ display: "none" }}>
        <ResumeToExport ref={componentRef} />
      </div>
    </div>
  );
};

export default PrintButton;
