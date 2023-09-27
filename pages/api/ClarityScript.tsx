import { useEffect } from 'react';

const ClarityScript = () => {
  useEffect(() => {
    // Clarity script code
    (function (c: any, l: any, a: string, r: string, i: string, t: any, y: HTMLElement | undefined) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0] as HTMLElement | undefined; // Explicitly type y
      if (y) {
        y.parentNode?.insertBefore(t, y);
      }
    })(window, document, "clarity", "script", "j1aw65gcrm", undefined, undefined);
  }, []); // Empty dependency array to run the effect once

  return null; // You can return null since this component doesn't render anything
};

export default ClarityScript;
