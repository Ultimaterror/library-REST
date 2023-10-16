const {
    insertBook,
    fetchBook,
    fetchOneBook,
    updateBook,
    deleteBook,
} = require("../models/bookModel");

const insertBookController = async (req, res) => {
    // Call API for book by ISBN
    const { status, data } = await insertBook(req.body);
    res.status(status).send(data);
};

const fetchBookController = async (req, res) => {
    const { status, data } = await fetchBook();
    res.status(status).send(data);
};

const fetchOneBookController = async (req, res) => {
    const { status, data } = await fetchOneBook(req.params.id);
    res.status(status).send(data);
};

const updateBookController = async (req, res) => {
    const { status, data } = await updateBook(req.params.id, req.body);
    res.status(status).send(data);
};

const deleteBookController = async (req, res) => {
    const { status, data } = await deleteBook(req.params.id);
    res.status(status).send(data);
};

module.exports = {
    insertBookController,
    fetchBookController,
    fetchOneBookController,
    updateBookController,
    deleteBookController
};
