import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const SignaturePad = () => {
  const signatureRef = useRef<SignatureCanvas | null>(null);
  const [signature, setSignature] = useState<string | null>(null);

  const handleClear = () => {
    if (signatureRef.current) {
      signatureRef.current.clear();
    }
  };

  const handleDownload = () => {
    if (signatureRef.current) {
      const signatureDataURL = signatureRef.current.toDataURL();
      setSignature(signatureDataURL);

      const downloadLink = document.createElement('a');
      downloadLink.href = signatureDataURL;
      downloadLink.download = 'signature.png'; // Specify the file name
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <>
    <div style={{border: "2px solid black", width:500, height:400}}  className="m-auto border-2 border-black mt-4">
       <SignatureCanvas
        ref={signatureRef}
        canvasProps={{width: 500, height: 400}}
      />
  
      
     
      {signature&& (
        <div>
          <p>Preview:</p>
          <img
            src={signature}
            alt="Downloadable Signature"
            style={{ maxWidth: '100%', maxHeight: '100px' }}
          />
        </div>
      )}
       
    </div>
    <div className='gap-4 flex justify-end items-end m-4'>
        <button onClick={handleClear} className="bg-red-600 text-white rounded-md border-0 p-2 text-sm hover:opacity-75">Clear</button>
        <button onClick={handleDownload}className='bg-green text-white rounded-md border-0 p-2 text-sm hover:opacity-75'>Download</button>
    </div>

    </>
    
  );
};

export default SignaturePad;
