import React, { Fragment, useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { doGetFile, doPostFile } from "../helpers/axios-helper";
import ToastMessage from "./toast-message";

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
    const [messge, setMessge] = useState<string>('');

    const handleChange = (e: React.SyntheticEvent<EventTarget>) => {
        setFile((e.target as HTMLFormElement).files[0]);
    }

    const onSubmit = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('file', file)
        const response = doPostFile(formdata);
        response.then((data) => {
            setMessge(data);
        })
    }

    return (
        <Fragment>
            <div className="text-center d-flex justify-content-center align-items-center flex-column">
                {messge ? <ToastMessage msg={messge} /> : null}
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
        </Fragment>
    );
}

export default Upload;