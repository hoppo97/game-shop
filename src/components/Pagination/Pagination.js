import React from 'react';
import './Pagination.css';
import  useWhyDidYouUpdate  from 'ahooks/lib/useWhyDidYouUpdate';

export const Pagination = React.memo(({page, currentPage, dispatchCurrentPage}) => {
  useWhyDidYouUpdate('Pagination', {page, currentPage, });
  const onClickPaginate = () => {
    dispatchCurrentPage(page);
  };

  return (
       <span onClick={onClickPaginate} className={`pagination ${ currentPage === page && "home-page__span-select"}`}>{page}</span>
  )
});
