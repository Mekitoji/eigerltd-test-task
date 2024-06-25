class TradesController {
  constructor(model) {
    this.tradesModel = model;
  }

  async getById(req, res) {
    const id = req.params?.id;

    let trade;
    try {
      trade = await this.tradesModel.findOne({ id });
    } catch (err) {
      return res.status(500).end('Internal Server Error');
    }

    if (!trade) {
      return res.status(404).end('ID not found');
    }

    res.status(200).json(trade);
  }

  async getAll(req, res) {
    const { query } = req;

   try {
     const trades = await this.tradesModel.find(query, { _id: 0 });

     res.status(200).json(trades);
   } catch(err) {
     return res.status(500).end('Internal Server Error');
   }
  }

  async create(req, res) {
    const data = req.body;

    // For prodaction validation better use packages as joi or zod
    if (data.id ||
      data.shares < 1 ||
      data.shares > 100 ||
      !['buy', 'sell'].includes(data.type)) {
      return res.status(400).end();
    }

    try {
      await this.tradesModel.create(data);
    } catch(err) {
      return res.status(500).end('Internal Server Error');
    }

    res.status(201).json(data);
  }
}

module.exports = TradesController;
