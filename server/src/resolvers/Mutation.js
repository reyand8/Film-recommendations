const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient();

const { APP_SECRET } = require('../utils')


async function signUpUser(parent, args, context, info) {
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.prisma.user.create({
        data: {...args, password}
    });

    const token = jwt.sign({userId: user.id}, APP_SECRET);

    return {
        token,
        user
    };
}

async function signInUser (parent, { email, password }, context, info) {
    const user =
        await context.prisma.user.findUnique(
            {where: {email: email}}
        )

    if (!user) {
        throw new Error('No such user found')
    }

    const valid = await bcrypt.compare(password, user.password)

    if (!valid) {
        throw new Error('Invalid password')
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
        token,
        user,
    }
}

async function updateUser(parent, {email, username}, context) {
    const userId = context.userId
    return prisma.user.update({
        where: {id: userId},
        data: {email, username}
    })
}


module.exports = {
    signUpUser,
    signInUser,
    updateUser,
}
