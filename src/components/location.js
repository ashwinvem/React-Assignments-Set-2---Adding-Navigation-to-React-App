import React from "react";
import { useLocation } from "react-router-dom";

export default function LocationDisplay() {
  let location = useLocation().pathname;

  return <p data-testid="location-display">{location}</p>;
}
