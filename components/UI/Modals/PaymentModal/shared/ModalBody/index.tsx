import React from "react";

interface ModalBodyProps {
  packageName?: string;
  price?: string;
  date?: string;
  redirectLink?: string;
}

function ModalBody({ packageName, price, date, redirectLink }: ModalBodyProps) {
  return <div>ModalBody</div>;
}

export default ModalBody;
