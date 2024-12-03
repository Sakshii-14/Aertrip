import React from "react";

function Input({ htmlid, handleInputChange }) {
  return (
    <div>
      <label htmlFor={htmlid} className="block capitalize font-semibold text-slate-500">
        {htmlid}:
      </label>
      <input
        type="text"
        id={htmlid}
        className="border rounded-lg p-2"
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
}

export default Input;
