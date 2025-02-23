import React from "react";
import Navbar from "../partials/_navbar";
import Sidebar from "../partials/_sidebar";
import Footer from "../partials/_footer";

const Layout = ({ children }) => {
    return (
        <>
            <div className="container-scroller">
                <Navbar />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            {children}
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;