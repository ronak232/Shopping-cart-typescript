import React, { useState } from "react";

function showAlertMessages(show: "", mssg: "") {}

function AlertMessages() {
  const [first, setfirst] = useState<Object>({
    show: "",
    mssg: "",
  });
  return <div>AlertMessages</div>;
}

export default AlertMessages;
