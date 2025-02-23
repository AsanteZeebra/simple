import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return(
        <>
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/Dashboard">
                        <i className="icon-grid menu-icon"></i>
                        <span className="menu-title">Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                        <i className="icon-layout menu-icon"></i>
                        <span className="menu-title">Transactions</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="ui-basic">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <Link className="nav-link" to="../pages/Transactions/Transactions">Transactions</Link></li>
                            <li className="nav-item"> <Link className="nav-link" to="../pages/ui-features/dropdowns">Statements</Link></li>
                            <li className="nav-item"> <Link className="nav-link" to="../pages/ui-features/typography">Typography</Link></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
                        <i className="icon-columns menu-icon"></i>
                        <span className="menu-title">Form elements</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="form-elements">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"><Link className="nav-link" to="../pages/forms/basic_elements">Basic Elements</Link></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                        <i className="icon-bar-graph menu-icon"></i>
                        <span className="menu-title">Charts</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="charts">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <a className="nav-link" href="../pages/charts/chartjs.html">ChartJs</a></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                        <i className="icon-grid-2 menu-icon"></i>
                        <span className="menu-title">Tables</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="tables">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <a className="nav-link" href="../pages/tables/basic-table.html">Basic table</a></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                        <i className="icon-contract menu-icon"></i>
                        <span className="menu-title">Icons</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="icons">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <a className="nav-link" href="../pages/icons/mdi.html">Mdi icons</a></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                        <i className="icon-head menu-icon"></i>
                        <span className="menu-title">User Pages</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="auth">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <a className="nav-link" href="../pages/samples/login.html"> Login </a></li>
                            <li className="nav-item"> <a className="nav-link" href="../pages/samples/register.html"> Register </a></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="collapse" href="#error" aria-expanded="false" aria-controls="error">
                        <i className="icon-ban menu-icon"></i>
                        <span className="menu-title">Error pages</span>
                        <i className="menu-arrow"></i>
                    </a>
                    <div className="collapse" id="error">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item"> <a className="nav-link" href="../pages/samples/error-404.html"> 404 </a></li>
                            <li className="nav-item"> <a className="nav-link" href="../pages/samples/error-500.html"> 500 </a></li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="../../../docs/documentation.html">
                        <i className="icon-paper menu-icon"></i>
                        <span className="menu-title">Documentation</span>
                    </a>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Sidebar;