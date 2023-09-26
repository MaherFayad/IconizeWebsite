import React, { useEffect } from 'react';

function ClarityScript() {
  useEffect(() => {
    // Define the Clarity script as a function
    (function(c: any, l: any, a: string, r: string, i: string) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
      const t = l.createElement(r);
      t.async = true;
      t.src = `https://www.clarity.ms/tag/${i}`;
      const y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "j1aw65gcrm");
  }, []);

  // You can return a React element here if needed
  return null;
}

export default ClarityScript;
