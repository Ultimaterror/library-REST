const { Prisma } = require("@prisma/client");
const prisma = require("../../prisma/client");

const insertBook = async (data) => {
    const { ISBN, title, description, img_path, authorId } = data
    try {
        const book = await prisma.book.create({
            data: {
                ISBN,
                title,
                description,
                img_path,
                authorId
            },
        });
        return { status: 201, data: book };
    } catch (error) {
        console.error(error);
        return { status: 500, data: "Error saving the book" };
    }
};

const fetchBook = async () => {
    try {
        const books = await prisma.book.findMany({
            include: {
                author: true
            }
        });
        return { status: 200, data: books };
    } catch (error) {
        console.error(error);
        return { status: 500, data: "Error fetching the books" };
    }
};

const fetchOneBook = async (id) => {
    try {
        const book = await prisma.book.findUnique({
            where: {
                id: parseInt(id),
            },
            include: {
                author: true
            }
        });
        if (book) {
            return { status: 200, data: book };
        } else {
            return { status: 404 };
        }
    } catch (error) {
        console.error(error);
        return { status: 500, data: "Error fetching the book" };
    }
};

const updateBook = async (id, data) => {
    const { ISBN, title, description, img_path, authorId } = data
    try {
        const book = await prisma.book.update({
            where: {
                id: parseInt(id),
            },
            data: {
                ISBN,
                title,
                description,
                img_path,
                authorId
            },
        });
        return { status: 201, data: book };
    } catch (error) {
        console.error(error);
        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2025"
        ) {
            return { status: 404 };
        }
        else {
            return { status: 500, data: "Error updating the book" };
        }
    }
};

const deleteBook = async (id) => {
    try {
        const book = await prisma.book.delete({
            where: {
                id: parseInt(id),
            },
        });
        return { status: 204, data: "Book deleted" };
    } catch (error) {
        console.error(error);
        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2025"
        ) {
            return { status: 404 };
        }
        else {
            return { status: 500, data: "Error deleting the book" };
        }
    }
};

module.exports = {
    insertBook,
    fetchBook,
    fetchOneBook,
    updateBook,
    deleteBook,
};
