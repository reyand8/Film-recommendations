const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {PrismaClient} = require('@prisma/client')
const fs = require("fs");
const path = require("path");

const prisma = new PrismaClient();

const { APP_SECRET } = require('../utils')


async function signUpUser(parent, args, context) {
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

async function signInUser (parent, { email, password }, context) {
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

async function deleteUser(parent, args, context) {
    const userId = context.userId
    if (!userId) {
        throw new Error('Not authenticated');
    }
    try {
        await prisma.user.delete({
            where: {id: userId},
        });
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function updateUser(parent, {email, username, selectedFilms}, context) {
    const userId = context.userId
    const data = {};
    if (email) {
        data.email = email;
    }
    if (username) {
        data.username = username;
    }
    if (selectedFilms) {
        data.selectedFilms = selectedFilms;
    }
    return prisma.user.update({
        where: {id: userId},
        data,
    })
}

async function updateImage(parent, {file}, context) {
    try {
        const userId = context.userId;
        if (!file) {
            throw new Error('No file provided');
        }
        const {createReadStream, filename} = await file;
        const stream = createReadStream();
        const filePath = path.join(__dirname, 'uploads', filename);

        await new Promise((resolve, reject) =>
            stream
                .pipe(fs.createWriteStream(filePath))
                .on('finish', resolve)
                .on('error', reject)
        );
        return prisma.user.update({
            where: {id: userId},
            data: {image: filePath},
        });
    } catch (error) {
        console.error('Error uploading avatar:', error);
        throw error;
    }
}


module.exports = {
    signUpUser,
    signInUser,
    updateUser,
    deleteUser,
    updateImage,
}
