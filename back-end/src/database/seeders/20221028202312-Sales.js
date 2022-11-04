module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',
      [{
        id: 1,
        user_id: 3,
        seller_id: 2,
        total_price: 120.12,
        delivery_address: 'Rua 12 - Distrito 36, Duque de Caxias - RJ',
        delivery_number: '+5521212121212',
        sale_date: new Date(),
        status: 'Preparando',
      },
      {
        id: 2,
        user_id: 3,
        seller_id: 2,
        total_price: 240.24,
        delivery_address: 'Rua 24 - Distrito 48, Duque de Caxias - RJ',
        delivery_number: '+5521000000000',
        sale_date: new Date(),
        status: 'Entregue',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};