import prisma from "../application/client.js"

const createUser = async (data) => {
    return prisma.user.create({
        data: data,
        select: {
            id: true,
            email: true,
            createdAt: true,
        }
    });
}

const getUserById = async (email) => {
    return prisma.user.findUnique({
        where: {
            email: email
        }
    });
}

const userCount = async (id) => {
    return prisma.user.count({
        where: {
            id: id
        }
    });
}

const getAllUser = async () => {
    return prisma.user.findMany();
}

const updateUser = async (id, data) => {
    return prisma.user.update({
        where: {
            id: id
        },
        data: data,
        select: {
            id: true,
            email: true,
            updatedAt: true
        }
    });
}

const deleteUser = async (id) => {
    return prisma.user.delete({
        where: {
            id: id
        }
    })
}

export default {
    createUser,
    getAllUser,
    userCount,
    getUserById,
    updateUser,
    deleteUser
}