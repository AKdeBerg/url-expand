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

function Upload() {
    const [file, setFile] = useState('')

    const handleChange = (e: React.SyntheticEvent<EventTarget>) => {
        setFile((e.target as HTMLFormElement).files[0]);
    }

    const onSubmit = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('file', file)
        doPostFile(formdata);
    }

    return (
        <div className="text-center d-flex justify-content-center align-items-center flex-column">
            <div className="mb-3">
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <input className="form-control" type="file" id="formFile" accept=".zip, .csv" onChange={handleChange} />
                    </div>
                    <input type="submit" value="Upload" className="btn btn-primary btn-block mb-3" />
                </form>
            </div>
            {/* <FileUploader handleChange={handleChange} name="file" types={fileTypes} multiple={false} maxSize={2} />
            <p>{file ? `File name: ${file.name}` : "no files uploaded yet"}</p> */}
        </div>
    );
}

export default Upload;