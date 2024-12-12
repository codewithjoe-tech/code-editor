import React, { useEffect } from "react";

const Output = ({ output, setOutput }) => {
  useEffect(() => {
    console.log(output.state === 'e');
  }, [output]);

  return (
    <div className="h-full p-5 overflow-auto ">
        
      <pre className={`whitespace-pre-wrap  ${output.state === 'e' ? 'text-red-500' : ''}`}>
        {output.data || "No Output yet"}
      </pre>
    </div>
  );
};

export default Output;
