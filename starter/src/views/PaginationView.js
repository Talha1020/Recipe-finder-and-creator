import View from './view';
import icons from 'url:../img/icons.svg';
import { state } from '../js/model';
class RenderPaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  markupGenerate() {
    const currentPage = this._data.page;

    console.log(this._data.result.length);
    console.log(this._data.PerPage);
    const numPages = Math.ceil(this._data.result.length / this._data.PerPage);
    console.log(numPages);
    if (currentPage === 1 && numPages > 1) {
      return `<button class="btn--inline pagination__btn--next">
      <span>Page ${currentPage + 1}</span>
      <svg class="search__icon">
      <use href="src/img/icons.svg#icon-arrow-right"></use>
      </svg>
      </button>`;
    }
    //
    //
    //
    if (currentPage === numPages && currentPage > 1) {
      return `<button class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
    <use href="src/img/icons.svg#icon-arrow-left"></use>
    </svg>
    <span>Page ${currentPage - 1}</span>
    </button>`;
    }
    //
    //
    if (currentPage < numPages) {
      return `<button class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
    <use href="src/img/icons.svg#icon-arrow-left"></use>
    </svg>
    <span>Page ${currentPage - 1}</span>
    </button>
    <button class="btn--inline pagination__btn--next">
    <span>Page ${currentPage + 1}</span>
    <svg class="search__icon">
    <use href="src/img/icons.svg#icon-arrow-right"></use>
    </svg>
    </button>`;
    }

    return '';
  }
}
export default new RenderPaginationView();
