
import React from 'react';
import Advantage from '../BodyComponent/Advantage';
import "../Responsive.css";
import { useCartContext } from '../contextApi/CartProvider';
import Card from '../Components/Card';
import { sortMenu, brandsMenu, categoryMenu } from '../data/filterBarData';
import { FaIndianRupeeSign } from "react-icons/fa6";
import "../Style.css"

export default function AllProduct() {

  const { state, dispatch } = useCartContext();


const isFilteredApplied =
  state.filters.brands.length > 0 ||
  state.filters.categories.length > 0 ||
  state.filters.price !== state.maxprice ||
  state.filters.sort !== "";

const products = state.filteredProducts;

  const handleBrandChange = (value) => {
    const updated = state.filters.brands.includes(value)
      ? state.filters.brands.filter(b => b !== value)
      : [...state.filters.brands, value];

    dispatch({ type: "set_brands_filter", payload: updated });
  };

  const handleCategoryChange = (value) => {
    const updated = state.filters.categories.includes(value)
      ? state.filters.categories.filter(c => c !== value)
      : [...state.filters.categories, value];

    dispatch({ type: "set_category_filter", payload: updated });
  };

  const handlePriceChange = (e) => {
    dispatch({
      type: "set_price_filter",
      payload: Number(e.target.value)
    });
  };

  const handleSortChange = (sortkey) => {
    dispatch({ type: "set_sort_filter", payload: sortkey });
  };

  return (
    <div>
      <section className="all-product-sec">
        <div className="container">
          <div className="row" id="all-prod-row">

            {/* FILTER SECTION */}
            <div className="col-md-2">
              <div className="product-filter-sec">

                {isFilteredApplied && (
                  <button
                    className="red-btn filter-clear-btn"
                    onClick={() => dispatch({ type: "clear_filter" })}
                  >
                    clear filter
                  </button>
                )}

                {/* SORT */}
                <div className="all-sort-sec">
                  <h5>sort by</h5>
                  <ul>
                    {sortMenu.map(item => (
                      <li
                        key={item.id}
                        onClick={() => handleSortChange(item.key)}
                        className={state.filters.sort === item.key ? "active-filter":""}
                      >
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FILTERS */}
                <div className="all-filter-sec">
                  <h5>filter by</h5>

                  {/* BRAND */}
                  <h6>brands</h6>
                  <ul>
                    {brandsMenu.map(item => (
                      <li key={item.id}>
                        <label className={state.filters.brands.includes(item.label.toLowerCase())? "active-filter": ""}>
                          <input
                            type="checkbox"
                            checked={state.filters.brands.includes(item.label.toLowerCase())}
                            onChange={() => handleBrandChange(item.label.toLowerCase())}
                          />
                          {item.label}
                        </label>
                      </li>
                    ))}
                  </ul>

                  {/* CATEGORY */}
                  <h6>category</h6>
                  <ul>
                    {categoryMenu.map(item => (
                      <li key={item.id}>
                        <label className={state.filters.categories.includes(item.label.toLowerCase())? "active-filter": ""}>
                          <input
                            type="checkbox"
                            checked={state.filters.categories.includes(item.label.toLowerCase())}
                            onChange={() => handleCategoryChange(item.label.toLowerCase())}
                          />
                          {item.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* PRICE */}
                <div className="all-price-range">
                  <h6>price</h6>
                  <label htmlFor="price-range">
                    <FaIndianRupeeSign />{state.filters.price}
                  </label>
                  <input
                    type="range"
                    id="price-range"
                    min="0"
                    max={state.maxprice}
                    value={state.filters.price}
                    onChange={handlePriceChange}
                  />
                </div>

              </div>
            </div>

            {/* PRODUCTS */}
            <div className="col-md-10">
              <div className="row" id="all-products-container">
                {products.length > 0 ? (
                  products.map(product =>
                    <Card key={product.id} product={product} />
                  )
                ) : (
                  <p>No products found</p>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Advantage />
    </div>
  );
}
