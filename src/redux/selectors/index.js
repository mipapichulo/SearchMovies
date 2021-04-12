import { get } from 'lodash';

export const isSearchLoading = state => get(state, 'search.isLoading');
export const movieResults = state => get(state, 'search.movieResults.Search');
export const movieResultById = state => get(state, 'search.movie.Search');