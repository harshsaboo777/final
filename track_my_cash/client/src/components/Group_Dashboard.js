import React from "react";
import Sidebar from "./Sidebar";
import "../componentsStyles/group_dashboard.css"
const GroupDashBoard = () => {
    return (
        <React.Fragment>
            <div>
                <Sidebar />
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            Featured
                        </div>
                        <div className="card-body">
                        <div className="row">


<div className="col-md-11">
    <div className="card detail-card">
        <div className="card-body">
            This is some text within a card body.
        </div>
    </div>
    <div className="card detail-card">
        <div className="card-body">
            This is some text within a card body.
        </div>
    </div>
    <div className="card detail-card">
        <div className="card-body">
            This is some text within a card body.
        </div>
    </div>
    <div className="card detail-card">
        <div className="card-body">
            This is some text within a card body.
        </div>
    </div>
    <div className="card detail-card">
        <div className="card-body">
            This is some text within a card body.
        </div>
    </div>


</div>
<div className="col-md-1 border">

</div>


</div>
                        </div>
                    


                    
                    </div>
                </div>

            </div>
        </React.Fragment>

    )
}

export default GroupDashBoard