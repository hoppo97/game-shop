import React from 'react';
import './Pagination.css';
export const Pagination = ({page, currentPage, dispatchCurrentPage}) => {

  const onClickPaginate = () => {
    dispatchCurrentPage(page)
  }

  return (
       <span onClick={onClickPaginate} className={`pagination ${ currentPage === page && "home-page__span-select"}`}>{page}</span>
  )
}

