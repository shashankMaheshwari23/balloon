import React from "react";

const Footer: React.FC = () => {
    return (
        <footer>
            <div>
                <div className="footer-social-media-main">
                    <div className="social-media-flex-main">
                        <div className="social-icon">
                            <img
                                src="../../assets/images/icons/footer_icons/facebook.svg"
                            />
                        </div>
                        <p className="social-content-main">Facebook</p>
                    </div>
                    <div className="social-media-flex-main">
                        <div className="social-icon">
                            <img
                                src="../../assets/images/icons/footer_icons/instagram.svg"
                            />
                        </div>
                        <p className="social-content-main">Instagram</p>
                    </div>
                    <div className="social-media-flex-main">
                        <div className="social-icon">
                            <img src="../../assets/images/icons/footer_icons/twitter.svg" />
                        </div>
                        <p className="social-content-main">Twitter</p>
                    </div>
                </div>
                <div className="footer-content-main">
                    <div className="footer-content-flex">
                        <div>
                            <div className="footer-content-logo">
                                <img
                                    src="../../assets/images/icons/footer_icons/footer-content-logo.svg"
                                />
                            </div>
                            <p className="footer-content-para">
                                It is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its layout.
                                The point of using Lorem Ipsum is that it has a more-or-less
                                normal distribution of letters, as opposed to using 'Content
                                here, content here', making it look like readable English.
                            </p>
                        </div>
                        <div>
                            <p className="store-title">Download our app now</p>
                            <div className="footer-black-btn mb-1">
                                <div className="footer-store-icons">
                                    <img
                                        src="../../assets/images/icons/footer_icons/apple-store-icon.svg"
                                    />
                                </div>
                                <div>
                                    <p className="black-btn-para">Download on the</p>
                                    <h1 className="black-btn-heading">App Store</h1>
                                </div>
                            </div>
                            <div className="footer-black-btn">
                                <div className="footer-store-icons">
                                    <img
                                        src="../../assets/images/icons/footer_icons/google-playstore-icon.svg"
                                    />
                                </div>
                                <div>
                                    <p className="black-btn-para">Android app on</p>
                                    <h1 className="black-btn-heading">google play</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-solid-line"></div>
                    <div className="row pt-3">
                        <div className="col-12 col-md-6 col-lg-3">
                            <ul className="footer-content-list">
                                <li className="list-header">About</li>
                                <li className="list-text">About us</li>
                                <li className="list-text">Privacy policy</li>
                                <li className="list-text">Promotions subscription letter</li>
                                <li className="list-text">terms and conditions</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-2">
                            <ul className="footer-content-list">
                                <li className="list-header">TOP CATEGORIES</li>
                                <li className="list-text">Balloons</li>
                                <li className="list-text">Catering</li>
                                <li className="list-text">Photoshoot</li>
                                <li className="list-text">Perfume</li>
                                <li className="list-text">Flowers</li>
                                <li className="list-text">Gifts</li>
                                <li className="list-text">Cakes & Gourmet</li>
                                <li className="list-text">Gifts for occasion</li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-6 col-lg-2">
                            <ul className="footer-content-list">
                                <li className="list-header">Brands</li>
                                <li className="list-text">Aroy</li>
                                <li className="list-text">bloomsbury’s</li>
                                <li className="list-text">dreamdays</li>
                                <li className="list-text">Fay lawson</li>
                                <li className="list-text">kate spade new yourk</li>
                                <li className="list-text">le chocolatier</li>
                                <li className="list-text">light of Sakina</li>
                                <li className="list-text">Mirzam Chocolate</li>
                                <li className="list-text">newby Teas</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-2">
                            <ul className="footer-content-list">
                                <li className="list-header">CITIES</li>
                                <li className="list-text">Dubai</li>
                                <li className="list-text">Riyadh</li>
                                <li className="list-text">Abu Dhabi</li>
                                <li className="list-text">Jeddah</li>
                                <li className="list-text">Amman</li>
                                <li className="list-text">Jordan</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-12 col-lg-3">
                            <ul className="footer-content-list">
                                <li className="list-header">WE'RE ALWAYS HERE TO HELP</li>
                                <li className="list-text mb-2">
                                    <img
                                        src="../../assets/images/icons/footer_icons/phone_icon.svg"
                                    /><span>+91 88995 56645</span>
                                </li>
                                <li className="list-text">
                                    <img
                                        src="../../assets/images/icons/footer_icons/mail_icon.svg"
                                    /><span>support@balloons.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer