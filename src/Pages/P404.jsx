import React from "react";

import "./F404.scss";

//import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <div className="content">
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
            </div>
        </div>
    );
};

export default PageNotFound;