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
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';

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
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ApexChartWrapper>
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
                <ButtonBase sx={{ width: 128, height: 128, margin: 5 }}>
                  <Img alt='complex' src='/laptop.jpg' />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction='column' spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant='subtitle1' component='div'>
                      <h3>Dive Deep to Analyse Your Code Quality</h3>
                    </Typography>
                    <Typography variant='body2' gutterBottom>
                      An indepth analysis across 8 parameters is conducted, Below is a quick snapshot. Based on your
                      content and business priority you can plan further
                    </Typography>
                  </Grid>
                  <Grid item sx={{ marginBottom: '5px' }}>
                    <Button variant='outlined' onClick={handleClickOpen}>Ask an expert</Button>
                    <Button variant='contained' sx={{ marginLeft: '10px' }}>
                      Evaluate
                    </Button>
                    <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                        maxWidth={"sm"} 
                      >
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                          Contact Us
                        </BootstrapDialogTitle>
                        <DialogContent dividers style = {{width: "350px", height: "250px"}}>
                          
                        <TextField
                            id="outlined-multiline-static"
                            label="Describe your Question here"
                            multiline
                            rows={8}
                            sx={{width: '100%'}}
                          />
                
                        </DialogContent>
                        <DialogActions>
                          <Button autoFocus onClick={handleClose}>
                            Submit 
                          </Button>
                        </DialogActions>
                      </BootstrapDialog>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Table />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
