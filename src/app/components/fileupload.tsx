"use client";
import React from "react";
import { useState } from "react";

export default function FileUpload() {
  const [files, setFiles] = useState<FileList | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    setFiles(droppedFiles);
  };

  //   const handleSelectFile = () => {
  //     // Implement file selection using an input element
  //     // For simplicity, you can use a hidden input element and trigger its click event
  //     inputRef.current?.click();
  //   };

  return (
    <React.Fragment>
      {!files && (
        <div className="flex flex-col min-h-screen items-center justify-center">
          <div className="flex flex-col justify-center items-center p-8 border-dashed border-gray-400 border-4">
            <h1>Drag your notes here to upload!</h1>
            <h2>Or</h2>
            <h1>Select file from computer..</h1>
            <input
              type="file"
              name="image"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded m-3"
            >
              Select File
            </input>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
