import { getJson } from './helpers';
import { URL_API, RESULTS_PER_PAGE } from './config';
import recipeview from '../views/recipeview';
export const state = {
  recipe: {},
  search: {
    query: {},
    result: [],
    page: 1,
    PerPage: RESULTS_PER_PAGE,
  },
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJson(`${URL_API}/${id}`);
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    throw err;
  }
};
export const searchResults = async function (recipeSearch) {
  try {
    state.search.query = recipeSearch;
    const data = await getJson(`${URL_API}/?search=${recipeSearch}`);
    state.search.result = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
  } catch (err) {
    throw err;
  }
};

export const SearchResultPage = function (page = state.search.page) {
  state.search.page = page;
  const Start = (page - 1) * state.search.PerPage;
  const End = page * state.search.PerPage;
  console.log(Start, End);
  return state.search.result.slice(Start, End);
};
