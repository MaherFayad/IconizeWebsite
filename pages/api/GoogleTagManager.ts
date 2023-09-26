import React, { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[]; // Declare the dataLayer property
  }
}

function GoogleTagManagerScript() {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtm.js?id=GTM-59LSX77H`;
    script.async = true;

    // Append the script to the document's head
    document.head.appendChild(script);

    // Push an event to the dataLayer when the script has loaded
    script.addEventListener('load', () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'gtm.js' });
    });

    // Remove the script element when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // or you can return a React fragment if needed
}

export default GoogleTagManagerScript;
