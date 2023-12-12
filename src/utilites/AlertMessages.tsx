import React, { useEffect } from "react";

interface CustomMessageProps {
  showMessage: boolean;
  message: string;
  hideMessage: () => void;
}

const CustomMessage: React.FC<CustomMessageProps> = ({
  showMessage,
  message,
  hideMessage,
}) => {
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (showMessage) {
      timer = setTimeout(() => {
        hideMessage();
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showMessage, hideMessage]);

  return (
    <>
      {showMessage && (
        <div className="custom-message">
          <p>{message}</p>
        </div>
      )}
    </>
  );
};

export default CustomMessage;
