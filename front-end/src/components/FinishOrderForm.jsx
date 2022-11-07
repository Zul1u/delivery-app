import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import DELIVERY_API from '../redux/services/api.fetch';
import StorageManager from '../utils/StorageManager';

function FinishOrderForm({ userId, products }) {
  const [formState, setFormState] = useState({
    responsibleSeller: '', sellerId: 0, deliveryAddress: '', deliveryNumber: '',
  });
  const [responsibleSellersList, setResponsibleSellersList] = useState([]);
  const { data: users, isLoading } = DELIVERY_API.getAllUsers();
  const [sendSale] = DELIVERY_API.createSale();

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading) {
      const responsibles = users.filter((user) => user.role === 'seller');

      setFormState({ ...formState, responsibleSeller: responsibles[0].name });
      setResponsibleSellersList(responsibles);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  const handleChange = ({ target: { name, value } }) => {
    setFormState((state) => ({ ...state, [name]: value }));
  };

  const finishOrder = async () => {
    const { responsibleSeller, deliveryAddress, deliveryNumber } = formState;

    const sellerId = responsibleSellersList
      .find((seller) => seller.name === responsibleSeller).id;

    const saleObj = {
      userId,
      sellerId,
      deliveryAddress,
      deliveryNumber,
      products,
    };
    console.log(saleObj);
    const { data: { id } } = await sendSale(saleObj);
    StorageManager.eraseCart();
    navigate(`/customer/orders/${id}`);
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <form>
      <div>
        <label htmlFor="responsibleSeller">
          P. Vendedora Responsável
          <select
            data-testid="customer_checkout__select-seller"
            id="responsibleSeller"
            name="responsibleSeller"
            onChange={ handleChange }
            value={ formState.responsibleSeller }
          >
            { responsibleSellersList.map((seller) => (
              <option
                key={ seller.email }
                value={ seller.name }
              >
                { seller.name }
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="deliveryAddress">
          Endereço:
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            id="deliveryAddress"
            name="deliveryAddress"
            onChange={ handleChange }
            value={ formState.deliveryAddress }
            placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
          />
        </label>
      </div>
      <div>
        <label htmlFor="deliveryNumber">
          Número:
          <input
            data-testid="customer_checkout__input-address-number"
            type="number"
            id="deliveryNumber"
            name="deliveryNumber"
            onChange={ handleChange }
            value={ formState.deliveryNumber }
            placeholder={ 198 }
          />
        </label>
      </div>
      <button
        data-testid="customer_checkout__button-submit-order"
        type="button"
        onClick={ () => finishOrder() }
      >
        Finalizar Compra
      </button>
    </form>
  );
}

FinishOrderForm.propTypes = {
  userId: PropTypes.number.isRequired,
  products: PropTypes.shape().isRequired,
};

export default FinishOrderForm;
