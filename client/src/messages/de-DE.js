import { LOCALES } from '../const';

export default {
    [LOCALES.GERMAN]: {
        'navigation': {
            'home': 'Filmempfehlungen',
            'settings': 'Einstellungen',
            'genres': 'Genres',
            'language': 'Sprache',
            'search': 'Suchen',
        },
        'no_selected_films': 'Keine Filme ausgewählt',
        'specify_list_name': 'Geben Sie einen Listennamen an',
        'share_with_friends': 'Mit Freunden teilen',
        'copied': 'Kopiert!',
        select: 'Wählen',
        delete: 'Löschen',
        filters: {
            sort_by: 'Sortiere nach',
            sort_direction: 'Sortierrichtung',
            include_adult: 'Einschließlich +18',
            release_date_from: 'Von',
            release_date_to: 'Bis',
            genre: 'Genre',
            submit: 'Suchen',
            sort: {
                'popularity': 'Popularität',
                'release_date': 'Veröffentlichungsdatum',
                'revenue': 'Einnahmen',
                'primary_release_date': 'Primäres Veröffentlichungsdatum',
                'original_title': 'Originaler Titel',
                'vote_average': 'Stimmendurchschnitt',
                'vote_count': 'Stimmenzahl'
            },
            sort_direction_options: {
                asc: 'ASC',
                desc: 'DESC'
            },
        },
        singlePage: {
            duration: 'Filmlänge',
            release_date: 'Veröffentlichungsdatum',
            genres: 'Genres'
        }
    },
};