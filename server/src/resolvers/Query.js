const { getPopular } = require('../modules/films');

async function films(parent, args) {
    return await getPopular(args.page);
}

module.exports = {
    films,
}