import React from "react";
import "../../Styles/AdminPanel.scss";
import orders from "../../IMAGE/orders.svg"
import recipients from "../../IMAGE/recipients.svg"
import {useDispatch, useSelector} from "react-redux";
import {deletedOrderData} from "../../store/reducers/OrderReducer.js";
import {Modal} from "../Elements/Modal.jsx";
export const AdminPanelPage = () => {
    const dispatch = useDispatch()
    const {registerData} = useSelector(state => state.auth)
    const {order} = useSelector(state => state.order)
    return(<>
        <div className={'admin'}>
            <a href="#open-modal">
                <button>+</button>
            </a>
            <div className={'menu'}>
              <ul>
                  <li>
                      <img src={orders}/>
                      Պատվերներ ({order.length})
                  </li>
                  <li>
                      <img src={recipients}/>
                      Օգտվողներ ({registerData?.length})
                  </li>
              </ul>
            </div>
            <div className={'list'}>

                {order?.map((item,i) =>(<div key={i} className={'card'}>
                    <span title="Close" onClick={()=>dispatch(deletedOrderData(item. orderId))} className="deleted">delete</span>
                    <h3>{item?.user}</h3>

                    <h5>{item?.tracking}</h5>
                    <div>
                        {item?.file?.map((url,i) =><img src={url} key={i}/>)}
                    </div>
                    <p>{item?.description}</p>
                </div>))}
            </div>
        </div>
            <Modal/>
        </>
    )
}
