import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={styles.html}>
      <body className={styles.body}>
        <Box sx={{ display: 'flex', height: '100%'}}>
          <AppBar position="fixed" sx={{ zIndex: 1, backgroundColor: 'rgb(191, 191, 191)' }}>
            <Toolbar sx={{flexGrow: 1}}>
              <h1 className={styles.pTitle}>The One True Spelling of Jonathan</h1>
              <h2><a href="/login" className={styles.login}>Login</a></h2>
            </Toolbar>
          </AppBar>
          <Drawer variant='permanent' sx={{ zIndex: 0, width: 240 }}>
            <Toolbar />
            <Box sx={{ zIndex: 0, width: 240, height: '100%', backgroundColor: 'rgb(191, 191, 191)' }}>
              <List>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="/home">
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="/etymology">
                    <ListItemText primary="Etymology" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="/users">
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
      </body>
    </html>
  )
}
