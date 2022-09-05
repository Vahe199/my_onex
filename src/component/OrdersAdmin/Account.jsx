import React from "react";
import {useSelector} from "react-redux";
import {AdminPanelPage} from "./AdminPanelPage";
import {OrdersPage} from "./OrdersPage.jsx";

export const Account = () => {
    const {user = {}} = useSelector(state => state.auth)
    return(<React.Fragment>
            {user?.role === "Օգտագործող" ?
                <OrdersPage/>
            :<AdminPanelPage/> }
        </React.Fragment>
    )
}
