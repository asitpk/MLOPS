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
import Alert from '@mui/material/Alert';

ChartJS.register(ArcElement, Tooltip, Legend)

interface RowType2 {
    category: string
    total: number
  }

export const data = {
  labels: ['Low', 'Medium', 'High'],
  datasets: [
    {
      data: [12, 19, 3],
      label: '%',
      backgroundColor: ['#9155fd', 'skyblue', 'red'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
      borderWidth: 1
    }
  ],
}

export const data1 = {
  labels: ['Medium'],
  datasets: [
    {
      label: '%',
      data: [12],
      backgroundColor: ['#9155fd']
    }
  ]
}

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

  const rows2: RowType2[] = [
    {
      category: 'Code Style',
      total: 383
    },
    {
      category: 'Security',
      total: 14
    },
    {
      category: 'Error prone',
      total: 10
    },
    {
      category: 'Performance',
      total: 0
    },
    {
      category: 'Compatibility',
      total: 0
    },
    {
      category: 'Code Complexity',
      total: 0
    },
    {
      category: 'Documentation',
      total: 0
    },
    {
      category: 'Unused Code',
      total: 0
    }
  ]

const CodeQuality = () => {
return (
    <>
    <h2>Code Quality</h2>
    <Stack sx={{ width: '100%', marginBottom: '10px'}} spacing={2}>
      <Alert severity="warning">Codebase coding standard warnings — 91</Alert>
    </Stack>
    <Box sx={{ flexGrow: 1 }} mb={3}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent style={{ width: '70%', height: '50%', alignItems: 'center' }}>
                <Typography>
                  <b>Error</b>
                </Typography>
                <Doughnut data={data} />;
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={6}>
            <Card sx={{ minWidth: 275 }} color='success'>
              <CardContent style={{ width: '70%', height: '50%' }}>
                <Typography>
                  <b>Warning</b>
                </Typography>
                <Doughnut data={data1} />;
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }} mb={3}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  407 total issues
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {rows2.map((row: RowType2) => (
                    <>
                      <TableRow hover key={row.category} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                        <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>
                              {row.category}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          {' '}
                          <BorderLinearProgress variant='determinate' value={row.total} />
                        </TableCell>
                        <TableCell>{row.total}</TableCell>
                      </TableRow>
                    </>
                  ))}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={6}>
            <Card sx={{ minWidth: 275 }} color='success'>
              <CardContent>
                <Typography mb={3}>
                  <b>Vulnerability monitoring sources</b>
                </Typography>
                <Typography>
                  <Grid container spacing={2}>
                    <Grid xs={2}>
                      <CircularProgress variant='determinate' value={25} color='success' />
                    </Grid>
                    <Grid xs={6}>Vulnerability alert should be resolved within SLA</Grid>
                    <Grid xs={4}>79 need attention</Grid>
                  </Grid>
                </Typography>
                <Typography>
                  <Grid container spacing={2}>
                    <Grid xs={2}>
                      <CircularProgress variant='determinate' value={75} color='success' />
                    </Grid>
                    <Grid xs={6}> Dependable Vulnerability scan should be enabled</Grid>
                    <Grid xs={4}>All Passing</Grid>
                  </Grid>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      </>
)
}

export default CodeQuality