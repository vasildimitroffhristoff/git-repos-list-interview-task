import axios from 'axios';
import { SET_FETCHED_REPOS, SET_ACTIVE_REPO_DATA, SET_MODAL_STATE, API_URL, REPOS_URL } from '../constants';
import { extractLanguagesWithPercentageValue } from '../utils';

export const getRepos = () => (dispatch) => {
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

const setActiveRepoData = (title, contributors, languages) => {
	return {
		type: SET_ACTIVE_REPO_DATA,
		payload: {
			title: title,
			contributors: contributors,
			languages: languages
		}
	};
};

const getActiveRepoData = (...urls) => {
	const promises = urls
		.map((url) => {
			return axios.get(`${url}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`);
		})
		.map((p) => p.then((res) => res.data));
	return Promise.all(promises);
};

export const setActiveRepo = (title, contributors_url, languages_url) => (dispatch) => {
	dispatch(activateModal(true));
	getActiveRepoData(contributors_url, languages_url)
		.then(([ contributors, languages ]) => {
			const contributorsData = contributors.map((contributor) => ({
				id: contributor.id,
				username: contributor.login,
				avatar: contributor.avatar_url,
				url: contributor.html_url
			}));

			const languagesWithPercentageValue = extractLanguagesWithPercentageValue(languages);

			dispatch(setActiveRepoData(title, contributorsData, languagesWithPercentageValue));
		})
		.catch((err) => {
			console.log('Something went wrong in the request.');
		});
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
