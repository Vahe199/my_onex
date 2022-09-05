import React from "react";
import "./style/InputStyles.scss"

const options = [{val:'օգտագործող',label:"Օգտագործող"},{val:'ադմին',label:"Ադմին"}]
export const SelectedInputElement = ({value,onChange,data=options}) => {
    return(
        <div className="column-6 form-select">
            <select name="" id="" value={value} onChange={onChange}>
                {data?.map((opt,i) =><option key={i} value={opt.val}>{opt.label}</option>)}
            </select>
        </div>
    )
}
