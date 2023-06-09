import React, { useState } from "react";
import classes from "./CustomDropzone.module.css";
import { useDropzone } from "react-dropzone";
// import axios from "axios";
import { toast } from "react-toastify";

const CustomDropzone = (props) => {
  const [file, setFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        // const response = await axios.post("SERVER_ENDPOINT", formData, {
        //   headers: { "Content-Type": "multipart/form-data" },
        // });
        toast.success("Upload successful");
      } catch (error) {
        toast.error("Upload failed");
      }
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    maxFiles: 1,
  });

  return (
    <div className={classes["dropzone-box"]}>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag and drop a file here, or click to select a file</p>
      </div>
      {file && (
        <div>
          <p>Selected File: {file.name}</p>
          <button onClick={handleUpload} className={classes["btn-upload"]}>
            Confirm upload
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomDropzone;
