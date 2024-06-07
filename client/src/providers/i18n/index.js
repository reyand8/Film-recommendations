import {IntlProvider} from 'react-intl';
import {Fragment} from 'react';
import {flatten} from 'flat';
import PropTypes from 'prop-types';

import {LOCALES} from '../../common/const';
import messages from '../../messages';

const Provider = ({children, locale = LOCALES.ENGLISH}) => (
        <IntlProvider
            textComponent={Fragment}
            locale={locale}
            messages={flatten(messages[locale])}
        >
            {children}
        </IntlProvider>
    );

Provider.displayName = 'I18nProvider';

Provider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    locale: PropTypes.oneOf(Object.values(LOCALES)),
};

Provider.defaultProps = {
    locale: LOCALES.ENGLISH,
};

export default Provider;