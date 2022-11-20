import React from "react";
import Border from "./Border";

import "../styles/headerContent.scss";

const HeaderContent = () => {
    return (
        <>
            <Border />
            <section className="wrapper-text">
                <p className="title">
                    Better people, better solution
                    <span>.</span>
                </p>
                <p className="desc">
                    Gathering highly specialized individuals with many years of
                    experience in the field of communication - marketing,
                    confidently helping your brand conquer shining milestones
                </p>
            </section>
        </>
    );
};

export default HeaderContent;
