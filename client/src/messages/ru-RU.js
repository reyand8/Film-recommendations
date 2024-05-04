import { LOCALES } from '../const';

export default {
    [LOCALES.RUSSIAN]: {
        'navigation': {
            'home': 'Рекомендации фильмов',
            'settings': 'Настройки',
            'account': 'Личный кабинет',
            'genres': 'Жанры',
            'language': 'Язык',
            'search': 'Поиск',
        },
        'no_selected_films': 'Нет выбранных фильмов',
        'specify_list_name': 'Укажите имя списка',
        'share_with_friends': 'Поделиться с друзьями',
        'copied': 'Скопировано!',
        select: 'Выбрать',
        delete: 'Удалить',
        filters: {
            sort_by: 'Сортировать по',
            sort_direction: 'Направление',
            include_adult: 'Включительно 18+',
            release_date_from: 'C',
            release_date_to: 'По',
            genre: 'Жанр',
            submit: 'Поиск',
            sort: {
                'popularity': 'Популярность',
                'release_date': 'Дата выпуска',
                'revenue': 'Доход',
                'primary_release_date': 'Первая дата выпуска',
                'original_title': 'Оригинальное название',
                'vote_average': 'Средняя оценка',
                'vote_count': 'Количество оценок',
            },
            sort_direction_options: {
                asc: 'ASC',
                desc: 'DESC',
            },
        },
        singlePage: {
            duration: 'Продолжительность',
            release_date: 'Дата выпуска',
            genres: 'Жанры',
        },
    },
};