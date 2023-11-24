import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import styles from './page.module.css';
import Typography from '@mui/material/Typography';

export default function Users() {
    return (
        <Grid container sx={{padding: '10px'}}>
            <Grid xs={4}>
                <Card sx={{ display: 'flex' }}>
                    <Box>
                        <CardMedia
                            height="200"
                            component="img"
                            image="/images/jon.jpg"
                            alt="Jonathan Downs"
                        />
                    </Box>
                    
                    <Box>
                        <CardContent sx={{width: 300}}>
                            <Typography className={styles.name}>Jonathan Downs</Typography>
                            <p>Profession:</p>
                                <p className={styles.pStyle}>Software Engineering</p>
                            <p>Hobbies:</p>
                            <ul className={styles.ulStyle}>
                                <li>Programming</li>
                                <li>Reading</li>
                                <li>Video Games</li>
                            </ul>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    )
}