const { getDetails, discoverFilm, getPopular} = require('../modules/films');
const {Film} = require("../modules/films/entities/Film");
const {getList} = require("../modules/genres");


async function filmsByFilter(parent, args, {locale}) {
    const data = await discoverFilm(args.filter, locale);
    return data
}

async function filmsByPopularity(parent, args, { locale }) {
    const data = await getPopular(args.page, locale);
    return data
}

async function filmsById(parent, {ids}, {locale}) {
    const requests = ids.map((id) => getDetails(id, locale))
    const data = await Promise.all(requests)
    return data.map(({data}) => new Film(data))
}

async function genres(_, {}, {locale}) {
    return await getList(locale)
}

module.exports = {
    filmsByFilter,
    filmsByPopularity,
    filmsById,
    genres
}