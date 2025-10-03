import React from 'react'

export default function Search() {
    return (
        <div className="search_result_main">
            <div className="container">
                <div className="cash_back_card_main">
                    <div>
                        <p className="cash_back_header">Get 15% off cashback</p>
                        <p className="cash_back_left_text">On your next order</p>
                    </div>
                    <div>
                        <p className="cash_back_use_code_text">Use code:</p>
                        <div>
                            <div className="use_code_btn">NEXT15</div>
                            <div className="use_code_cashback_img">
                                <img
                                    src="../../assets/images/icons/product_details_icon/cash-back.svg"
                                    alt="not found"
                                />
                            </div>
                        </div>
                        <p className="cash_back_apply_text">T&C apply</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mb-5">
                        <div className="sort_by_flex">
                            <p>Sort By</p>
                            <select className="select filter_select">
                                <option selected>Best seller</option>
                                <option value="1">Seller1</option>
                                <option value="2">Seller2</option>
                                <option value="3">Seller3</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-12 col-md-3 col-lg-3">
                        <div className="filter_main_div">
                            <div className="filter_header_flex_main">
                                <p className="filter_heading" style={{ "textTransform": "uppercase" }}>
                                    FILTER
                                </p>
                                <p className="filter_header_flex_red_content">Clear All</p>
                            </div>
                            <div className="filter_range_slidder">
                                <div>
                                    <label htmlFor="filterRange" className="form-label">PRICE</label>
                                    <input
                                        type="range"
                                        className="form-range"
                                        min="0"
                                        max="3"
                                        id="filterRange"
                                        value="2"
                                    />
                                </div>
                                <div className="filter_range_slidder_content">
                                    <p className="m-0">SAR 20</p>
                                    <p className="m-0">SAR 5000</p>
                                </div>
                            </div>

                            <div className="filter_checks_main">
                                <p className="header_main m-0">Category</p>
                                <div className="mt-2">
                                    <div className="form-check form_check_active">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="category"
                                            id="flexCheckDefault"
                                            checked
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckDefault">
                                            Flowers <span className="text_size_12">(100)</span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="flowers"
                                            id="flexCheckChecked"
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckChecked">
                                            Perfume <span>(85)</span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="perfume"
                                            id="flexCheckDefault"
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckDefault">
                                            Perfume <span>(41)</span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="balloons"
                                            id="flexCheckChecked"
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckChecked">
                                            Balloons <span> (56)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="filter_checks_main pb-2"
                                style={{ "borderBottom": "1px solid #ccbfde" }}
                            >
                                <p className="header_main m-0">RECIPIENT</p>
                                <div className="mt-2">
                                    <div className="form-check form_check_active">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="category"
                                            id="flexCheckDefault"
                                            checked
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckDefault">
                                            For Her <span className="text_size_12">(100)</span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="forHer"
                                            id="flexCheckChecked"
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckChecked">
                                            For Him <span>(85)</span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="forHim"
                                            id="flexCheckDefault"
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckDefault">
                                            For Kids <span>(41)</span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="balloons"
                                            id="flexCheckChecked"
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckChecked">
                                            For Babies <span> (56)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="filter_checks_main pb-2"
                                style={{ "borderBottom": "1px solid #ccbfde" }}
                            >
                                <p className="header_main m-0">PRODUCT TYPE</p>
                                <div className="mt-2">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="category"
                                            id="flexCheckDefault"
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckDefault">
                                            Cakes <span className="text_size_12">(56)</span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="flowers"
                                            id="flexCheckChecked"
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckChecked">
                                            Chocolates <span>(56)</span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="perfume"
                                            id="flexCheckDefault"
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckDefault">
                                            Tableware <span>(56)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="filter_checks_main pb-2"
                                style={{ "borderBottom": "1px solid #ccbfde" }}
                            >
                                <p className="header_main m-0">TOYS, GAMES, & PUZZLES</p>
                                <div className="mt-2">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="softToys"
                                            id="flexCheckDefault"
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckDefault">
                                            Soft Toys <span className="text_size_12">(15)</span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="flowers"
                                            id="flexCheckChecked"
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckChecked">
                                            Chocolates <span>(56)</span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="perfume"
                                            id="flexCheckDefault"
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckDefault">
                                            Tableware <span>(56)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="filter_checks_main pb-2"
                                style={{ "borderBottom": "1px solid #ccbfde" }}
                            >
                                <p className="header_main m-0">BRANDS</p>
                                <div className="mt-2">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="aroy"
                                            id="flexCheckDefault"
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckDefault">
                                            AROY <span className="text_size_12">(15)</span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="bloomsbury’s"
                                            id="flexCheckChecked"
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckChecked">
                                            Bloomsbury’s <span>(15)</span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="dreamdays"
                                            id="flexCheckDefault"
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckDefault">
                                            Dreamdays <span>(15)</span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="fayLawson"
                                            id="flexCheckDefault"
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckDefault">
                                            Fay Lawson <span className="text_size_12">(15)</span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="spadeNewyork"
                                            id="flexCheckChecked"
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckChecked">
                                            Kate Spade New York <span>(15)</span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="chocolatier"
                                            id="flexCheckDefault"
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckDefault">
                                            Le Chocolatier <span>(15)</span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="sakinaes"
                                            id="flexCheckDefault"
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckDefault">
                                            CakLight of Sakinaes
                                            <span className="text_size_12">(15)</span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="mirzamChocolate"
                                            id="flexCheckChecked"
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckChecked">
                                            Mirzam Chocolate <span>(15)</span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="newbyTeas"
                                            id="flexCheckDefault"
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckDefault">
                                            Newby Teas <span>(15)</span>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value="desserts"
                                            id="flexCheckDefault"
                                        />
                                        <label className="form_check_label" htmlFor="flexCheckDefault">
                                            Not Just Desserts <span className="text_size_12">(15)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-9 col-lg-9">
                        <div className="row product_review_main">
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="product_review_card_img">
                                    <img
                                        src="../../assets/images/icons/search_result_icons/searchResultCard1.svg"
                                        alt="not found"
                                    />
                                </div>
                                <div className="review_card_content_main">
                                    <div>
                                        <p className="review_content_header">Product Name</p>
                                        <p className="m-0">
                                            <span className="review_content_price">150 SAR</span
                                            ><span className="review_content_oldprice">190 SAR</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                <img
                                                    src="../../assets/images/icons/product_details_icon/star.svg"
                                                    alt="not found"
                                                    style={{ "height": "10px" }}
                                                />
                                            </span>
                                            <span className="review_rating_main">4.5</span>
                                        </div>
                                        <p className="review_rating_main">In stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="product_review_card_img">
                                    <img
                                        src="../../assets/images/icons/search_result_icons/searchResultCard2.svg"
                                        alt="not found"
                                    />
                                </div>
                                <div className="review_card_content_main">
                                    <div>
                                        <p className="review_content_header">Product Name</p>
                                        <p className="m-0">
                                            <span className="review_content_price">150 SAR</span
                                            ><span className="review_content_oldprice">190 SAR</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                <img
                                                    src="../../assets/images/icons/product_details_icon/star.svg"
                                                    alt="not found"
                                                    style={{ "height": "10px" }}
                                                />
                                            </span>
                                            <span className="review_rating_main">4.5</span>
                                        </div>
                                        <p className="review_rating_main">In stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="product_review_card_img">
                                    <img
                                        src="../../assets/images/icons/search_result_icons/searchResultCard3.svg"
                                        alt="not found"
                                    />
                                </div>
                                <div className="review_card_content_main">
                                    <div>
                                        <p className="review_content_header">Product Name</p>
                                        <p className="m-0">
                                            <span className="review_content_price">150 SAR</span
                                            ><span className="review_content_oldprice">190 SAR</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                <img
                                                    src="../../assets/images/icons/product_details_icon/star.svg"
                                                    alt="not found"
                                                    style={{ "height": "10px" }}
                                                />
                                            </span>
                                            <span className="review_rating_main">4.5</span>
                                        </div>
                                        <p className="review_rating_main">In stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="product_review_card_img">
                                    <img
                                        src="../../assets/images/icons/search_result_icons/searchResultCard4.svg"
                                        alt="not found"
                                    />
                                </div>
                                <div className="review_card_content_main">
                                    <div>
                                        <p className="review_content_header">Product Name</p>
                                        <p className="m-0">
                                            <span className="review_content_price">150 SAR</span
                                            ><span className="review_content_oldprice">190 SAR</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                <img
                                                    src="../../assets/images/icons/product_details_icon/star.svg"
                                                    alt="not found"
                                                    style={{ "height": "10px" }}
                                                />
                                            </span>
                                            <span className="review_rating_main">4.5</span>
                                        </div>
                                        <p className="review_rating_main">In stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="product_review_card_img">
                                    <img
                                        src="../../assets/images/icons/search_result_icons/searchResultCard5.svg"
                                        alt="not found"
                                    />
                                </div>
                                <div className="review_card_content_main">
                                    <div>
                                        <p className="review_content_header">Product Name</p>
                                        <p className="m-0">
                                            <span className="review_content_price">150 SAR</span
                                            ><span className="review_content_oldprice">190 SAR</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                <img
                                                    src="../../assets/images/icons/product_details_icon/star.svg"
                                                    alt="not found"
                                                    style={{ "height": "10px" }}
                                                />
                                            </span>
                                            <span className="review_rating_main">4.5</span>
                                        </div>
                                        <p className="review_rating_main">In stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="product_review_card_img">
                                    <img
                                        src="../../assets/images/icons/search_result_icons/searchResultCard6.svg"
                                        alt="not found"
                                    />
                                </div>
                                <div className="review_card_content_main">
                                    <div>
                                        <p className="review_content_header">Product Name</p>
                                        <p className="m-0">
                                            <span className="review_content_price">150 SAR</span
                                            ><span className="review_content_oldprice">190 SAR</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                <img
                                                    src="../../assets/images/icons/product_details_icon/star.svg"
                                                    alt="not found"
                                                    style={{ "height": "10px" }}
                                                />
                                            </span>
                                            <span className="review_rating_main">4.5</span>
                                        </div>
                                        <p className="review_rating_main">In stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="product_review_card_img">
                                    <img
                                        src="../../assets/images/icons/search_result_icons/searchResultCard7.svg"
                                        alt="not found"
                                    />
                                </div>
                                <div className="review_card_content_main">
                                    <div>
                                        <p className="review_content_header">Product Name</p>
                                        <p className="m-0">
                                            <span className="review_content_price">150 SAR</span
                                            ><span className="review_content_oldprice">190 SAR</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                <img
                                                    src="../../assets/images/icons/product_details_icon/star.svg"
                                                    alt="not found"
                                                    style={{ "height": "10px" }}
                                                />
                                            </span>
                                            <span className="review_rating_main">4.5</span>
                                        </div>
                                        <p className="review_rating_main">In stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="product_review_card_img">
                                    <img
                                        src="../../assets/images/icons/search_result_icons/searchResultCard8.svg"
                                        alt="not found"
                                    />
                                </div>
                                <div className="review_card_content_main">
                                    <div>
                                        <p className="review_content_header">Product Name</p>
                                        <p className="m-0">
                                            <span className="review_content_price">150 SAR</span
                                            ><span className="review_content_oldprice">190 SAR</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                <img
                                                    src="../../assets/images/icons/product_details_icon/star.svg"
                                                    alt="not found"
                                                    style={{ "height": "10px" }}
                                                />
                                            </span>
                                            <span className="review_rating_main">4.5</span>
                                        </div>
                                        <p className="review_rating_main">In stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="product_review_card_img">
                                    <img
                                        src="../../assets/images/icons/search_result_icons/searchResultCard9.svg"
                                        alt="not found"
                                    />
                                </div>
                                <div className="review_card_content_main">
                                    <div>
                                        <p className="review_content_header">Product Name</p>
                                        <p className="m-0">
                                            <span className="review_content_price">150 SAR</span
                                            ><span className="review_content_oldprice">190 SAR</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                <img
                                                    src="../../assets/images/icons/product_details_icon/star.svg"
                                                    alt="not found"
                                                    style={{ "height": "10px" }}
                                                />
                                            </span>
                                            <span className="review_rating_main">4.5</span>
                                        </div>
                                        <p className="review_rating_main">In stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="product_review_card_img">
                                    <img
                                        src="../../assets/images/icons/search_result_icons/searchResultCard10.svg"
                                        alt="not found"
                                    />
                                </div>
                                <div className="review_card_content_main">
                                    <div>
                                        <p className="review_content_header">Product Name</p>
                                        <p className="m-0">
                                            <span className="review_content_price">150 SAR</span
                                            ><span className="review_content_oldprice">190 SAR</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                <img
                                                    src="../../assets/images/icons/product_details_icon/star.svg"
                                                    alt="not found"
                                                    style={{ "height": "10px" }}
                                                />
                                            </span>
                                            <span className="review_rating_main">4.5</span>
                                        </div>
                                        <p className="review_rating_main">In stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="product_review_card_img">
                                    <img
                                        src="../../assets/images/icons/search_result_icons/searchResultCard11.svg"
                                        alt="not found"
                                    />
                                </div>
                                <div className="review_card_content_main">
                                    <div>
                                        <p className="review_content_header">Product Name</p>
                                        <p className="m-0">
                                            <span className="review_content_price">150 SAR</span
                                            ><span className="review_content_oldprice">190 SAR</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                <img
                                                    src="../../assets/images/icons/product_details_icon/star.svg"
                                                    alt="not found"
                                                    style={{ "height": "10px" }}
                                                />
                                            </span>
                                            <span className="review_rating_main">4.5</span>
                                        </div>
                                        <p className="review_rating_main">In stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="product_review_card_img">
                                    <img
                                        src="../../assets/images/icons/search_result_icons/searchResultCard12.svg"
                                        alt="not found"
                                    />
                                </div>
                                <div className="review_card_content_main">
                                    <div>
                                        <p className="review_content_header">Product Name</p>
                                        <p className="m-0">
                                            <span className="review_content_price">150 SAR</span
                                            ><span className="review_content_oldprice">190 SAR</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                <img
                                                    src="../../assets/images/icons/product_details_icon/star.svg"
                                                    alt="not found"
                                                    style={{ "height": "10px" }}
                                                />
                                            </span>
                                            <span className="review_rating_main">4.5</span>
                                        </div>
                                        <p className="review_rating_main">In stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="product_review_card_img">
                                    <img
                                        src="../../assets/images/icons/search_result_icons/searchResultCard13.svg"
                                        alt="not found"
                                    />
                                </div>
                                <div className="review_card_content_main">
                                    <div>
                                        <p className="review_content_header">Product Name</p>
                                        <p className="m-0">
                                            <span className="review_content_price">150 SAR</span
                                            ><span className="review_content_oldprice">190 SAR</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                <img
                                                    src="../../assets/images/icons/product_details_icon/star.svg"
                                                    alt="not found"
                                                    style={{ "height": "10px" }}
                                                />
                                            </span>
                                            <span className="review_rating_main">4.5</span>
                                        </div>
                                        <p className="review_rating_main">In stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="product_review_card_img">
                                    <img
                                        src="../../assets/images/icons/search_result_icons/searchResultCard14.svg"
                                        alt="not found"
                                    />
                                </div>
                                <div className="review_card_content_main">
                                    <div>
                                        <p className="review_content_header">Product Name</p>
                                        <p className="m-0">
                                            <span className="review_content_price">150 SAR</span
                                            ><span className="review_content_oldprice">190 SAR</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                <img
                                                    src="../../assets/images/icons/product_details_icon/star.svg"
                                                    alt="not found"
                                                    style={{ "height": "10px" }}
                                                />
                                            </span>
                                            <span className="review_rating_main">4.5</span>
                                        </div>
                                        <p className="review_rating_main">In stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="product_review_card_img">
                                    <img
                                        src="../../assets/images/icons/search_result_icons/searchResultCard15.svg"
                                        alt="not found"
                                    />
                                </div>
                                <div className="review_card_content_main">
                                    <div>
                                        <p className="review_content_header">Product Name</p>
                                        <p className="m-0">
                                            <span className="review_content_price">150 SAR</span
                                            ><span className="review_content_oldprice">190 SAR</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                <img
                                                    src="../../assets/images/icons/product_details_icon/star.svg"
                                                    alt="not found"
                                                    style={{ "height": "10px" }}
                                                />
                                            </span>
                                            <span className="review_rating_main">4.5</span>
                                        </div>
                                        <p className="review_rating_main">In stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="product_review_card_img">
                                    <img
                                        src="../../assets/images/icons/search_result_icons/searchResultCard16.svg"
                                        alt="not found"
                                    />
                                </div>
                                <div className="review_card_content_main">
                                    <div>
                                        <p className="review_content_header">Product Name</p>
                                        <p className="m-0">
                                            <span className="review_content_price">150 SAR</span
                                            ><span className="review_content_oldprice">190 SAR</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                <img
                                                    src="../../assets/images/icons/product_details_icon/star.svg"
                                                    alt="not found"
                                                    style={{ "height": "10px" }}
                                                />
                                            </span>
                                            <span className="review_rating_main">4.5</span>
                                        </div>
                                        <p className="review_rating_main">In stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="product_review_card_img">
                                    <img
                                        src="../../assets/images/icons/search_result_icons/searchResultCard17.svg"
                                        alt="not found"
                                    />
                                </div>
                                <div className="review_card_content_main">
                                    <div>
                                        <p className="review_content_header">Product Name</p>
                                        <p className="m-0">
                                            <span className="review_content_price">150 SAR</span
                                            ><span className="review_content_oldprice">190 SAR</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                <img
                                                    src="../../assets/images/icons/product_details_icon/star.svg"
                                                    alt="not found"
                                                    style={{ "height": "10px" }}
                                                />
                                            </span>
                                            <span className="review_rating_main">4.5</span>
                                        </div>
                                        <p className="review_rating_main">In stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-2">
                                <div className="product_review_card_img">
                                    <img
                                        src="../../assets/images/icons/search_result_icons/searchResultCard18.svg"
                                        alt="not found"
                                    />
                                </div>
                                <div className="review_card_content_main">
                                    <div>
                                        <p className="review_content_header">Product Name</p>
                                        <p className="m-0">
                                            <span className="review_content_price">150 SAR</span
                                            ><span className="review_content_oldprice">190 SAR</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div>
                                            <span>
                                                <img
                                                    src="../../assets/images/icons/product_details_icon/star.svg"
                                                    alt="not found"
                                                    style={{ "height": "10px" }}
                                                />
                                            </span>
                                            <span className="review_rating_main">4.5</span>
                                        </div>
                                        <p className="review_rating_main">In stock</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}