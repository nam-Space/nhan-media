import React from "react";

import arrow from "../assets/images/Vector.png";
import qr from "../assets/images/Creative.png";
import sun from "../assets/images/Rectangle 8.png";
import girl from "../assets/images/Rectangle 9.png";
import boss1 from "../assets/images/Rectangle 10.png";
import boss2 from "../assets/images/Rectangle 11.png";
import "../styles/bodyContent.scss";
import Border from "./Border";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BodyContent = () => {
    return (
        <div className="wrapper-img">
            <img src={qr} alt="" className="qr-img" />
            <div className="blur-img"></div>
            <div className="sun-img-wrapper-real">
                <img src={sun} alt="" className="sun-img-real" />
                <Swiper
                    loop={true}
                    className="wrapper-img"
                    slidesPerView={3}
                    slidesPerGroup={3}
                    speed={800}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                        769: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        1025: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="leader-girl">
                            <img src={girl} alt="" className="girl-img" />
                            <div className="leader-info">
                                <p>Name: Huong Le</p>
                                <p>Title: Account Leader</p>
                                <p>Slogan: Huong Le beo nhat tran doi</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="leader-boss1">
                            <img src={boss1} alt="" className="boss1-img" />
                            <div className="leader-info">
                                <p>Name: Justin Le</p>
                                <p>Title: CEO</p>
                                <p>Slogan: Hai Sua</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="leader-boss2">
                            <img src={boss2} alt="" className="boss2-img" />
                            <div className="leader-info">
                                <p>Name: Phung Nhat Chieu</p>
                                <p>Title: Design Leader</p>
                                <p>Slogan: hehe</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <Border />
        </div>
    );
};

export default BodyContent;
