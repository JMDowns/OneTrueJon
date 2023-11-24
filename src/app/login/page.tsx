import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import styles from './page.module.css';

export default function Login() {
    return (
        <div className={styles.div}>
            <TextField id="standard-basic" label="Username" variant="standard" />
            <TextField id="standard-basic2" label="Password" variant="standard" />
        </div>
    )
}