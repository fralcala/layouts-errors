"use client";

import { useState } from "react";

export default function useFileConvertURI() {
  const [file, setFile] = useState({
    loading: false,
    dataURI: "",
    fileData: null,
  });

  function convertFile(fileData) {
    if (!fileData) {
      setFile({ loading: false, dataURI: "", fileData: fileData });
      return;
    }

    setFile({ loading: true, dataURI: "", fileData: fileData });

    const fr = new FileReader();

    fr.onloadend = function () {
      setTimeout(function () {
        setFile({
          loading: false,
          dataURI: fr.result,
          fileData: file.fileData,
        });
      }, 1000);
    };

    fr.readAsDataURL(fileData);
  }

  return {
    ...file,
    convertFile,
  };
}
