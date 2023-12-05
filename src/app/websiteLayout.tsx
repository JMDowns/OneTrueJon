'use client'

import './globals.css';
import styles from './page.module.css'
import { Box, AppBar, Toolbar, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useRouter } from "next/navigation";
import { container } from 'tsyringe';

export default function WebsiteLayout({
    children
  }: {
    children: React.ReactNode
  }) {
    const router = useRouter();
  
    return (
        <div>
            <Box sx={{ display: 'flex', height: '100%'}}>
            <AppBar position="fixed" sx={{ zIndex: 1, backgroundColor: 'rgb(191, 191, 191)' }}>
                <Toolbar sx={{flexGrow: 1}}>
                <h1 className={styles.pTitle}>The One True Spelling of Jonathan</h1>
                </Toolbar>
            </AppBar>
            <Drawer variant='permanent' sx={{ zIndex: 0, width: 240 }}>
                <Toolbar />
                <Box sx={{ zIndex: 0, width: 240, height: '100%', backgroundColor: 'rgb(191, 191, 191)' }}>
                <List>
                    <ListItem disablePadding>
                    <ListItemButton component="a" onClick={() => router.push('/home')}>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                    <ListItemButton component="a" onClick={() => router.push('/etymology')}>
                        <ListItemText primary="Etymology" />
                    </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                    <ListItemButton id="button2" component="button" onClick={() => router.push('/users')}>
                        <ListItemText primary="Users" />
                    </ListItemButton>
                    </ListItem>
                </List>
                </Box>
            </Drawer>
            <Box sx={{width: '100%', height: '100%'}}>
                <Toolbar/>
                <Box sx={{width: '100%', height: '100%'}}>
                {children}
                </Box>
            </Box>
            </Box>
        </div>
    );
  }