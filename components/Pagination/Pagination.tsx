import ReactPaginate from 'react-paginate';
import css from './Pagination.module.css';

interface PaginationProps {
  page: number;
  totalPages: number;
  changePage: (page: number) => void;
}

const Pagination = ({ page, totalPages, changePage }: PaginationProps) => {
  const handlePageChange = (selectedItem: { selected: number }) => {
    changePage(selectedItem.selected + 1);
  };

  return (
    <ReactPaginate
      pageCount={totalPages}
      onPageChange={handlePageChange}
      forcePage={page - 1}
      containerClassName={css.pagination}
      pageClassName={css.pageItem}
      pageLinkClassName={css.pageLink}
      activeClassName={css.active}
      previousClassName={css.pageItem}
      nextClassName={css.pageItem}
      previousLinkClassName={css.pageLink}
      nextLinkClassName={css.pageLink}
      disabledClassName={css.disabled}
    />
  );
};

export default Pagination;

