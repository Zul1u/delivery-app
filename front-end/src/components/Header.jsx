import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderRedirectBtn from './HeaderRedirectBtn';
import StorageManager from '../utils/StorageManager';

function Header() {
  const { name, role } = StorageManager.loadUser();
  const navigate = useNavigate();
  const [headerMenu, setHeaderMenu] = useState(false);
  const buttonsClassNames = headerMenu ? 'header-menu-buttons' : 'header-button';

  const customerHeaderButtons = (
    <div className={ `header-font ${buttonsClassNames}` }>
      <HeaderRedirectBtn
        text="Produtos"
        url="/customer/products"
        testid="customer_products__element-navbar-link-products"
      />
      <HeaderRedirectBtn
        text="Meus Pedidos"
        url="/customer/orders"
        testid="customer_products__element-navbar-link-orders"
      />
    </div>
  );

  const sellerHeaderButtons = (
    <div className={ `header-font ${buttonsClassNames}` }>
      <HeaderRedirectBtn
        text="Pedidos"
        url="/seller/orders"
        testid="customer_products__element-navbar-link-orders"
      />
    </div>
  );

  const adminHeaderButtons = (
    <div className={ `header-font ${buttonsClassNames}` }>
      <HeaderRedirectBtn
        text="Gerenciar Usuários"
        url="/admin/manage"
        testid="customer_products__element-navbar-link-orders"
      />
    </div>
  );

  const logout = () => {
    StorageManager.deleteUser();
    navigate('/');
  };

  const renderHeaderButtons = () => {
    switch (role) {
    case 'customer':
      return customerHeaderButtons;
    case 'seller':
      return sellerHeaderButtons;
    case 'administrator':
      return adminHeaderButtons;
    default:
      logout();
    }
  };

  return (
    <header className="header">
      <div className="header-container header-font">
        <div className="header-menu">
          <label htmlFor="checkbox-header" className="label-menu">
            <input
              type="checkbox"
              id="checkbox-header"
              onChange={ () => setHeaderMenu(!headerMenu) }
              checked={ headerMenu }
            />
            <span> </span>
            <span> </span>
            <span> </span>
          </label>
        </div>
        { renderHeaderButtons() }
        <span
          className="name-user"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { name || 'User' }
        </span>
        <div className="header-button header-font bnt-logout">
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ () => logout() }
          >
            Sair
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
