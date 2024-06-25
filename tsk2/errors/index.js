const methodNotAllowed = (_req, res) => res.status(405).send('Method Not Allowed')

module.exports = { methodNotAllowed };
