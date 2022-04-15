import createStore from "./createStore";

const { get, set, remove } = createStore("Authentication", {
  secure: true,
});

export const getAuthentication = get;
export const setAuthentication = set;
export const removeAuthentication = remove;
