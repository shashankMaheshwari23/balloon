import React from "react";
import { HomeProps } from "../type";

const HomeView: React.FC<HomeProps> = ({productList}) => {
    const productsSet1 = productList?.slice(0,4);
    const productsSet2 = productList?.slice(4,8);
    return (
        <div>
            <div className="container baloons-slide-section">
                <div className="row pt-3 px-3 justify-content-md-center">
                    <div className="d-flex justify-content-between">
                        <label className="slide-label">Balloons</label>
                        <button type="button" className="btn seeMore-btn">See more</button>
                    </div>
                </div>
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner p-3">
                        <div className="carousel-item active">
                            <div className="product-review-main">
                                <div className="col-12 row">
                                    <div className="col-12 col-md-6 col-lg-3 p-0">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img1.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img2.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img2.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img3.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="product-review-main">
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img1.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img1.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img1.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img1.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container baloons-slide-section">
                <div className="row pt-3 px-3 justify-content-md-center">
                    <div className="d-flex justify-content-between">
                        <label className="slide-label">GIFTS FOR OCCASSIONS</label>
                        <button type="button" className="btn seeMore-btn">See more</button>
                    </div>
                </div>
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner p-3">
                        <div className="carousel-item active">
                            <div className="product-review-main">
                                <div className="col-12 row">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img4.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img5.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img6.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img7.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="product-review-main">
                                <div className="col-12 row">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img4.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img5.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img6.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img7.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container baloons-slide-section">
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner p-3">
                        <div className="carousel-item active">
                            <div className="product-review-main">
                                <div className="col-12 row">
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img8.png"
                                                alt="not found"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img9.png"
                                                alt="not found"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img10.png"
                                                alt="not found"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="product-review-main">
                                <div className="col-12 row">
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img8.png"
                                                alt="not found"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img9.png"
                                                alt="not found"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img10.png"
                                                alt="not found"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container baloons-slide-section">
                <div className="row pt-3 px-3 justify-content-md-center">
                    <div className="d-flex justify-content-between">
                        <label className="slide-label">PERFUMES</label>
                        <button type="button" className="btn seeMore-btn">See more</button>
                    </div>
                </div>
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner p-3">
                        <div className="carousel-item active">
                            <div className="product-review-main">
                                <div className="col-12 row">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img15.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img16.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img17.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img18.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="product-review-main">
                                <div className="col-12 row">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img15.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img16.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img17.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img18.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container baloons-slide-section">
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner p-3">
                        <div className="carousel-item active">
                            <div className="product-review-main">
                                <div className="col-12 row">
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img8.png"
                                                alt="not found"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img9.png"
                                                alt="not found"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img10.png"
                                                alt="not found"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="product-review-main">
                                <div className="col-12 row">
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img8.png"
                                                alt="not found"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img9.png"
                                                alt="not found"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img10.png"
                                                alt="not found"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container baloons-slide-section">
                <div className="row pt-3 px-3 justify-content-md-center">
                    <div className="d-flex justify-content-between">
                        <label className="slide-label">CAKE & GOURMENT</label>
                        <button type="button" className="btn seeMore-btn">See more</button>
                    </div>
                </div>
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner p-3">
                        <div className="carousel-item active">
                            <div className="product-review-main">
                                <div className="col-12 row">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img19.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img20.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img21.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img22.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="product-review-main">
                                <div className="col-12 row">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img19.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img20.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img21.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img22.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container baloons-slide-section">
                <div className="row pt-3 px-3 justify-content-md-center">
                    <div className="d-flex justify-content-between">
                        <label className="slide-label">GIFTS</label>
                        <button type="button" className="btn seeMore-btn">See more</button>
                    </div>
                </div>
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner p-3">
                        <div className="carousel-item active">
                            <div className="product-review-main">
                                <div className="col-12 row">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img23.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img24.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img25.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img26.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="product-review-main">
                                <div className="col-12 row">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img23.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img24.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img25.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img26.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container baloons-slide-section">
                <div className="row pt-3 px-3 justify-content-md-center">
                    <div className="d-flex justify-content-between">
                        <label className="slide-label">BRANDS</label>
                        <button type="button" className="btn seeMore-btn">See more</button>
                    </div>
                </div>
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner p-3">
                        <div className="carousel-item active">
                            <div className="product-review-main">
                                <div className="col-12 row">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img27.png"
                                                alt="not found"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img28.png"
                                                alt="not found"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img29.png"
                                                alt="not found"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img30.png"
                                                alt="not found"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="product-review-main">
                                <div className="col-12 row">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img31.png"
                                                alt="not found"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img28.png"
                                                alt="not found"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img29.png"
                                                alt="not found"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img30.png"
                                                alt="not found"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container baloons-slide-section">
                <div className="row pt-3 px-3 justify-content-md-center">
                    <div className="d-flex justify-content-center">
                        <label className="slide-label">BEST SELLER</label>
                    </div>
                </div>
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner p-3">
                        <div className="carousel-item active">
                            <div className="product-review-main">
                                <div className="col-12 row">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img32.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img33.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img34.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img35.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="product-review-main">
                                <div className="col-12 row">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img36.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img37.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img38.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img39.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container baloons-slide-section">
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner p-3">
                        <div className="carousel-item active">
                            <div className="product-review-main">
                                <div className="col-12 row">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img23.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img24.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img25.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img26.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="product-review-main">
                                <div className="col-12 row">
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img23.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img24.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img25.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-3">
                                        <div className="product-review-card-img">
                                            <img
                                                src="/assets/images/sliderImages/slide_img26.png"
                                                alt="not found"
                                            />
                                        </div>
                                        <div className="review-card-content-main">
                                            <div>
                                                <p className="review-content-header">Product Name</p>
                                                <p className="m-0">
                                                    <span className="review-content-price">150 SAR</span
                                                    ><span className="review-content-oldprice">190 SAR</span>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>
                                                        <img
                                                            src="/assets/images/sliderImages/Star.svg"
                                                            alt="not found"
                                                            style={{"height": "10px"}}
                                                        />
                                                    </span>
                                                    <span className="review-rating-main">4.5</span>
                                                </div>
                                                <p className="review-rating-main">In stock</p>
                                            </div>
                                        </div>
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

export default HomeView