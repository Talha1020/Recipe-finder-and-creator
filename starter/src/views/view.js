import icons from 'url:../img/icons.svg';
export default class View {
  _data;
  //
  //
  clearField() {
    this._parentElement.querySelector('.search__field').value = '';
  }
  //
  //
  spinnerIcon() {
    const markup = ` <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
        </div> `;
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  //
  //
  //
  render(data) {
    this._data = data;

    const markup = this.markupGenerate();

    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
