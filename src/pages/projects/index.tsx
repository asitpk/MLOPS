/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import bootstrapPlugin from '@fullcalendar/bootstrap'
import listPlugin from '@fullcalendar/list'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import ButtonBase from '@mui/material/ButtonBase'
import interactionPlugin from '@fullcalendar/interaction'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid2 from '@mui/material/Unstable_Grid2'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import TextField from '@mui/material/TextField'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%'
})

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}))

export interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

function stringToColor(string: string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        color: '#fff'
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

const Projects = () => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
        <Box sx={{ flexGrow: 1 }} mb={3}>
        <Grid container spacing={2}>
          <Grid xs={4}>
            <Typography style = {{textAlign: 'start'}}><h2>Projects</h2></Typography>
          </Grid>
          <Grid xs={4}>

          </Grid>
          <Grid xs={4} style = {{textAlign: 'end'}}>
          <Button variant="contained">Create Project</Button>
          </Grid>
          </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }} mb={3}>
        <Grid container spacing={2}>
          <Grid xs={4}>
          <Grid container spacing={6}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              marginBottom: 5,
              maxWidth: 1300,
              flexGrow: 1,
              backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff')
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 70, height: 70, margin: 5 }}>
                  <Img alt='complex' src='/door.png' />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction='column' spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant='subtitle1' component='div'>
                      <h3>Predicting Churn</h3>
                    </Typography>
                    <Typography variant='body2' gutterBottom>
                    Segmenting telecom customers, understanding chum, and scoring new customers
                    </Typography>
                  </Grid>
                  <Grid item sx={{ marginBottom: '5px' }}>
                  <AvatarGroup max={4}>
                    <Avatar {...stringAvatar('Kent Dodds')} />
                    <Avatar {...stringAvatar('Travis Howard')}/>
                    <Avatar {...stringAvatar('Cindy Baker')} />
                    <Avatar {...stringAvatar('Agnes Walker')}/>
                    <Avatar {...stringAvatar('Trevor Henderson')} />
                </AvatarGroup>
                 <b>In Production</b>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
          </Grid>
          <Grid xs={4}>
          <Grid container spacing={6}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              marginBottom: 5,
              maxWidth: 1300,
              flexGrow: 1,
              backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff')
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 70, height: 70, margin: 5 }}>
                  <Img alt='complex' src='/contacts.png' />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction='column' spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant='subtitle1' component='div'>
                      <h3>Cleaning Contacts</h3>
                    </Typography>
                    <Typography variant='body2' gutterBottom>
                    Basic pipeline to clean names, phones & addresses
                    </Typography>
                  </Grid>
                  <Grid item sx={{ marginBottom: '5px', marginTop: '20px' }}>
                  <AvatarGroup max={4}>
                    <Avatar {...stringAvatar('Kent Dodds')} />
                    <Avatar {...stringAvatar('Travis Howard')}/>
                    <Avatar {...stringAvatar('Cindy Baker')} />
                    <Avatar {...stringAvatar('Agnes Walker')}/>
                    <Avatar {...stringAvatar('Trevor Henderson')} />
                </AvatarGroup>
                <b>In Use</b> 
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
          </Grid>
          <Grid xs={4}>
          <Grid container spacing={6}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              marginBottom: 5,
              maxWidth: 1300,
              flexGrow: 1,
              backgroundColor: theme => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff')
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 70, height: 70, margin: 5 }}>
                  <Img alt='complex' src='/customer.png' />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction='column' spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant='subtitle1' component='div'>
                      <h3>Customer lifetime Value</h3>
                    </Typography>
                    <Typography variant='body2' gutterBottom>
                    Predicting Customer lifetime Value using web traffic data and historical customer purchases
                    </Typography>
                  </Grid>
                  <Grid item sx={{ marginBottom: '5px' }}>
                  <AvatarGroup max={4}>
                    <Avatar {...stringAvatar('Kent Dodds')} />
                    <Avatar {...stringAvatar('Travis Howard')}/>
                    <Avatar {...stringAvatar('Cindy Baker')} />
                    <Avatar {...stringAvatar('Agnes Walker')}/>
                    <Avatar {...stringAvatar('Trevor Henderson')} />
                </AvatarGroup>
                 <b>Sandbox</b>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
          </Grid>
        </Grid>
      </Box>

    </>
  )
}

export default Projects
