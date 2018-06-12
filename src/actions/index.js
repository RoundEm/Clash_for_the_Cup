export const CREATE_LEAGUE = 'CREATE_LEAGUE';
export const CREATE_LEAGUE = (name, endDate, players, pointsSettings) => ({
    type: CREATE_LEAGUE,
    name,
    endDate,
    players,
    pointsSettings
});
export const ADD_LEAGUE_PLAYER = 'ADD_LEAGUE_PLAYER';
export const ADD_LEAGUE_PLAYER = name => ({
    type: ADD_LEAGUE_PLAYER,
    name
});
export const EDIT_LEAGUE_PLAYER = 'EDIT_LEAGUE_PLAYER';
export const EDIT_LEAGUE_PLAYER = (id, name) => ({
    type: EDIT_LEAGUE_PLAYER,
    id,
    name
});
export const REMOVE_LEAGUE_PLAYER = 'REMOVE_LEAGUE_PLAYER';
export const REMOVE_LEAGUE_PLAYER = (id, name) => ({
    type: REMOVE_LEAGUE_PLAYER,
    id,
    name
});
export const CREATE_NEW_ROUND = 'CREATE_NEW_ROUND';
export const CREATE_NEW_ROUND = (name, course, endDate, players) => ({
    type: CREATE_NEW_ROUND,
    name,
    course,
    endDate,
    players
});
export const ACTIVATE_PLAYER_ROUND = 'ACTIVATE_PLAYER_ROUND';
export const ACTIVATE_PLAYER_ROUND = (id, name) => ({
    type: ACTIVATE_PLAYER_ROUND,
    id,
    name
});
export const DEACTIVATE_PLAYER_ROUND = 'DEACTIVATE_PLAYER_ROUND';
export const DEACTIVATE_PLAYER_ROUND = (id, name) => ({
    type: DEACTIVATE_PLAYER_ROUND,
    id,
    name
});
export const EDIT_PLAYER_ROUND_POINTS = 'EDIT_PLAYER_ROUND_POINTS';
export const EDIT_PLAYER_ROUND_POINTS = (id, name, roundId, points) => ({
    type: EDIT_PLAYER_ROUND_POINTS,
    id,
    name,
    roundId,
    points
});
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER = () => ({
    type: LOGIN_USER,
});
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_USER = () => ({
    type: LOGOUT_USER,
});
export const RESET_USER_PASSWORD = 'RESET_USER_PASSWORD';
export const RESET_USER_PASSWORD = () => ({
    type: RESET_USER_PASSWORD,
});
