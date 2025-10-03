import React from "react";

export default function Product() {
    return (
        <>
            <div className="product_details_main">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 col-lg-5 p-0">
                            <div className="col-12">
                                <div className="product-details-bigimg-main">
                                    <img
                                        src="../../assets/images/icons/product_details_icon/productDetailsBig.svg"
                                        alt="Not found"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 product-details-smallimg-main">
                                    <img
                                        src="../../assets/images/icons/product_details_icon/productDetailsSmall.svg"
                                        alt="Not found"
                                    />
                                </div>
                                <div className="col-4 product-details-smallimg-main">
                                    <img
                                        src="../../assets/images/icons/product_details_icon/productDetailsSmall.svg"
                                        alt="Not found"
                                    />
                                </div>
                                <div className="col-4 product-details-smallimg-main">
                                    <img
                                        src="../../assets/images/icons/product_details_icon/productDetailsSmall.svg"
                                        alt="Not found"
                                    />
                                </div>
                                <div className="col-4 product-details-smallimg-main">
                                    <img
                                        src="../../assets/images/icons/product_details_icon/productDetailsSmall.svg"
                                        alt="Not found"
                                    />
                                </div>
                                <div className="col-4 product-details-smallimg-main">
                                    <img
                                        src="../../assets/images/icons/product_details_icon/productDetailsSmall.svg"
                                        alt="Not found"
                                    />
                                </div>
                                <div className="col-4 product-details-smallimg-main">
                                    <img
                                        src="../../assets/images/icons/product_details_icon/productDetailsSmall.svg"
                                        alt="Not found"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 col-lg-7 p-0">
                            <div className="product_details_content">
                                <div className="product-name-main">
                                    <h1 className="header_main">Product Name</h1>
                                    <p className="subheader-main">
                                        <span style={{"color": "#f92323"}}>Supplier:</span
                                        ><span> Supplier name here</span>
                                    </p>
                                    <p className="product-name-content">
                                        Celebrate Christmas and greet your loved ones with a simple,
                                        yet elegant gift like this Christmas Bauble Bouquet. Let their
                                        Christmas be merry and beautiful as your flower gift!
                                    </p>
                                </div>
                                <div className="solid-line-main"></div>
                                <div className="gift-details-content-main">
                                    <h1 className="header_main">Gift Details</h1>
                                    <ul>
                                        <li className="gift-details-list">
                                            It is a long established fact that a reader will be
                                            distracted by the readable content of a page when looking at
                                            its layout.
                                        </li>
                                        <li className="gift-details-list">
                                            It is a long established fact that a reader will be
                                            distracted by the readable content of a page when looking at
                                            its layout.
                                        </li>
                                        <li className="gift-details-list">
                                            It is a long established fact that a reader will be
                                            distracted by the readable content of a page when looking at
                                            its layout.
                                        </li>
                                        <li className="gift-details-list">
                                            It is a long established fact that a reader will be
                                            distracted by the readable content of a page when looking at
                                            its layout.
                                        </li>
                                    </ul>
                                </div>
                                <div className="solid-fent-line-main"></div>
                                <div className="gift-details-flex-main mb-2">
                                    <span style={{"font-weight": "600"}}>Availability : </span
                                    ><span>In Stock</span>
                                </div>
                                <div className="gift-details-flex-main">
                                    <span style={{"font-weight": "600"}}>SKU : </span
                                    ><span>Balloons43560-duba</span>
                                </div>
                                <div className="product-details-price-main">
                                    <div>Price</div>
                                    <div>150SAR</div>
                                </div>
                                <p className="gift-details-flex-main m-0">
                                    Select date and time of delivery
                                </p>
                                <div className="delivery_date_main">
                                    <p className="header_main">Delivery Date</p>
                                    <div className="row">
                                        <div className="col-6 col-md-3 col-lg-3">
                                            <div className="delivery_date_grey_card">
                                                <p className="text-content">Today</p>
                                                <p className="header-content">29</p>
                                                <p className="text-content">Nov</p>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3 col-lg-3">
                                            <div className="delivery_date_grey_card">
                                                <p className="text-content">Tomorrow</p>
                                                <p className="header-content">30</p>
                                                <p className="text-content">Nov</p>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3 col-lg-3">
                                            <div className="delivery_date_grey_card">
                                                <p className="text-content">Thursday</p>
                                                <p className="header-content">1</p>
                                                <p className="text-content">Dec</p>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3 col-lg-3">
                                            <div className="delivery_date_grey_card">
                                                <p className="text-content">Calender</p>
                                                <p className="header-content">Pick</p>
                                                <p className="text-content">Other Date</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="delivery-time-main">
                                        <p className="header_main">Delivery Time</p>
                                        <div className="row">
                                            <div className="col-6 col-md-3 col-lg-3">
                                                <div className="delivery_date_grey_card">
                                                    <p className="text-content">09:00 AM</p>
                                                    <p className="text-content">12:00 PM</p>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3 col-lg-3">
                                                <div className="delivery_date_grey_card">
                                                    <p className="text-content">12:00 PM</p>
                                                    <p className="text-content">03:00 PM</p>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3 col-lg-3">
                                                <div className="delivery_date_grey_card">
                                                    <p className="text-content">03:00 PM</p>
                                                    <p className="text-content">06:00 PM</p>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3 col-lg-3">
                                                <div className="delivery_date_grey_card">
                                                    <p className="text-content">06:00 PM</p>
                                                    <p className="text-content">09:00 PM</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-quantity-main">
                                        <div className="product-quantity-flex">
                                            <div className="grey-symbol-btn">
                                                <img
                                                    src="../../assets/images/icons/product_details_icon/minus.svg"
                                                    alt="not found"
                                                />
                                            </div>
                                            <div className="quantity-header">01</div>
                                            <div className="grey-symbol-btn">
                                                <img
                                                    src="../../assets/images/icons/product_details_icon/add.svg"
                                                    alt="not found"
                                                />
                                            </div>
                                        </div>
                                        <a href="../OrderDeliverySummary/OrderDeliverySummary.html">
                                            <button className="btn add_to_bag_btn">ADD TO BAG</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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

                    <div className="product_review_main">
                        <p className="product_review_header">OTHERS ALSO VIEWED</p>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3 mb-2">
                                <div className="product_review_card_img">
                                    <img
                                        src="../../assets/images/icons/product_details_icon/reviewimg1.svg"
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
                                                    style={{"height": "10px"}}
                                                />
                                            </span>
                                            <span className="review_rating_main">4.5</span>
                                        </div>
                                        <p className="review_rating_main">In stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mb-2">
                                <div className="product_review_card_img">
                                    <img
                                        src="../../assets/images/icons/product_details_icon/reviewimg2.svg"
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
                                                    style={{"height": "10px"}}
                                                />
                                            </span>
                                            <span className="review_rating_main">4.5</span>
                                        </div>
                                        <p className="review_rating_main">In stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mb-2">
                                <div className="product_review_card_img">
                                    <img
                                        src="../../assets/images/icons/product_details_icon/reviewimg3.svg"
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
                                                    style={{"height": "10px"}}
                                                />
                                            </span>
                                            <span className="review_rating_main">4.5</span>
                                        </div>
                                        <p className="review_rating_main">In stock</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 mb-2">
                                <div className="product_review_card_img">
                                    <img
                                        src="../../assets/images/icons/product_details_icon/reviewimg4.svg"
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
                                                    style={{"height": "10px"}}
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
            <div
                className="offcanvas offcanvas-start"
                data-bs-backdrop="static"
                tabindex="-1"
                id="staticBackdrop"
                aria-labelledby="staticBackdropLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="staticBackdropLabel">Your Cart</h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <label>2 Items</label>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center my-3">
                            <div className="d-flex gap-2">
                                <img
                                    className="img-fluid cart-item-img"
                                    src="../../assets/images/icons/cart_icons/cart_image1.png"
                                    alt=""
                                />
                                <div>
                                    <label className="cart_item_name">Product Name</label>
                                    <p className="p-0 m-0 cart_item_price">150 SAR</p>
                                </div>
                            </div>
                            <div>
                                <img
                                    src="../../assets/images/icons/cart_icons/cart_delete.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center my-3">
                            <div className="d-flex gap-2">
                                <img
                                    className="img-fluid cart-item-img"
                                    src="../../assets/images/icons/cart_icons/cart_image1.png"
                                    alt=""
                                />
                                <div>
                                    <label className="cart_item_name">Product Name</label>
                                    <p className="p-0 m-0 cart_item_price">150 SAR</p>
                                </div>
                            </div>
                            <div>
                                <img
                                    src="../../assets/images/icons/cart_icons/cart_delete.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex gap-3">
                        <a href="../OrderDeliverySummary/OrderDeliverySummary.html">
                            <button className="btn check_out_btn">Check out now</button>
                        </a>
                        <button className="btn shopping_btn">Continue shopping</button>
                    </div>
                </div>
            </div>
        </>
    )
}