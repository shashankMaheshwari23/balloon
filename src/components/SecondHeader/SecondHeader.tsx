import React from 'react'
import cn from 'classnames'
import styles from './SecondHeader.module.css'

const SecondHeader: React.FC = () => {
    return (
        <div className={cn("text-center", styles.header_second)}>
            <div className="row col-12 p-4">
                <div className="container px-4 text-center">
                    <div className="row gx-0 gy-4">
                        <div className={cn("col", styles.header_second_item)}>
                            <img
                                src="../../assets/images/icons/header_icons/baloon_icon.svg"
                                alt=""
                            />
                            <p className="pt-1">BALOONS</p>
                        </div>
                        <div className={cn("col", styles.header_second_item)}>
                            <img
                                src="../../assets/images/icons/header_icons/catering_icon.svg"
                                alt=""
                            />
                            <p className="pt-1">CATERING</p>
                        </div>
                        <div className={cn("col", styles.header_second_item)}>
                            <img
                                src="../../assets/images/icons/header_icons/occ_gift_icon.svg"
                                alt=""
                            />
                            <p className="pt-1">GIFTS FOR OCCASIONS</p>
                        </div>
                        <div className={cn("col", styles.header_second_item)}>
                            <img
                                src="../../assets/images/icons/header_icons/flower_icon.svg"
                                alt=""
                            />
                            <p className="pt-1">FLOWERS</p>
                        </div>
                        <div className={cn("col", styles.header_second_item)}>
                            <img
                                src="../../assets/images/icons/header_icons/cake_icon.svg"
                                alt=""
                            />
                            <p className="pt-1">CAKES & GOURMENT</p>
                        </div>
                        <div className={cn("col", styles.header_second_item)}>
                            <img
                                src="../../assets/images/icons/header_icons/photoshoot_icon.svg"
                                alt=""
                            />
                            <p className="pt-1">PHOTOSHOOT</p>
                        </div>
                        <div className={cn("col", styles.header_second_item)}>
                            <img
                                src="../../assets/images/icons/header_icons/gifts_icon.svg"
                                alt=""
                            />
                            <p className="pt-1">GIFTS</p>
                        </div>
                        <div className={cn("col", styles.header_second_item)}>
                            <img
                                src="../../assets/images/icons/header_icons/brands_icon.svg"
                                alt=""
                            />
                            <p className="pt-1">BRANDS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SecondHeader