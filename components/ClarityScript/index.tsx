import React from 'react';
import { Helmet } from 'react-helmet';

function ClarityScript() {
  const scriptCode = `
    (function(c, l, a, r, i, t, y) {
      c[a] = c[a] || function() {
        (c[a].q = c[a].q || []).push(arguments);
      };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "j1aw65gcrm");
  `;

  return (
    <Helmet>
      <script type="text/partytown" dangerouslySetInnerHTML={{ __html: scriptCode }} />
    </Helmet>
  );
}

export default ClarityScript;
