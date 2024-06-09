import { LOCALES } from '../common/const';

export default {
    [LOCALES.UKRAINIAN]: {
        'navigation': {
            'home': 'Рекомендації фільмів',
            'settings': 'Налаштування',
            'account': 'Особистий кабінет',
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
                'vote_count': 'Кількість оцінок',
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
        auth: {
            sign_in: 'Увійти',
            sign_up: 'Зареєструватися',
            remember_me: 'Запам`ятай мене',
            auth_question: 'У вас є обліковий запис?',
            forgot_password: 'Забули пароль?',
        },
        profile: {
            profile: 'Профіль',
            edit_profile: 'Редагувати профіль',
            edit: 'Редагувати',
            add_profile_image: 'Додати зображення профілю',
            selected_films: 'Обрані фільми',
            open_selected_films: 'Відкрити обрані фільми',
            delete_account: 'Видалити обліковий запис',
            log_out: 'Вийти',
        },
    },
};