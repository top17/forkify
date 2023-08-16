import View from './View';

class homeView extends View {
  _parentElement = document.querySelector('.header__logo');

  getQuery() {
    const query = this._parentElement.querySelector('.header__logo').value;
    return query;
  }

  addHandlerHome(handler) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new homeView();
