import * as React from "react";
import get from 'lodash/get';
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
    },
    icon: {
        width: '0.5em',
        paddingLeft: 2,
    },
});
export const MyUrlField = ({ record = {}, source }) =>{
    const classes = useStyles();
    const value = get(record, source); //href={record[source]}
    return(
    <a href={'http://'+value}>
        {value}
        <LaunchIcon className={classes.icon} />
    </a>);
}
