const USER_KEY = 'user';
const CART = 'cart';

class StorageManager {
  /**
   * Creates the user on localStorage, as required by the evaluator.
   * @params data The exact data that comes from the API.
  */
  static saveUser(data) {
    const { token, user: { name, email, role } } = data;
    const storedUser = { token, name, email, role };
    localStorage.setItem(USER_KEY, JSON.stringify(storedUser));
  }

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

  static saveCart(data) {
    const { id, name, quantity, unitPrice } = data;
    const previousCart = this.loadCart();

    const productIndex = previousCart.findIndex((product) => +product.id === +id);
    if (productIndex < 0) {
      const storedCart = [...previousCart, { id, name, quantity, unitPrice }];
      this.eraseCart();
      localStorage.setItem(CART, JSON.stringify(storedCart));
    }

    if (productIndex >= 0) {
      previousCart[productIndex].quantity = quantity;
      this.eraseCart();
      localStorage.setItem(CART, JSON.stringify(previousCart));
    }
  }

  static removeCart(data) {
    const { id } = data;
    const previousCart = this.loadCart();

    const productIndex = previousCart.findIndex((product) => +product.id === +id);
    if (productIndex < 0) {
      return false;
    }

    if (productIndex >= 0) {
      const removing = previousCart.filter((product) => +product.id !== +id);
      this.eraseCart();
      localStorage.setItem(CART, JSON.stringify(removing));
    }
  }

  static loadCart() {
    const cart = localStorage.getItem(CART);
    return JSON.parse(cart) || [];
  }

  static eraseCart() {
    localStorage.removeItem(CART);
  }
}

export default StorageManager;
