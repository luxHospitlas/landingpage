"use client";

import { useEffect } from "react";

const ClientHead = () => {
  useEffect(() => {
    const link = document.querySelector('link[href="/globals.css"]') as HTMLLinkElement; // Cast to HTMLLinkElement
    if (link) {
      link.media = "all";
    }
  }, []);

  return null;
};

export default ClientHead;
