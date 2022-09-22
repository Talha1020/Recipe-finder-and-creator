import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import RecipeView from '../views/recipeview.js';
import SearchResultView from '../views/searchView';
import RenderViewSearch from '../views/RenderView.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    //
    //
    RecipeView.spinnerIcon();
    //
    //
    await model.loadRecipe(id);
    //
    //

    RecipeView.render(model.state.recipe);
    //
  } catch (err) {
    console.error(err);
  }
};

const controlSearchResult = async function () {
  try {
    RenderViewSearch.spinnerIcon();
    const query = SearchResultView.getQuery();
    if (!query) return;
    SearchResultView.clearField();
    await model.searchResults(query);

    RenderViewSearch.render(model.state.search.result);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  RecipeView.addhandlerRender(showRecipe);
  SearchResultView.addhandlerSearch(controlSearchResult);
};

init();
