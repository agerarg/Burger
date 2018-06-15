import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layaout.css';
const layaout = (props) =>(
    <Aux>
        <div>menu </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layaout;