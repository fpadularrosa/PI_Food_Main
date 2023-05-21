import {
    GET_RECIPES,
    GET_DIETS,
    GET_DETAIL,
    POST_RECIPE,
    GET_RECIPES_BY_NAME,
    FILTER_RECIPES,
    ALPHABETICAL_SORT,
    SCORE_SORT,
    HEALTH_SORT,
    CLEAR_STORE
} from "./constants";
import axios from 'axios';

export function getRecipes(){
    return async function(dispatch){
        try {
            const recipes = await axios.get('/recipes');
            if(recipes?.data){
                dispatch({ type: GET_RECIPES, payload: recipes.data })
            }
        } catch (err) {
            dispatch({ type: GET_RECIPES, payload:  err.toString() })
        }
    }
}

export function getDetails(id) {
    return async function (dispatch) {
        try {
            const details = await axios.get(`/recipes/${id}`);
            if(details?.data){
                dispatch({ type: GET_DETAIL, payload: details.data})
            }
        } catch (err) {
            dispatch({ type: GET_DETAIL, payload:  err.toString()})
        }
    }
}

export function getDiets() {
    return async function (dispatch) {
        try {
            const diets = await axios.get('/types');
            if(diets?.data){
                dispatch({type: GET_DIETS, payload: diets.data})
            }
        } catch (err) {
            dispatch({ type: GET_DIETS, payload: err.toString() })
        }
    }
}

export function postRecipe(input) {
    return async function (dispatch) {
        try {
            const newRecipe = await axios.post("/recipe", input, {
                headers:{'content-type':'application/json'}});
                if(newRecipe?.data){
                    dispatch({ type: POST_RECIPE, payload: newRecipe.data });
                }
        } catch (err) {
            dispatch({ type: POST_RECIPE, payload:  err.toString()})
        }
    }
}

export const getRecipesByName = name => async dispatch => {
    try {
        const recipesByName = await axios.get(`/recipes?name=${name}`);
        if(recipesByName?.data){
            dispatch({type: GET_RECIPES_BY_NAME, payload: recipesByName.data});
        }
    } catch (err) {
        dispatch({type: GET_RECIPES_BY_NAME, payload: err.toString()});
    }
}

export function clearStore(storeName) {
    return{
      type: CLEAR_STORE,
      payload: storeName
    }
}

export const filterBy = diet => {
    return {
        type: FILTER_RECIPES,
        payload: diet
    }
}

export function alphabeticalSort(order) {
    return {
        type: ALPHABETICAL_SORT,
        payload: order
    }
};

export function scoreSort(score) {
    return {
        type: SCORE_SORT,
        payload: score
    }
}

export function healthSort(score) {
    return {
        type: HEALTH_SORT,
        payload: score
    }
}