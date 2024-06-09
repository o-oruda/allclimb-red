import React from "react";

import styles from "./Search.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Search = () => {
    return (
        <div className={cx('search')}>
            <div className={cx('search-box')}>
                <input
                    type="text"
                    placeholder="클라이밍장 검색"
                    title="검색창"
                    className={cx('search-box__input')}
                />
                {/* TODO [F/E] - 노출시 한글자라도 있고 포커스 시 search-box__clear--active 추가 */}
                <button
                    className={cx('search-box__clear', 'search-box__clear--active')}
                    type="button"
                >
                    <span className="blind">입력 삭제</span>
                </button>
            </div>
            <button
                className={cx('search__close')}
                type="button"
            >
                취소
            </button>
        </div>
    )
}

export default Search;