import React from "react";

import styles from './MainPage.module.scss';
import classNames from 'classnames/bind';
import MainSearch from "./popup/MainSearch/MainSearch";
import Search from "components/Search/Search";
import ClimbingLogo from "components/ClimbingLogo/ClimbingLogo";

const cx = classNames.bind(styles);

const MainPage = () => {
    return (
        <>
            <MainSearch/>
        </>
    )
}

export default MainPage;