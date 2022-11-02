// De acordo com a imagem em /images/Figma Header.png

// A barra de navegação muda de acordo com a role do usuário está logado.

// Tem os botões PRODUTOS e MEUS PEDIDOS e SAIR para o cliente.
// Tem os botões PEDIDOS e SAIR para o vendedor.
// Tem os botões GERENCIAR USUARIOS e SAIR para o admin.

// Todos têm o nome do usuário logado à esquerda do botão de SAIR.

import { useNavigate } from 'react-router-dom';
import HeaderRedirectBtn from './HeaderRedirectBtn';

function Header() {
  const userName = localStorage.getItem('name');
  const navigate = useNavigate();

  const customerHeaderButtons = (
    <div>
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
    <div>
      <HeaderRedirectBtn
        text="Pedidos"
        url="/seller/products"
        testid="customer_products__element-navbar-link-orders"
      />
    </div>
  );

  const adminHeaderButtons = (
    <div>
      <HeaderRedirectBtn
        text="Gerenciar Usuários"
        url="/admin/manage"
        testid="customer_products__element-navbar-link-orders"
      />
    </div>
  );

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  const renderHeaderButtons = () => {
    const userRole = localStorage.getItem('role');

    switch (true) {
    case userRole === 'customer':
      return customerHeaderButtons;
    case userRole === 'seller':
      return sellerHeaderButtons;
    case userRole === 'admin':
      return adminHeaderButtons;
    default:
      logout();
    }
  };

  return (
    <header>
      { renderHeaderButtons() }
      <span
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { userName || 'User' }
      </span>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => logout() }
      >
        Sair
      </button>
    </header>
  );
}

export default Header;
