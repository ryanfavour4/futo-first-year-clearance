import {useState} from "react"
import SignatureCanvas from 'react-signature-canvas'
export default function SignaturePad (){
    const [signature, setSignature] = useState()
    return(
        <div>
        <SignatureCanvas/> 
    </div>
    )
  
}