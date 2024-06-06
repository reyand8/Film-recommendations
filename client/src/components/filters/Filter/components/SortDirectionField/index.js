import { Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';

import {SORT_DIRECTION} from '../../../../../common/const';




export const SortDirectionField = () => {
    return (
        <Field
            name="sortDirection"
            render={({ input }) => (
                <FormattedMessage id="filters.sort_direction">
                    {placeholder =>
                        <FormControl>
                            <FormLabel sx={{mb:1, mt: {xs: 0, md: 1}}} id="sort_direction">{placeholder}</FormLabel>
                            <RadioGroup
                                row
                                name="sort_directionp"
                                {...input}
                            >
                                <FormControlLabel
                                    value={SORT_DIRECTION.DESC}
                                    control={<Radio />}
                                    label={<NorthIcon sx={{fill: 'rgba(0, 0, 0, 0.6);'}}/>} />
                                <FormControlLabel
                                    value={SORT_DIRECTION.ASC}
                                    control={<Radio />}
                                    label={<SouthIcon sx={{fill: 'rgba(0, 0, 0, 0.6);'}} />} />
                            </RadioGroup>
                        </FormControl>
                    }
                </FormattedMessage>
            )}
        />
    );
};