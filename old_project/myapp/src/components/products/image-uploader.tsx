import React, { useState } from "react";

type Props ={
  setSelectedFile: (e) => void;
}
function ImageUploader({setSelectedFile}: Props) {

  const [preview,setPreview] = useState(null)

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSelectedFile(event.target.files[0]);
    
    const objectUrl = URL.createObjectURL(event.target.files[0])

    console.log(`[${objectUrl}]`)

    setPreview(objectUrl)

  };


  return (
    <form className="p-5 mb-10">
      <input type="file" onChange={handleFileChange} />
      {preview && <img className="max-w-[600px]" src={preview} />}
    </form>
  );
}

export default ImageUploader;
