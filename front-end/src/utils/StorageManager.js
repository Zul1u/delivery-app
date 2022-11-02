const USER_KEY = 'user';

class StorageManager {
  /**
   * Creates the user on localStorage, as required by the evaluator.
   * @params data The exact data that comes from the API.
  */
  static saveUser(data) {
    const { token, user: { name, email, role } } = data;
    const storedUser = { token, name, email, role };
    localStorage.setItem(USER_KEY, JSON.stringify(storedUser));
  };

  /**
   * Loads the current user. Has the format required in the evaluator.
   */
  static loadUser() {
    const user = localStorage.getItem(USER_KEY);
    return JSON.parse(user) || 'No user stored.';
  }

  /**
   * Deletes the localStorage data, for when the user logs out.
   */
  static deleteUser() {
    localStorage.removeItem(USER_KEY);
  }

  /**
   * Reads just the token from the current user.
   */
  static getToken() {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user).token : 'No user stored.';
  }
}

export default StorageManager;
