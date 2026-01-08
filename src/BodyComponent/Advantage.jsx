import React from 'react'
import "../Style.css"
import { FaTruckFast, FaCreditCard } from "react-icons/fa6";
import { FaShieldAlt, FaTag } from "react-icons/fa";
import { servicesData } from "../data/servicesData"

 function Advantage() {
  return (
    <div>
        {/* <!-- advantage section start --> */}

<section class="advantage-sec">
    <div class="container">
        <div class="advantage-heading">
            <h3>our advantages</h3>
        </div>
        <div class="row">

        {servicesData.map((item=>(
            <div className='col-lg-3 col-md-4' key={item.id}>
                <div className="advantage-box">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <div className="a-img">
                                <item.icon/>
                            </div>
                        </div>

                        <div className="col-md-9">
                            <div className="adv-content">
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )))}

    
        </div>
    </div>
</section>

{/* <!-- advantage section end --> */}
    </div>
  )
}

export default React.memo(Advantage);