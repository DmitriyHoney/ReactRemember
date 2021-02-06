import React from "react";

import cls from './Paginate.module.css'

class Paginate extends React.Component {

    handleClickPaginate(page) {
        if (page === this.props.currentPage) return;
        this.props.click(page)
    }

    //quantity, currentPage, @click, display (?)

    generateArrayNumbers(from, to) {
        let result = [];
        for (let i = from; i <= to; i++) {
            result.push(i)
        }
        return result;
    }

    render() {
        if (!this.props.quantity || this.props.quantity <= 0) return false
        let allPages = this.generateArrayNumbers(1, this.props.quantity);

        return <div className={cls.wrap}>
            {allPages.map(page => {
                return <div
                    className={`${cls.item} ${Number(this.props.currentPage) === Number(page) ? cls.active : ''}`}
                    key={page}
                    onClick={() => this.handleClickPaginate(page)}
                >
                    {page}
                </div>
            })}
        </div>
    }
}

export default Paginate;