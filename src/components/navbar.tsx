
import Link from 'next/link'

interface IProps {
    activeTabName: string
}


export const Navbar = (props: IProps) => {
    const { activeTabName } = props;
    return (
        <nav className="navbar navbar-expand-lg bg-light" >
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand" aria-current="page" >Bigly</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link" aria-current="page" >Home</a>
                            </Link>
                        </li>
                        <Link href="/upload-file">
                            <a className="nav-link" aria-current="page" >Import CSV</a>
                        </Link>

                        <li className="nav-item">
                            <Link href="/history">
                                <a className="nav-link" aria-current="page" >History</a>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}