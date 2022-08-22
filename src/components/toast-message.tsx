import React from 'react';

interface IProps {
    msg: string
}

function ToastMessage({ msg }: IProps) {
    return (
        <div className="alert alert-primary alert-dismissible fade show" role="alert">
            <strong>{msg}</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default ToastMessage;
