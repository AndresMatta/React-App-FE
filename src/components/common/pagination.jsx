import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = props => {
  const { currentPage, itemCount, pageSize, onPageChange } = props;
  const pageCount = itemCount / pageSize;

  if (pageCount <= 1) return null;

  const pages = _.range(1, pageCount + 1);

  return (
    <React.Fragment>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {pages.map(page => {
            return (
              <li
                key={page}
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <button
                  className="page-link"
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </React.Fragment>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
