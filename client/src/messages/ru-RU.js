import { LOCALES } from '../common/const';

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
        auth: {
            sign_in: 'Войти',
            sign_up: 'Зарегистрироваться',
            remember_me: 'Запомнить меня',
            auth_question: 'У вас есть аккаунт?',
            forgot_password: 'Забыли пароль?',
        },
        profile: {
            profile: 'Профиль',
            edit_profile: 'Редактировать профиль',
            edit: 'Редактировать',
            add_profile_image: 'Добавить изображение профиля',
            selected_films: 'Выбранные фильмы',
            open_selected_films: 'Открыть выбранные фильмы',
            delete_account: 'Удалить аккаунт',
            log_out: 'Выйти',
        },
    },
};