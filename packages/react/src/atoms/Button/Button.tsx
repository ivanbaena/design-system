import React from "react";

interface ButtonProps {
  label: string,
}

export default function Button({ label }: ButtonProps): JSX.Element {
  return <button className="dse-button-container">{label}</button>;
}
