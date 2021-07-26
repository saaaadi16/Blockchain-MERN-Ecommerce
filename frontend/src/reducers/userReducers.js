import {
	USER_LOGIN_FAILURE,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_REGISTER_FAILURE,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_REQUEST,
	USER_CONFIRM_REQUEST,
	USER_CONFIRM_SUCCESS,
	USER_CONFIRM_FAILURE,
	USER_DETAILS_FAILURE,
	USER_DETAILS_SUCCESS,
	USER_DETAILS_REQUEST,
	USER_PROFILE_UPDATE_REQUEST,
	USER_PROFILE_UPDATE_SUCCESS,
	USER_PROFILE_UPDATE_FAILURE,
	USER_PROFILE_UPDATE_RESET,
	USER_LOGIN_REFRESH_REQUEST,
	USER_LOGIN_REFRESH_SUCCESS,
	USER_LOGIN_REFRESH_FAILURE,
} from '../constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
			return { ...state, loading: true };
		case USER_LOGIN_SUCCESS:
			return { loading: false, userInfo: action.payload };
		case USER_LOGIN_FAILURE:
			return { loading: false, error: action.payload };
		case USER_LOGOUT:
			return {};
		default:
			return { ...state };
	}
};

export const userLoginRefreshReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_LOGIN_REFRESH_REQUEST:
			return { ...state, loading: true };
		case USER_LOGIN_REFRESH_SUCCESS:
			return { loading: false, tokenInfo: action.payload };
		case USER_LOGIN_REFRESH_FAILURE:
			return { loading: false, error: action.payload };
		default:
			return { ...state };
	}
};

export const userConfirmReducer = (state = { isConfirmed: false }, action) => {
	switch (action.type) {
		case USER_CONFIRM_REQUEST:
			return { ...state, loading: true };
		case USER_CONFIRM_SUCCESS:
			return { loading: false, isConfirmed: action.payload };
		case USER_CONFIRM_FAILURE:
			return { loading: false, error: action.payload };
		default:
			return { ...state };
	}
};

export const userRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_REGISTER_REQUEST:
			return { ...state, loading: true };
		case USER_REGISTER_SUCCESS:
			return { loading: false, userInfo: action.payload };
		case USER_REGISTER_FAILURE:
			return { loading: false, error: action.payload };
		default:
			return { ...state };
	}
};

export const userDetailsReducer = (state = { user: {} }, action) => {
	switch (action.type) {
		case USER_DETAILS_REQUEST:
			return { ...state, loading: true };
		case USER_DETAILS_SUCCESS:
			return { loading: false, user: action.payload };
		case USER_DETAILS_FAILURE:
			return { loading: false, error: action.payload };
		default:
			return { ...state };
	}
};

export const userProfileUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_PROFILE_UPDATE_REQUEST:
			return { loading: true };
		case USER_PROFILE_UPDATE_SUCCESS:
			return { loading: false, success: true, userInfo: action.payload };
		case USER_PROFILE_UPDATE_FAILURE:
			return { loading: false, error: action.payload };
		case USER_PROFILE_UPDATE_RESET:
			return {};
		default:
			return { ...state };
	}
};