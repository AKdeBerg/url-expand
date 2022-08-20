import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/navbar'
import DragDrop from '../components/upload'

const UploadFile: NextPage = () => {
    return (
        <>
            <Navbar activeTabName={"upload-file"} />
            <div className="mt-3 container">
                <div className="text-center">
                    <h4>Please Upload your file here (.csv, .zip)</h4>
                </div>
                <div className="mb-3">
                    <DragDrop />
                </div>
            </div>
        </>
    )
}

export default UploadFile
