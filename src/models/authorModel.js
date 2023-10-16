const { Prisma } = require("@prisma/client");
const prisma = require("../../prisma/client");

const insertAuthor = async (data) => {
    const { firstname, lastname } = data
    try {
        const author = await prisma.author.create({
            data: {
                firstname,
                lastname
            },
        });
        return { status: 201, data: author };
    } catch (error) {
        console.error(error);
        return { status: 500, data: "Error saving the author" };
    }
};

const fetchAuthor = async () => {
    try {
        const authors = await prisma.author.findMany();
        return { status: 200, data: authors };
    } catch (error) {
        console.error(error);
        return { status: 500, data: "Error fetching the authors" };
    }
};

const fetchOneAuthor = async (id) => {
    try {
        const author = await prisma.author.findUnique({
            where: {
                id: parseInt(id),
            },
            include: {
                books: true
            }
        });
        if (author) {
            return { status: 200, data: author };
        } else {
            return { status: 404 };
        }
    } catch (error) {
        console.error(error);
        return { status: 500, data: "Error fetching the author" };
    }
};

const updateAuthor = async (id, data) => {
    const { firstname, lastname } = data
    try {
        const author = await prisma.author.update({
            where: {
                id: parseInt(id),
            },
            data: {
                firstname,
                lastname
            },
        });
        return { status: 201, data: author };
    } catch (error) {
        console.error(error);
        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2025"
        ) {
            return { status: 404 };
        }
        else {
            return { status: 500, data: "Error updating the author" };
        }
    }
};

const deleteAuthor = async (id) => {
    try {
        const author = await prisma.author.delete({
            where: {
                id: parseInt(id),
            },
        });
        return { status: 204, data: "Author deleted" };
    } catch (error) {
        console.error(error);
        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2025"
        ) {
            return { status: 404 };
        }
        else {
            return { status: 500, data: "Error deleting the author" };
        }
    }
};

module.exports = {
    insertAuthor,
    fetchAuthor,
    fetchOneAuthor,
    updateAuthor,
    deleteAuthor,
};
