import axios from 'axios';
import {
	FETCH_ALL_REPOS,
	SET_FETCHED_REPOS,
	FETCH_ACTIVATED_REPO_INFO,
	SET_ACTIVE_REPO_INFO,
	SET_MODAL_STATE,
	API_URL,
	REPOS_URL
} from '../constants';
import { extractLanguagesWithPercentageValue } from '../utils';

const setReposLoading = () => {
	return {
		type: FETCH_ALL_REPOS
	};
};

export const getRepos = () => (dispatch) => {
	dispatch(setReposLoading());
	axios
		.get(`${API_URL}${REPOS_URL}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`)
		.then((repos) => {
			let reposData;
			if (repos) {
				reposData = repos.data;
			} else {
				reposData = [];
			}
			dispatch({
				type: SET_FETCHED_REPOS,
				payload: reposData
			});
		})
		.catch((err) =>
			dispatch({
				type: SET_FETCHED_REPOS,
				payload: []
			})
		);
};

export const activateModal = (isOpened) => (dispatch) => {
	if (isOpened === false) {
		dispatch(setActiveRepoData(null, [], []));
	}
	dispatch({
		type: SET_MODAL_STATE,
		payload: isOpened
	});
};

export const setActiveRepoData = (title, contributors, languages) => {
	return {
		type: SET_ACTIVE_REPO_INFO,
		payload: {
			title: title,
			contributors: contributors,
			languages: languages
		}
	};
};

const getRepoData = (...urls) => {
	return Promise.all(
		urls
			.map((url) => {
				return axios.get(`${url}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`);
			})
			.map((p) => p.then((res) => res.data))
	);
};

export const setActiveRepo = (title, contributors_url, languages_url) => (dispatch) => {
	dispatch({ type: FETCH_ACTIVATED_REPO_INFO });
	getRepoData(contributors_url, languages_url).then(([ contributors, languages ]) => {
		const contributorsData = contributors.map((contributor) => ({
			id: contributor.id,
			username: contributor.login,
			avatar: contributor.avatar_url,
			url: contributor.html_url
		}));

		const languagesWithPercentageValue = extractLanguagesWithPercentageValue(languages);

		dispatch(setActiveRepoData(title, contributorsData, languagesWithPercentageValue));
	});
};
