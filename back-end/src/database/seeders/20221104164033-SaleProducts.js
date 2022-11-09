module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales_products',
      [{
        sale_id: 1,
        product_id: 2,
        quantity: 3,
      },{
        sale_id: 1,
        product_id: 6,
        quantity: 1,
      },{
        sale_id: 2,
        product_id: 5,
        quantity: 2,
      },{
        sale_id: 2,
        product_id: 9,
        quantity: 1,
      },{
        sale_id: 2,
        product_id: 7,
        quantity: 9,
      },
      
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales_products', null, {});
  },
};