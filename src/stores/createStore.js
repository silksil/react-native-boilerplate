import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

import tryCatch from "../utils/tryCatch";

/**
 * Creates a namespaced AsyncStorage that automatically
 * prefixes the ID's and stringifies and parses JSON objects
 * when retrieving and savings items.
 */
const createStore = (name, options = {}) => {
  const { secure } = options;

  const prefixId = id => (secure ? `${name}-${id}` : `@${name}:${id}`);

  const getItem = secure ? SecureStore.getItemAsync : AsyncStorage.getItem;
  const setItem = secure ? SecureStore.setItemAsync : AsyncStorage.setItem;
  const removeItem = secure
    ? SecureStore.deleteItemAsync
    : AsyncStorage.deleteItemAsync;

  /**
   * Retrieve an item.
   */
  const get = id =>
    tryCatch(async () => {
      const formattedId = prefixId(id);
      const item = await getItem(formattedId);

      return JSON.parse(item);
    });

  /**
   * Insert or update item.
   */
  const set = (id, value) =>
    tryCatch(() => {
      const formattedId = prefixId(id);
      const stringifiedItem = JSON.stringify(value);

      return setItem(formattedId, stringifiedItem);
    });

  /**
   * Insert or update item from the BookNote store.
   */
  const remove = id =>
    tryCatch(() => {
      const formattedId = prefixId(id);

      return removeItem(formattedId);
    });

  return {
    get,
    set,
    remove,
  };
};

export default createStore;
