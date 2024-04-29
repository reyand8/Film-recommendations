import {FormattedMessage} from 'react-intl';
import { Field } from 'react-final-form';
import {TextField} from '@mui/material';


export const ReleaseDateTo = () => {
    return (
        <Field
            name="releaseDateLte"
            render={({ input }) => (
                <TextField id="outlined-basic"
                           label={<FormattedMessage id="filters.release_date_to"></FormattedMessage>}
                           variant="outlined"
                           type="number"
                           minvalue={1800}
                           maxvalue={2030}
                           {...input}/>
            )}
        />
    );
};