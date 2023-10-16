const {
    insertAuthor,
    fetchAuthor,
    fetchOneAuthor,
    updateAuthor,
    deleteAuthor,
} = require("../models/authorModel");

const insertAuthorController = async (req, res) => {
    const { status, data } = await insertAuthor(req.body);
    res.status(status).send(data);
};

const fetchAuthorController = async (req, res) => {
    const { status, data } = await fetchAuthor();
    res.status(status).send(data);
};

const fetchOneAuthorController = async (req, res) => {
    const { status, data } = await fetchOneAuthor(req.params.id);
    res.status(status).send(data);
};

const updateAuthorController = async (req, res) => {
    const { status, data } = await updateAuthor(req.params.id, req.body);
    res.status(status).send(data);
};

const deleteAuthorController = async (req, res) => {
    const { status, data } = await deleteAuthor(req.params.id);
    res.status(status).send(data);
};

module.exports = {
    insertAuthorController,
    fetchAuthorController,
    fetchOneAuthorController,
    updateAuthorController,
    deleteAuthorController
};
