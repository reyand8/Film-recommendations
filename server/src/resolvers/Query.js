const { getDetails, discoverFilm, getPopular, getFilmsByGenre, getFilmsBySearchQuery} = require('../modules/films');
const {Film} = require("../modules/films/entities/Film");
const {getList} = require("../modules/genres");
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient()


async function filmsByFilter(parent, args, {locale}) {
    return await discoverFilm(args.filter, locale);
}

async function filmsBySearchQuery(parent, args, {locale}) {
    return await getFilmsBySearchQuery(args.search, locale);
}

async function filmsByPopularity(parent, args, { locale }) {
    return await getPopular(args.page, locale);
}

async function filmsByGenre(parent, args, {locale}) {
    return await getFilmsByGenre(args.filter, locale);
}

async function filmsById(parent, {ids}, {locale}) {
    const requests = ids.map((id) => getDetails(id, locale))
    const data = await Promise.all(requests)
    return data.map(({data}) => new Film(data))
}

async function genres(_, {}, {locale}) {
    return await getList(locale)
}

async function user(parent, args, context) {
    return prisma.user.findUnique({
        where: {
            id: context.userId,
        },
    });
}

module.exports = {
    filmsByFilter,
    filmsBySearchQuery,
    filmsByPopularity,
    filmsById,
    filmsByGenre,
    genres,
    user,
}