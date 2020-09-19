import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import logo from './assets/logo.png'
import { Link } from 'react-router-dom'

import github from './assets/github.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: '400',
  },
  toolbar: {
    backgroundColor: '#fff',
    boxShadow: '2px 2px 2 black',
    marginBottom: '10px',
  },
}))

export default function MenuAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.toolbar}>
        <Toolbar>
          <Link to='/'>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
            >
              <img style={{ height: '30px' }} src={logo} alt='' />{' '}
            </IconButton>
          </Link>
          <Typography variant='h6' className={classes.title}>
            Mindtree Assignment by Kiran
          </Typography>
          <a
            href='https://github.com/kiranFullStack/Countries-Currencies'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              style={{ height: '30px', cursor: 'pointer' }}
              src={github}
              alt=''
            />
          </a>
        </Toolbar>
      </AppBar>
    </div>
  )
}
