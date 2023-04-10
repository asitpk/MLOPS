/* eslint-disable @typescript-eslint/no-unused-vars */
// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import Stack from '@mui/material/Stack'
import BlockIcon from '@mui/icons-material/Block'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Grid from '@mui/material/Unstable_Grid2'
import Paper from '@mui/material/Paper'
import CardContent from '@mui/material/CardContent'
import ReportProblemIcon from '@mui/icons-material/ReportProblem'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import Avatar from '@mui/material/Avatar'
import { deepOrange, deepPurple } from '@mui/material/colors'
import { CardActionArea } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import Link from 'next/link'

interface RowType {
    title: string
    checks: string
    passing: string
    status: number
    failing: string
    pending: string
  }

  const rows: RowType[] = [
    {
      title: 'People',
      checks: '72 checks',
      passing: '65 passing',
      status: 90,
      failing: '7',
      pending: 'View pending tasks'
    },
    {
      title: 'Policies',
      checks: '38 checks',
      passing: '36 passing',
      status: 95,
      failing: '2',
      pending: 'View pending tasks'
    },
    {
      title: 'Trainings',
      checks: '15 checks',
      passing: '13 passing',
      status: 85,
      failing: '2',
      pending: 'View pending tasks'
    },
    {
      title: 'Risks',
      checks: '1 checks',
      passing: '0 passing',
      status: 0,
      failing: '1 Due',
      pending: 'View pending tasks'
    },
    {
      title: 'Vendors',
      checks: '2 checks',
      passing: '0 passing',
      status: 0,
      failing: 'All 2 Failing',
      pending: 'View pending tasks'
    },
    {
      title: 'Change Management',
      checks: '21 checks',
      passing: '19 passing',
      status: 90,
      failing: '2',
      pending: 'View pending tasks'
    },
    {
      title: 'Access',
      checks: '77 checks',
      passing: '70 passing',
      status: 0,
      failing: '7',
      pending: 'View pending tasks'
    },
    {
      title: 'Vulnerabilities',
      checks: '128 checks',
      passing: '46 passing',
      status: 40,
      failing: '1',
      pending: 'View pending tasks'
    },
    {
      title: 'Infrastructure',
      checks: '61 checks',
      passing: '59 passing',
      status: 90,
      failing: '2',
      pending: 'View pending tasks'
    }
  ]

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    width: 80,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#56CA00' : '#308fe8'
    }
  }))

const Reports = () => {
return (
    <>
    <Box sx={{ flexGrow: 1 }} mb={3}>
        <Grid container spacing={2}>
          <Grid xs={3}>
            <Card sx={{ minWidth: 275, border: '1px solid #56CA00' }}>
              <CardContent>
                <Typography>
                  <Grid container spacing={2}>
                    <Grid xs={2}>
                      <CheckCircleOutlineIcon />
                    </Grid>
                    <Grid xs={7}> 369 Passing</Grid>
                    <Grid xs={3}>
                      {' '}
                      <Chip label='72%' color='success' />
                    </Grid>
                  </Grid>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={3}>
            <Card sx={{ minWidth: 275, border: '1px solid #FF4C51' }} color='success'>
              <CardContent>
                <Typography>
                  <Grid container spacing={2}>
                    <Grid xs={2}>
                      <BlockIcon />
                    </Grid>
                    <Grid xs={7}> 127 Failing</Grid>
                    <Grid xs={3}>
                      {' '}
                      <Chip label='25%' color='error' />
                    </Grid>
                  </Grid>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={3}>
            <Card sx={{ minWidth: 275, border: '1px solid #FEB900' }} color='success'>
              <CardContent>
                <Typography>
                  <Grid container spacing={2}>
                    <Grid xs={2}>
                      <ReportProblemIcon />
                    </Grid>
                    <Grid xs={7}> 7 Critical</Grid>
                    <Grid xs={3}>
                      {' '}
                      <Chip label='2%' color='warning' />
                    </Grid>
                  </Grid>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={3}>
            <Card sx={{ minWidth: 275, border: '1px solid #001BFE' }} color='success'>
              <CardContent>
                <Typography>
                  <Grid container spacing={2}>
                    <Grid xs={2}>
                      <CalendarTodayIcon />
                    </Grid>
                    <Grid xs={7}> 11 Due</Grid>
                    <Grid xs={3}>
                      {' '}
                      <Chip label='2%' color='primary' />
                    </Grid>
                  </Grid>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Card>
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
            <TableBody>
              {rows.map((row: RowType) => (
                <TableRow hover key={row.title} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                  <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.title}</Typography>
                      {/* <Typography variant='caption'>{row.designation}</Typography> */}
                    </Box>
                  </TableCell>
                  <TableCell>{row.checks}</TableCell>
                  <TableCell>
                    <Stack direction='row' spacing={1}>
                      <Chip icon={<CheckCircleOutlineIcon />} label={row.passing} variant='outlined' color='success' />
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <BorderLinearProgress variant='determinate' value={row.status} />
                  </TableCell>
                  <TableCell>
                    <Stack direction='row' spacing={1}>
                      <Chip icon={<BlockIcon />} label={row.failing} variant='outlined' color='error' />
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography color='primary'>
                    {row.pending}   <span style = {{marginTop: "5px"}}><ArrowForwardIosIcon /></span> 
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      </>
)
}

export default Reports