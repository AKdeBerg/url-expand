import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { doGetFile, doPostFile } from "../helpers/axios-helper";

const fileTypes = ["CSV", "ZIP"];
export interface IfileType {
    name: string,
    size: number,
    lastModified: number,
    type: string,
    webkitRelativePath: string,
    astModifiedDate: Date
}

function DragDrop() {

    const [file, setFile] = useState<IfileType | null>(null);
    const handleChange = (file: IfileType) => {
        setFile(file);
        // doPostFile(file);
        doGetFile();
    };

    return (
        <div className="text-center d-flex justify-content-center align-items-center flex-column">
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} multiple={false} maxSize={2} />
            <p>{file ? `File name: ${file.name}` : "no files uploaded yet"}</p>
        </div>
    );
}

export default DragDrop;