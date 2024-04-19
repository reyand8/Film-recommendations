import { LOCALES } from '../const';

export default {
    [LOCALES.UKRAINIAN]: {
        'navigation': {
            'home': 'Рекомендації фільмів',
            'settings': 'Налаштування',
            'genres': 'Жанри',
            'language': 'Мова',
            'search': 'Пошук',
        },
        'no_selected_films': 'Немає вибраних фільмів',
        'specify_list_name': 'Вкажіть імʼя списку',
        'share_with_friends': 'Поділитися з друзями',
        'copied': 'Скопійовано!',
        select: 'Вибрати',
        delete: 'Видалити',
        filters: {
            sort_by: 'Сортувати по',
            sort_direction: 'Напрямок',
            include_adult: 'Включно 18+',
            release_date_from: 'З',
            release_date_to: 'До',
            genre: 'Жанр',
            submit: 'Пошук',
            sort: {
                'popularity': 'Популярність',
                'release_date': 'Дата випуску',
                'revenue': 'Дохід',
                'primary_release_date': 'Перша дата релізу',
                'original_title': 'Оригінальна назва',
                'vote_average': 'Середня оцінка',
                'vote_count': 'Кількість оцінок'
            },
            sort_direction_options: {
                asc: 'ASC',
                desc: 'DESC',
            },
        },
        singlePage: {
            duration: 'Тривалість',
            release_date: 'Дата випуску',
            genres: 'Жанри',
        },
    },
};