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
import TextField from '@mui/material/TextField';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
  labels: ['Low', 'Medium', 'High'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: ['#9155fd', 'skyblue', 'red'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
      borderWidth: 1
    }
  ]
}

export const data1 = {
  labels: ['Medium'],
  datasets: [
    {
      label: '# of Votes',
      data: [12],
      backgroundColor: ['#9155fd']
    }
  ]
}

// interface RowType {
//   age: number
//   name: string
//   date: string
//   email: string
//   salary: string
//   status: string
//   designation: string
// }

interface RowType {
  title: string
  checks: string
  passing: string
  status: number
  failing: string
  pending: string
}

interface RowType2 {
  category: string
  total: number
}

interface StatusObj {
  [key: string]: {
    color: ThemeColor
  }
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

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

const statusObj: StatusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

const DashboardTable = () => {
  return (
    <>
     <Box sx={{ flexGrow: 1 }} mb={3}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography style = {{textAlign: 'start'}}><b>This is your last run score</b>
            <ButtonGroup variant="outlined" aria-label="outlined button group" style= {{marginLeft: "15px"}}>
            <Button style={{backgroundColor: "#fff"}} color="error">
            <Box display='flex' justifyContent='center' alignItems='center'>
            <CircularProgress color='error' />
              <Typography position='absolute'>{56}%</Typography>
           </Box>
            </Button>
            <Button style={{backgroundColor: "#fff"}} color='error'>Poor</Button>
          </ButtonGroup><br/>
          <div style = {{marginLeft: "230px"}}>
          <Link href="/codequality">More about your score</Link>
          </div>
            </Typography>
          </Grid>
          <Grid xs={3}>

          </Grid>
          <Grid xs={3}>
          <TextField id="outlined-basic" label="Search" variant="outlined" style={{backgroundColor: '#fff'}}/>
          <FilterAltIcon/>
          </Grid>
          </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }} mb={3}>
        <Grid container spacing={2}>
          <Grid xs={4}>
          <Link href='/codequality' passHref>
            <Card sx={{ minWidth: 275 }} style={{cursor: "pointer"}}>
              <CardContent>
                <Typography>
                  <Stack direction='row' spacing={2}>
                    <Avatar sx={{ bgcolor: deepOrange[500], color: 'white', border: '1px solid black' }}>18</Avatar>
                    &nbsp; Code Quality
                  </Stack>
                </Typography>
              </CardContent>
            </Card>
            </Link>
          </Grid>
          <Grid xs={4}>
            <Card sx={{ minWidth: 275 }} color='success'>
              <CardContent>
                <Typography>
                  <Stack direction='row' spacing={2}>
                    <Avatar sx={{ bgcolor: deepOrange[500], color: 'white', border: '1px solid black' }}>78</Avatar>
                    &nbsp; Cyclomatic
                  </Stack>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card sx={{ minWidth: 275 }} color='success'>
              <CardContent>
                <Typography>
                  <Stack direction='row' spacing={2}>
                    <Avatar sx={{ bgcolor: deepOrange[500], color: 'white', border: '1px solid black' }}>48</Avatar>
                    &nbsp; Maintainability
                  </Stack>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }} mb={3}>
        <Grid container spacing={2}>
          <Grid xs={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography>
                  <Stack direction='row' spacing={2}>
                    <Avatar sx={{ bgcolor: deepOrange[500], color: 'white', border: '1px solid black' }}>48</Avatar>
                    &nbsp; Duplicate Function
                  </Stack>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card sx={{ minWidth: 275 }} color='success'>
              <CardContent>
                <Typography>
                  <Stack direction='row' spacing={2}>
                    <Avatar sx={{ bgcolor: deepOrange[500], color: 'white', border: '1px solid black' }}>48</Avatar>
                    &nbsp; Orphaned Code
                  </Stack>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card sx={{ minWidth: 275 }} color='success'>
              <CardContent>
                <Typography>
                  <Stack direction='row' spacing={2}>
                    <Avatar sx={{ bgcolor: deepOrange[500], color: 'white', border: '1px solid black' }}>78</Avatar>{' '}
                    &nbsp; Commented Code
                  </Stack>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default DashboardTable
