import { useEffect } from 'react';
import { clarity } from 'react-microsoft-clarity';


const ClarityScript = () => {
  useEffect(() => {
    clarity.init("j1aw65gcrm");
  }, []); // Empty dependency array to run the effect once

  return null; // You can return null since this component doesn't render anything
};

export default ClarityScript;
