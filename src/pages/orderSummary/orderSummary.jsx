import "../orderSummary/orderSummary.css";
import { Fragment } from "react";
import {Navbar,Footer,OrderSummaryComponent} from "../../components/index";


export const OrderSummary=()=>{


    return(
        <Fragment>
            <Navbar/>
            <OrderSummaryComponent/>
            <Footer/>
        </Fragment>
    )
}