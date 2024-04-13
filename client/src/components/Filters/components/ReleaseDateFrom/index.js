import {FormattedMessage} from "react-intl";
import { Field } from 'react-final-form'
import {TextField} from "@mui/material";


export const ReleaseDateFrom = () => {
    return (
        <Field
            name="releaseDateGte"
            render={({ input }) => (
                <TextField id="outlined-basic"
                           label={<FormattedMessage id="filters.release_date_from"></FormattedMessage>}
                           variant="outlined"
                           type="number"
                           minvalue={1800}
                           maxvalue={2030}
                           {...input}/>
            )}
        />
    )
}