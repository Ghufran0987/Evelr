import React from "react"
import Header from "../views/HostLayout/Header";
import Sidebar from "../views/HostLayout/SideBar";
import MainComponent from "../views/HostLayout/MainComponent";
function HostDashboard(){
    return(
            <>
            <Header/>
            <section className='h-dashboard py-3'>
            <div className="container">
                <div className="row">
                <Sidebar />
                <MainComponent/>
                </div>
            </div>
            </section>

            </>
    )
}

export default HostDashboard;
