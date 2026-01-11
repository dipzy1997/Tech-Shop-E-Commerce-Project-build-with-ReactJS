import React, {useState} from 'react'
import "../Style.css"
import "../Responsive.css"
import productsData from '../data/productsData'
import Card from '../Components/Card';
import { useNavigate } from 'react-router-dom';




export default function TopProduct() {

    const navigate = useNavigate();

    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProducts = activeCategory === "all"? productsData : productsData.filter(p=> p.category.toLowerCase() === activeCategory);
    


  return (
    <div>
        {/* <!-- top product start --> */}

<section className="top-product-sec">
    <div className="container">
        <div className="top-sec-heading">
            <h3>top products</h3>
        </div>

        <div className="category-btns d-flex justify-content-between align-items-center">
            <button className={activeCategory === "all"? "redbtn-active" : ""} onClick={()=> setActiveCategory("all")}>all</button>
            <button className={activeCategory === "headphones"? "redbtn-active" : ""} onClick={()=> setActiveCategory("headphones")}>headphones</button>
            <button className={activeCategory === "earbuds"? "redbtn-active" : ""} onClick={()=> setActiveCategory("earbuds")}>earbuds</button>
            <button className={activeCategory === "earphones"? "redbtn-active": ""} onClick={()=> setActiveCategory("earphones")}>earphones</button>
            <button className={activeCategory === "neckbands"? "redbtn-active": ""} onClick={()=> setActiveCategory("neckbands")}>neckbands</button>
        </div>

        {/* <!-- top product list start --> */}
            <div className="top-product-container">
                <div className="row" id="topProductsRow">
                    {filteredProducts.slice(0, 11).map((product)=> <Card product={product} key={product.id}/> )}
                     
                    <div class="col-lg-3 col-md-4">
                
                        <div class="browse-box" onClick={()=> navigate("/allProducts")}>
                            <p>browse all products <span><i class="fa-solid fa-arrow-right"></i></span></p>
                        </div>
                
                    </div>
                </div>
            </div>

            {/* browse box */}

           



    </div>
</section>

{/* <!-- top product end --> */}
    </div>
  )
}
