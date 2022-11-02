import React from 'react';
import LoginForm from '../components/LoginForm';
// Pode redirecionar para
// /customer/products
// /seller/orders
// /admin/manage
// Dependendo da role de quem fez login

export default function LoginPage() {
  return <LoginForm />;
}
