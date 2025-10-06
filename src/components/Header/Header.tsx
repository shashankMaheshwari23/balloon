import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from 'balloon/firebaseConfig'

const Header: React.FC = () => {

  const handleSubmit = () => {
    const authentication = getAuth(app);

    // createUserWithEmailAndPassword(authentication, "shashank.23061992@yahoo.com", "password@123")
    //   .then((response) => {
    //     console.log(response?._tokenResponse?.refreshToken)
    //   })
  }
  return (
    // <nav classNameName={cn(styles.navbar, "navbar", "navbar-expand-lg")}>
    //   <div classNameName="container-fluid">
    //     <a classNameName={cn(styles.navbar_brand, "navbar-brand")} href="/search">
    //       <img src="/assets/images/icons/header_icons/logo.svg" alt="" />
    //     </a>
    //     <button
    //       classNameName="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span classNameName="navbar-toggler-icon"></span>
    //     </button>
    //     <div classNameName="collapse navbar-collapse" id="navbarNav">
    //       <div classNameName={cn("container", "px-4", styles.header_search, "mt-4")}>
    //         <div classNameName="row gx-5 gy-3">
    //           <div classNameName={cn("col-lg-7", "col-sm-12", styles.search_section)}>
    //             <div classNameName="border bg-light">
    //               <form classNameName="d-flex" role="search" onSubmit={() => { Router.push('http://localhost:3000/search') }}>
    //                 <input
    //                   classNameName={cn("form-control", styles.header_search)}
    //                   type="search"
    //                   placeholder="Search for Gifts"
    //                   aria-label="Search"
    //                 />
    //                 <img
    //                   classNameName={styles.search_icon}
    //                   src="../../assets/images/icons/header_icons/Search_icon.svg"
    //                   alt=""
    //                 />
    //               </form>
    //             </div>
    //           </div>
    //           <div classNameName={cn('col', styles.country_dropdown_section, 'ms-5')}>
    //             <div classNameName="p-1 d-flex gap-4">
    //               <label classNameName={cn(styles.dropdown_label)}>عربى</label>
    //               <label>|</label>
    //               <div classNameName="dropdown-lg-center">
    //                 <button
    //                   classNameName={cn('btn', 'p-0', 'dropdown-toggle', styles.country_name_label)}
    //                   type="button"
    //                   data-bs-toggle="dropdown"
    //                   aria-expanded="false"
    //                 >
    //                   <img
    //                     classNameName="mx-2"
    //                     src="../../assets/images/icons/header_icons/united_arab_emirates_flag.svg"
    //                     alt=""
    //                   />
    //                   UAE
    //                 </button>
    //                 <div
    //                   classNameName={cn('dropdown-menu', 'dropdown-menu-sm-start', 'dropdown-menu-lg-end', styles.country_list, 'my-2 p-0')}>
    //                   <div
    //                     classNameName={cn("d-flex", "justify-content-between", styles.country_list_inner_div)}
    //                   >
    //                     <div>
    //                       <label htmlFor="" classNameName={styles.dropdown_header}
    //                       >Choose Country</label
    //                       >
    //                       <p classNameName={styles.dropdown_question}>
    //                         Which country would you like to send a gift to?
    //                       </p>
    //                     </div>
    //                     <div>
    //                       <img
    //                         src="../../assets/images/icons/header_icons/dropdown_cross.svg"
    //                         alt=""
    //                       />
    //                     </div>
    //                   </div>
    //                   <div classNameName="container text-center">
    //                     <div classNameName="row g-2">
    //                       <div classNameName="col-lg-3 col-sm-6">
    //                         <div classNameName={cn("p-3", styles.flag_icon)}>
    //                           <img
    //                             src="../../assets/images/icons/header_icons/yemen_flag.svg"
    //                             alt=""
    //                           />
    //                           <p classNameName="m-0">Yemen</p>
    //                         </div>
    //                       </div>
    //                       <div classNameName="col-lg-3 col-sm-6">
    //                         <div classNameName={cn("p-3", styles.flag_icon)}>
    //                           <img
    //                             src="../../assets/images/icons/header_icons/saudi_arabia_flag.svg"
    //                             alt=""
    //                           />
    //                           <p classNameName="m-0">saudi arabia</p>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>

    //                   <div classNameName={styles.country_list_inner_div}>
    //                     <label htmlFor="" classNameName={styles.dropdown_header}
    //                     >Choose City for Delivery</label
    //                     >
    //                   </div>
    //                   <div classNameName="container text-center mb-3">
    //                     <div classNameName="row g-2">
    //                       <div classNameName="col-lg-3 col-sm-6">
    //                         <div classNameName={cn("p-3", styles.flag_icon)}>
    //                           <img
    //                             src="/assets/images/icons/header_icons/riyadh_img.png"
    //                             alt=""
    //                           />
    //                           <p classNameName="m-0">Riyadh</p>
    //                         </div>
    //                       </div>
    //                       <div classNameName="col-lg-3 col-sm-6">
    //                         <div classNameName={cn("p-3", styles.flag_icon)}>
    //                           <img
    //                             src="../../assets/images/icons/header_icons/Taif_img.png"
    //                             alt=""
    //                           />
    //                           <p classNameName="m-0">Taif</p>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>

    //               <div classNameName="dropdownr mx-4">
    //                 <button
    //                   classNameName={cn("btn", "dropdown-toggle", styles.shopping_toggle, "p-0")}
    //                   type="button"
    //                   id="dropdownMenu2"
    //                   data-bs-toggle="dropdown"
    //                   aria-expanded="false"
    //                 >
    //                   <img
    //                     src="../../assets/images/icons/header_icons/Shopping_Bag_icon.svg"
    //                     alt=""
    //                   />
    //                 </button>
    //                 <div
    //                   classNameName={cn('dropdown-menu', 'dropdown-menu-sm-start', 'dropdown-menu-lg-end', styles.country_list, 'my-2 p-0')}
    //                   aria-labelledby="dropdownMenu2"
    //                 >
    //                   <div classNameName={cn(styles.country_list_inner_div, 'text-center')}>
    //                     <label htmlFor="" classNameName={styles.dropdown_header}
    //                     >Create Account</label
    //                     >
    //                   </div>
    //                   <div classNameName="container register-section">
    //                     <div classNameName="row p-3">
    //                       <div classNameName="col-lg-6 col-sm-12">
    //                         <button
    //                           type="button"
    //                           classNameName="btn social-btn mb-3 text-start"
    //                         >
    //                           <img
    //                             src="../../assets/images/icons/header_icons/google_social_icon.svg"
    //                             alt=""
    //                           />
    //                           <span classNameName="m-2"> GOOGLE </span>
    //                         </button>
    //                       </div>
    //                       <div classNameName="col-lg-6 col-sm-12">
    //                         <button
    //                           type="button"
    //                           classNameName="btn social-btn mb-3 text-start"
    //                         >
    //                           <img
    //                             src="../../assets/images/icons/header_icons/facebook_social_icon.svg"
    //                             alt=""
    //                           />
    //                           <span classNameName="m-2">FACEBOOK</span>
    //                         </button>
    //                       </div>
    //                       <div classNameName="d-flex email-login">
    //                         <span>
    //                           <hr />
    //                         </span>
    //                         <span classNameName="m-2"> Or Email </span>
    //                         <span>
    //                           <hr />
    //                         </span>
    //                       </div>
    //                       <div classNameName="col-12">
    //                         <div classNameName="mb-3">
    //                           <input
    //                             type="text"
    //                             classNameName="form-control"
    //                             id="formGroupExampleInput"
    //                             placeholder="Email"
    //                           />
    //                         </div>
    //                       </div>
    //                       <div classNameName="col-12">
    //                         <div classNameName="mb-3">
    //                           <input
    //                             type="password"
    //                             classNameName="form-control"
    //                             id="inputPassword4"
    //                             placeholder="Password"
    //                           />
    //                         </div>
    //                       </div>
    //                       <div classNameName="col-12">
    //                         <div classNameName="mb-3">
    //                           <input
    //                             type="submit"
    //                             classNameName="form-control"
    //                             value="Sign Up"
    //                             onClick={handleSubmit}
    //                           />
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div classNameName="dropdown-center">
    //                 <button
    //                   classNameName={cn("btn", "dropdown-toggle", styles.shopping_toggle, "p-0")}
    //                   type="button"
    //                   id="dropdownUser"
    //                   data-bs-toggle="dropdown"
    //                   aria-expanded="false"
    //                 >
    //                   <img
    //                     src="../../assets/images/icons/header_icons/User_icon.svg"
    //                     alt=""
    //                   />
    //                 </button>
    //                 <ul classNameName="dropdown-menu" aria-labelledby="dropdownUser">
    //                   <li>
    //                     <button classNameName="dropdown-item" type="button">
    //                       Action
    //                     </button>
    //                   </li>
    //                   <li>
    //                     <button classNameName="dropdown-item" type="button">
    //                       Another action
    //                     </button>
    //                   </li>
    //                   <li>
    //                     <button classNameName="dropdown-item" type="button">
    //                       Something else here
    //                     </button>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <div className="container">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid p-1">
        <a className="navbar-brand" href="#">
          <img src="../../assets/images/icons/header_icons/logo.svg" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="container px-4 header_search mt-4">
            <div className="row gx-3 gy-3">
              <div className="col-lg-7 col-sm-12 search_section ms-lg-5 p-0">
                <div className="border bg-light">
                  <form className="d-flex" role="search">
                    <input
                      className="form-control header_search"
                      type="search"
                      placeholder="Search for Gifts"
                      aria-label="Search"
                    />
                    <img
                      className="search_icon"
                      src="../../assets/images/icons/header_icons/Search_icon.svg"
                      alt=""
                    />
                  </form>
                </div>
              </div>
              <div className="col country_dropdown_section p-0">
                <div
                  className="p-1 d-flex gap-2 justify-content-lg-end justify-content-sm-center"
                >
                  <label className="dropdown_label">عربى</label>
                  <label>|</label>
                  <div className="dropdown-lg-center">
                    <button
                      className="btn p-0 dropdown-toggle country_name_label"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        className="mx-2"
                        src="../../assets/images/icons/header_icons/united_arab_emirates_flag.svg"
                        alt=""
                      />
                      UAE
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-sm-start dropdown-menu-lg-end country_list my-2 p-0"
                    >
                      <div
                        className="d-flex justify-content-between country_list_inner_div"
                      >
                        <div>
                          <label htmlFor="" className="dropdown_header"
                            >Choose Country</label
                          >
                          <p className="dropdown_question">
                            Which country would you like to send a gift to?
                          </p>
                        </div>
                        <div>
                          <img
                            src="../../assets/images/icons/header_icons/dropdown_cross.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="container text-center">
                        <div className="row g-2">
                          <div className="col-lg-3 col-sm-6">
                            <div className="p-3 flag_icon">
                              <img
                                src="../../assets/images/icons/header_icons/yemen_flag.svg"
                                alt=""
                              />
                              <p className="m-0">Yemen</p>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6" id="rtl-button">
                            <div className="p-3 flag_icon">
                              <img
                                src="../../assets/images/icons/header_icons/saudi_arabia_flag.svg"
                                alt=""
                              />
                              <p className="m-0">saudi arabia</p>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <div className="p-3 flag_icon">
                              <img
                                src="../../assets/images/icons/header_icons/qatar_flag.svg"
                                alt=""
                              />
                              <p className="m-0">qatar</p>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <div className="p-3 flag_icon">
                              <img
                                src="../../assets/images/icons/header_icons/sudan_flag.svg"
                                alt=""
                              />
                              <p className="m-0">Sudan</p>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <div className="p-3 flag_icon">
                              <img
                                src="../../assets/images/icons/header_icons/oman_flag.svg"
                                alt=""
                              />
                              <p className="m-0">oman</p>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <div className="p-3 flag_icon">
                              <img
                                src="../../assets/images/icons/header_icons/egypt_flag.svg"
                                alt=""
                              />
                              <p className="m-0">egypt</p>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <div className="p-3 flag_icon">
                              <img
                                src="../../assets/images/icons/header_icons/united arab emirates.svg"
                                alt=""
                              />
                              <p className="m-0">UAE</p>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <div className="p-3 flag_icon">
                              <img
                                src="../../assets/images/icons/header_icons/jordan_flag.svg"
                                alt=""
                              />
                              <p className="m-0">Jordan</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="country_list_inner_div">
                        <label htmlFor="" className="dropdown_header"
                          >Choose City for Delivery</label
                        >
                      </div>
                      <div className="container text-center mb-3">
                        <div className="row g-2">
                          <div className="col-lg-3 col-sm-6">
                            <div className="p-3 flag_icon">
                              <img
                                src="../../assets/images/icons/header_icons/riyadh_img.png"
                                alt=""
                              />
                              <p className="m-0">Riyadh</p>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <div className="p-3 flag_icon">
                              <img
                                src="../../assets/images/icons/header_icons/Taif_img.png"
                                alt=""
                              />
                              <p className="m-0">Taif</p>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <div className="p-3 flag_icon">
                              <img
                                src="../../assets/images/icons/header_icons/Madina_img.png"
                                alt=""
                              />
                              <p className="m-0">Madina</p>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <div className="p-3 flag_icon">
                              <img
                                src="../../assets/images/icons/header_icons/Mecca_img.png"
                                alt=""
                              />
                              <p className="m-0">Mecca</p>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <div className="p-3 flag_icon">
                              <img
                                src="../../assets/images/icons/header_icons/Tabuk_img.png"
                                alt=""
                              />
                              <p className="m-0">Tabuk</p>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <div className="p-3 flag_icon">
                              <img
                                src="../../assets/images/icons/header_icons/Dammam_img.png"
                                alt=""
                              />
                              <p className="m-0">Dammam</p>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <div className="p-3 flag_icon">
                              <img
                                src="../../assets/images/icons/header_icons/Jeddah_img.png"
                                alt=""
                              />
                              <p className="m-0">Jeddah</p>
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <div className="p-3 flag_icon">
                              <img
                                src="../../assets/images/icons/header_icons/AlKhobar_img.png"
                                alt=""
                              />
                              <p className="m-0">Al Khobar</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal p-0 w-100"
                    id="registerModal"
                    aria-labelledby="registerModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header border-0">
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="country_list_inner_div text-center">
                            <label htmlFor="" className="dropdown_header"
                              >Create Account</label
                            >
                          </div>
                          <div className="container register_section">
                            <div className="row p-3">
                              <div className="col-lg-6 col-sm-12">
                                <button
                                  type="submit"
                                  className="btn social-btn mb-3 text-start"
                                >
                                  <img
                                    src="../../assets/images/icons/header_icons/google_social_icon.svg"
                                    alt=""
                                  />
                                  <span className="m-2"> GOOGLE </span>
                                </button>
                              </div>
                              <div className="col-lg-6 col-sm-12">
                                <button
                                  type="submit"
                                  className="btn facebook-btn mb-3 text-start"
                                >
                                  <img
                                    src="../../assets/images/icons/header_icons/facebook_social_icon.svg"
                                    alt=""
                                  />
                                  <span className="m-2">FACEBOOK</span>
                                </button>
                              </div>
                              <div
                                className="d-flex email_login justify-content-between"
                              >
                                <span>
                                  <hr />
                                </span>
                                <span className="m-2"> Or Email </span>
                                <span>
                                  <hr />
                                </span>
                              </div>
                              <div className="col-12">
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    placeholder="Email"
                                  />
                                </div>
                              </div>
                              <div
                                className="col-sm-12 col-md-6 col-lg-12 col-xl-12"
                              >
                                <div className="input-group mb-3">
                                  <input
                                    type="password"
                                    className="form-control"
                                    aria-label="newPassword"
                                    id="newPassword"
                                    value="12345"
                                  />
                                  <span className="input-group-text password">
                                    <img
                                      src="../../assets/images/icons/CommonIcon/EyeIcon.svg"
                                      alt="eye"
                                      className="mx-auto"
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="input-group mb-3">
                                <select
                                  id="addressType"
                                  className="form-select w_10"
                                >
                                  <option>+91</option>
                                  <option>+92</option>
                                </select>
                                <div className="border-left"></div>
                                <input
                                  type="text"
                                  className="form-control w_80"
                                  id="phoneNumber"
                                  placeholder="9890740354"
                                />
                              </div>
                              <div className="col-lg-6 col-sm-12">
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    placeholder="First name"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-sm-12">
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    placeholder="Last name"
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="mb-2 text-center">
                                  <button
                                    type="submit"
                                    className="btn create-btn mb-3"
                                  >
                                    Create Account
                                  </button>
                                </div>
                              </div>
                              <div className="col-12 text-center have-account">
                                <p>
                                  Already Have an account?
                                  <span
                                    data-bs-toggle="modal"
                                    data-bs-target="#loginModal"
                                    >Login</span
                                  >
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal p-0 w-100"
                    id="loginModal"
                    aria-labelledby="loginModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header border-0">
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="country_list_inner_div text-center">
                            <label htmlFor="" className="dropdown_header"
                              >Login</label
                            >
                          </div>
                          <div className="container register_section">
                            <div className="row p-3">
                              <div className="col-lg-6 col-sm-12">
                                <button
                                  type="submit"
                                  className="btn social-btn mb-3 text-start"
                                >
                                  <img
                                    src="../../assets/images/icons/header_icons/google_social_icon.svg"
                                    alt=""
                                  />
                                  <span className="m-2"> GOOGLE </span>
                                </button>
                              </div>
                              <div className="col-lg-6 col-sm-12">
                                <button
                                  type="submit"
                                  className="btn facebook-btn mb-3 text-start"
                                >
                                  <img
                                    src="../../assets/images/icons/header_icons/facebook_social_icon.svg"
                                    alt=""
                                  />
                                  <span className="m-2">FACEBOOK</span>
                                </button>
                              </div>
                              <div
                                className="d-flex email_login justify-content-between"
                              >
                                <span>
                                  <hr />
                                </span>
                                <span className="m-2"> Or Email </span>
                                <span>
                                  <hr />
                                </span>
                              </div>
                              <div className="col-12">
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    placeholder="Email"
                                  />
                                </div>
                              </div>
                              <div
                                className="col-sm-12 col-md-6 col-lg-12 col-xl-12"
                              >
                                <div className="input-group mb-3">
                                  <input
                                    type="password"
                                    className="form-control"
                                    aria-label="newPassword"
                                    id="newPassword"
                                    value="12345"
                                  />
                                  <span className="input-group-text password">
                                    <img
                                      src="../../assets/images/icons/CommonIcon/EyeIcon.svg"
                                      alt="eye"
                                      className="mx-auto"
                                    />
                                  </span>
                                </div>
                              </div>

                              <div className="col-12">
                                <div className="mb-2 text-center">
                                  <button
                                    type="submit"
                                    className="btn create-btn mb-3"
                                  >
                                    Sign In
                                  </button>
                                </div>
                              </div>
                              <div className="col-12 text-center have-account">
                                <p>
                                  Don’t have account yet?
                                  <span
                                    data-bs-toggle="modal"
                                    data-bs-target="#registerModal"
                                    >Create Account</span
                                  >
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="dropdown-center mx-2">
                    <button
                      className="btn p-0"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#staticBackdrop"
                      aria-controls="staticBackdrop"
                    >
                      <img
                        src="../../assets/images/icons/header_icons/Shopping_Bag_icon.svg"
                        alt=""
                      />
                    </button>
                  </div>
                  <div className="dropdown-center mx-2">
                    <button
                      className="btn p-0"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#registerModal"
                    >
                      <img
                        src="../../assets/images/icons/header_icons/User_icon.svg"
                        alt=""
                      />
                    </button>
                  </div>

                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn p-0 dropdown-toggle"
                      data-bs-toggle="dropdown"
                      data-bs-display="static"
                      aria-expanded="false"
                    >
                      <img
                        src="../../assets/images/icons/header_icons/User_icon.svg"
                        alt=""
                      />
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-end mt-4 profile_menu"
                    >
                      <li>
                        <label className="user-profile-label ms-3">
                          Hi, Shaikh Altaf
                        </label>
                      </li>
                      <li><hr className="dropdown-divider w-70" /></li>
                      <li>
                        <button className="dropdown-item" type="button">
                          <a
                            href="../MyAccount/MyAccount.html"
                            className="text-decoration-none cursor-pointer"
                          >
                            <img
                              src="../../assets/images/icons/header_icons/User_icon.svg"
                              alt=""
                              style={{"cursor": "pointer"}}
                            />
                            <label
                              className="profile-label m-2"
                              style={{"cursor": "pointer"}}
                            >
                              My Account
                            </label>
                          </a>
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button">
                          <a
                            href="../Address/Address.html"
                            className="text-decoration-none"
                          >
                            <img
                              src="../../assets/images/icons/header_icons/profile_map.svg"
                              alt=""
                              style={{"cursor": "pointer"}}
                            />
                            <label
                              className="profile-label m-2"
                              style={{"cursor": "pointer"}}
                            >
                              Addresses
                            </label>
                          </a>
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button">
                          <a
                            href="../MyOrders/MyOrders.html"
                            className="text-decoration-none"
                          >
                            <img
                              src="../../assets/images/icons/header_icons/box-tick.svg"
                              alt=""
                              style={{"cursor": "pointer"}}
                            />
                            <label
                              className="profile-label m-2"
                              style={{"cursor": "pointer"}}
                            >
                              Orders</label
                            >
                          </a>
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button">
                          <img
                            src="../../assets/images/icons/header_icons/logout.svg"
                            alt=""
                          />
                          <label className="profile-label m-2"> Logout </label>
                        </button>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Header
