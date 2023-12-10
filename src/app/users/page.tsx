import "reflect-metadata";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import styles from './page.module.css';
import Typography from '@mui/material/Typography';
import { container } from 'tsyringe';
import { UserRepository } from './userRepository';

function GetUserCards() {
    const userRepository = container.resolve(UserRepository);
    
    return userRepository.GetUsers().map(user => 
        {
            const hobbyList = user.hobbies.map(hobby => <li key={hobby}>{hobby}</li>);

            return <Grid key={user.userId} xs={4}>
                <Card data-testid={`user-card-${user.userId}`} key={user.userId} sx={{ display: 'flex' }}>
                    <Box>
                        <CardMedia
                            height="200"
                            component="img"
                            image={user.imageLink}
                            alt={user.name}
                        />
                    </Box>
                    
                    <Box>
                        <CardContent sx={{width: 300}}>
                            <Typography className={styles.name}>{user.name} ({user.userId})</Typography>
                            <p>Profession:</p>
                                <p className={styles.pStyle}>{user.profession}</p>
                            <p>Hobbies:</p>
                            <ul className={styles.ulStyle}>
                                {hobbyList}
                            </ul>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>
        }
    )
}

export default function Users() {
    return (
        <Grid container sx={{padding: '10px'}}>
            {GetUserCards()}
        </Grid>
    )
}