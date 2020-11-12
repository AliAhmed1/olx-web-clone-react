import React from "react";

function Footers() {
    return (
        <div className="mt-5">
            <div className="page-footer bg-light font-small blue pt-4">
                {/* Footer Links */}
                <div className="container text-center text-md-left">
                    {/* Grid row */}
                    <div className="row">
                        {/* Grid column */}
                        <div className="col-md-6 mt-md-0 mt-3">
                            {/* Content */}
                            <h5 className="text-uppercase">Footer Content</h5>
                            <p>Here you can use rows and columns to organize your footer content.</p>
                        </div>
                        {/* Grid column */}
                        <hr className="clearfix w-100 d-md-none pb-3" />
                        {/* Grid column */}
                        <div className="col-md-3 mb-md-0 mb-3">
                            {/* Links */}
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-3 mb-md-0 mb-3">
                            {/* Links */}
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Grid row */}
                </div>
                {/* Footer Links */}
                {/* Copyright */}
                <div className="footer-copyright text-center bg-primary py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </div>
                {/* Copyright */}
            </div>
            {/* Footer */}
        </div>
    );
}

export default Footers;