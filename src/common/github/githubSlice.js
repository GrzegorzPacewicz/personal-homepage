import {createSlice} from "@reduxjs/toolkit";

const githubSlice = createSlice({
    name: "github",
    initialState: {
        reposStatus: "loading",
        repos: [],
    },
    reducers: {
        fetchRepos: (state) => {
            state.reposStatus = "loading";
        },
        fetchReposSuccess: (state, {payload: repos}) => {
            state.reposStatus = "success";
            state.repos = repos;
        },
        fetchReposError: (state) => {
            state.reposStatus = "error";
        },
            }
    });

export const {fetchRepos, fetchReposSuccess, fetchReposError,} = githubSlice.actions;

export const selectGitHubState = state => state.github;

export const selectRepos = state => selectGitHubState(state).repos;
export const selectReposStatus = state => selectGitHubState(state).reposStatus;

export default  githubSlice.reducer;