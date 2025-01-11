import React from "react";

export const ForgetPassword = ({onClose }) => {
  return (
    <>
      <div className="FG-backdrop">
        <div className="FG-modal">
            <div>
                <p onClick={onClose}>&times;</p>
            </div>
        </div>
      </div>
    </>
  );
};
