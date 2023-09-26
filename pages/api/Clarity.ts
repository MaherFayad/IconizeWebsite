import React, { useEffect } from 'react';

function ClarityScript() {
  useEffect(() => {
    // Define the Clarity script as a function
    (function(c: any, l: any, a: string, r: string, i: string, t: any, y: any) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
      t = l.createElement(r);
      t.async = true;
      t.src = `https://www.clarity.ms/tag/${i}`;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "j1aw65gcrm", undefined, undefined);
  }, []);

  return null; // or you can return a React fragment if needed
}

export default ClarityScript;
