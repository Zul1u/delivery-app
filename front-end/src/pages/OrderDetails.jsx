import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import List from '../components/List';
import OrderDetailsLabel from '../components/OrderDetailsLabel';
import formatDate from '../helpers/formatDate';
import DELIVERY_API from '../redux/services/api.fetch';
import StorageManager from '../utils/StorageManager';

function OrderDetails() {
  const { orderId } = useParams();
  const { data: order, isLoading: saleLoading } = DELIVERY_API.getSaleById(orderId);
  const { data: statuses, isLoading: statsLoading } = DELIVERY_API.getSaleStatuses();
  const [updateSale] = DELIVERY_API.updateSale();
  const { role } = StorageManager.loadUser();
  const testPrefix = role === 'customer'
    ? 'customer_order_details__'
    : 'seller_order_details__';

  return (
    <div>

      <Header />
      {(saleLoading || statsLoading) ? (
        <p>Loading</p>
      ) : (
        <>
          <OrderDetailsLabel
            id={ orderId }
            saleStatus={ order?.status || '' }
            statuses={ statuses }
            date={ order ? formatDate(order.saleDate) : '' }
            sellerName={ role === 'customer' ? order.seller.name : '' }
            updateSale={ updateSale }
            testPrefix={ testPrefix }
          />
          <List
            type="product"
            data={ order.products }
            checkout={ false }
            testPrefix={ testPrefix }
          />
        </>
      )}

    </div>
  );
}

export default OrderDetails;
