import View from './view';
class SearchResultView extends View {
  _parentElement = document.querySelector('.search');
  getQuery() {
    return this._parentElement.querySelector('.search__field').value;
  }

  addhandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchResultView();
