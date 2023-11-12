import Input from "../../components/ui/Input";
const Upload = () => {
  return (
    <>
    <div className="p-2 text-sm ">
    <p>Upload all documents here needed for the Clearance</p>
      <p>
        Note: Make sure they are authentic and from the appropriate websites
      </p>
      <p>Any form of forggery will not be condoned!</p>
    </div>
    
      <h2 className="p-2 text-center text-lg font-bold">Upload Documents Here </h2>
      <div className="flex flex-col gap-4 m-2 ">
        <div className="">
          <label htmlFor="admission-letter">Jamb Admission Letter</label>
        <Input
          type="file"
          name="admission_letter"
          id="jamb_admission"
          accept=".pdf"
        ></Input>
        <label htmlFor="jambresult">Jamb Original Result</label>
        <Input
          type="file"
          name="Jamb-result"
          id="Jamb-Fresult"
          accept=".pdf"
        ></Input>
        <label htmlFor="Waec">WAEC Original Certificate</label>
        <Input
          type="file"
          name="waec"
          id="waec"
          accept=".pdf,.jpg,.jpeg,.png"
        ></Input>
        </div> 
        <hr />
      <div className="School-documents">
    <label htmlFor="school-admission">FUTO Admission Letter</label>
        <Input
          type="file"
          name="admission_letter"
          id="school-admission"
          accept=".pdf"
        ></Input>
          <label htmlFor="school-admission">Acceptance Letter</label>
        <Input
          type="file"
          name="acceptance"
          id="acceptance"
          accept=".pdf"
        ></Input>

          <label htmlFor="school-admission">Validity Form</label>
        <Input
          type="file"
          name="validty"
          id="validity"
          accept=".pdf"
        ></Input>
          <label htmlFor="school-admission">Form 19</label>
        <Input
          type="file"
          name="19"
          id="form_19"
          accept=".pdf"
        ></Input>
          <label htmlFor="school-admission">POST-UTME Results</label>
        <Input
          type="file"
          name="post"
          id="post"
          accept=".pdf"
        ></Input>
      </div><hr />
      <div className="personal-files">
        <label>Birth Certifiacte</label>
      <Input
          type="file"
          name="birth"
          id="birth"
          accept=".pdf,.png,.jpeg.jpeg"
        ></Input>
            <label>L.G.A Identification</label>
      <Input
          type="file"
          name="identification"
          id="lga"
          accept=".pdf,.jpg,.jpeg,.png"
        ></Input>
      </div>
       
      </div>
    </>
  );
};
export default Upload;
