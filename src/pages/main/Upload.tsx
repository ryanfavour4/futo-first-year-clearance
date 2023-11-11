import React, { useRef } from "react";
const Upload = () => {
  const ref = useRef<HTMLInputElement>(null);
  const openFile = () => {
    if (ref.current) {
      ref.current.click();
    }
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
  };
  return (
    <>
    <div className="p-2">
    <p>Upload all documents here needed for the Clearance</p>
      <p>
        Note: Make sure they are authentic and from the appropriate websites
      </p>
      <p>Any form of forggery will not be condoned!</p>
    </div>
    
      <h2 className="p-2 text-center text-lg font-bold">Upload Documents Here </h2>
      <div className="flex flex-col gap-4 m-2 ">
        <div className="Jamb-documents">
        <button className="text-black rounded-md border-2 p-2 text-sm hover:opacity-75" onClick={openFile}>Jamb Admission Letter(pdf only)</button>
        <input
        //   className="hidden"
          type="file"
          ref={ref}
          onChange={handleFileChange}
          name="admission_letter"
          id="jamb_admission"
          accept=".pdf"
        />
        <button className="text-black rounded-md border-2 p-2 text-sm hover:opacity-75" onClick={openFile}>WAEC Certificate</button>
        <input
        //   className="hidden"
          type="file"
          ref={ref}
          onChange={handleFileChange}
          name="admission_letter"
          id="jamb_admission"
          accept=".pdf,.jpg,.jpeg,.png"
        />
        <button className="text-black rounded-md border-2 p-2 text-sm hover:opacity-75" onClick={openFile}>Jamb Original Result(pdf only)</button>
        <input
        //   className="hidden"
          type="file"
          ref={ref}
          onChange={handleFileChange}
          name="admission_letter"
          id="jamb_admission"
          accept=".pdf"
        />
        </div> <hr />
      <div className="School-documents">
      <button className="text-black rounded-md border-2 p-2 text-sm hover:opacity-75" onClick={openFile}>School Admission Letter(pdf only)</button>
        <input
        //   className="hidden"
          type="file"
          ref={ref}
          onChange={handleFileChange}
          name="admission_letter"
          id="jamb_admission"
          accept=".pdf"
        />
        
      </div><hr />
      <div className="personal-files">
      <button className="text-black rounded-md border-2 p-2 text-sm hover:opacity-75" onClick={openFile}>Birth Certificate</button>
        <input
        //   className="hidden"
          type="file"
          ref={ref}
          onChange={handleFileChange}
          name="admission_letter"
          id="jamb_admission"
          accept=".pdf"
        />
      </div>
        {/* < input className=" text-black rounded-md border-2 p-2 text-sm hover:opacity-75"/>
          Jamb Admission Letter
         
        < input className="  text-black rounded-md border-2 p-2 text-sm hover:opacity-75"/>
          Futo Admission Letter
         
        < input className="  text-black rounded-md border-2 p-2 text-sm hover:opacity-75"/>
          Post-Utme Results
        
        < input className="  text-black rounded-md border-2 p-2 text-sm hover:opacity-75"/>
          Acceptance Letter
        
        < input className="  text-black rounded-md border-2 p-2 text-sm hover:opacity-75"/>
          Confirmation of Admission
         
        < input className="  text-black rounded-md border-2 p-2 text-sm hover:opacity-75"/>
          WAEC Original result
         
        < input className="  text-black rounded-md border-2 p-2 text-sm hover:opacity-75"/>
          Birth Certificate
         
        < input className="  text-black rounded-md border-2 p-2 text-sm hover:opacity-75"/>
          Validty Form
        
        < input className="  text-black rounded-md border-2 p-2 text-sm hover:opacity-75"/>
          Form 18
         
        < input className="  text-black rounded-md border-2 p-2 text-sm hover:opacity-75"/>
          L.G.A Identification Slip
         
        < input className="  text-black rounded-md border-2 p-2 text-sm hover:opacity-75">
          Original Jamb Result
         
        < input type="file" className="  text-black rounded-md border-2 p-2 text-sm hover:opacity-75">
          Passport Photograph
       
        < className="  text-black rounded-md border-2 p-2 text-sm hover:opacity-75"></ input> */}
      </div>
    </>
  );
};
export default Upload;
