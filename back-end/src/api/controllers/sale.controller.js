const { StatusCodes } = require('http-status-codes');
const saleService = require('../services/sale.service');
const { saleStatuses } = require('../utils/staticData');

module.exports = {
  create: async (req, res) => {
    const { body: sale } = req;
    const created = await saleService.create(sale);
    res.status(StatusCodes.CREATED).json(created);
  },

  findAll: async (_req, res) => {
    const sales = await saleService.findAll();
    res.status(StatusCodes.OK).json(sales);
  },

  findOne: async (req, res) => {
    const { params: { id } } = req;
    const sale = await saleService.findOne(id);
    res.status(StatusCodes.OK).json(sale);
  },

  findByUserId: async (req, res) => {
    const { id } = req.params;
    const sales = await saleService.findByUserId(id);
    res.status(StatusCodes.OK).json(sales);
  },

  getStatuses: async (_req, res) => {
    res.status(StatusCodes.OK).json(saleStatuses); 
  },

  updateStatus: async (req, res) => {
    const { params: { id, status } } = req;
    const updated = await saleService.updateStatus({ id, status });
    res.status(StatusCodes.OK).json(updated);
  },
};
