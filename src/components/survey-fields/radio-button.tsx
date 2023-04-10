// ** MUI Imports
import { useEffect, useState, useContext } from 'react'
import Grid from '@mui/material/Grid'
import PlusIcon from 'mdi-material-ui/Plus'
import MinusIcon from 'mdi-material-ui/Minus'

import {
  Box,
  Button,
  Checkbox,
  Fab,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField
} from '@mui/material'

const RadioButton: React.FC = () => {
  useEffect(() => {}, [])
  return (
    <div className='fieldItem w-100'>
      <form>
        <Grid container spacing={4} className='mt-1'>
          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <InputLabel id='form-layouts-separator-select-label'>Category</InputLabel>
              <Select
                name='category'
                label='Country'
                id='form-layouts-separator-select'
                labelId='form-layouts-separator-select-label'
                required
              >
                <MenuItem value='job-satisfaction'>Job satisfaction</MenuItem>
                <MenuItem value='process-management'>Process management</MenuItem>
                <MenuItem value='well-being'>Well-being</MenuItem>
                <MenuItem value='relationship-building'>Relationship building</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              name='question'
              fullWidth
              multiline
              minRows={3}
              label='Question'
              required
              placeholder='Enter question'
              sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
              InputProps={{
                startAdornment: <InputAdornment position='start'> </InputAdornment>
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Table aria-label='table in dashboard' className='t-border  option-table'>
              <TableHead className='bg-light'>
                <TableRow>
                  <TableCell>Option</TableCell>
                  <TableCell>Emoji</TableCell>
                  <TableCell>Score</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow hover key={'1'} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                  <TableCell>
                    <input type='text' style={{ width: '170px' }} key={'1'} id={'1'} value={'text'} name='text' />
                  </TableCell>
                  <TableCell>
                    <FormControl>
                      <select name='emoji' key={'1'} style={{ width: '50px' }} value={'1'}>
                        <option value={'emoji'}>emoji</option>
                      </select>
                    </FormControl>
                  </TableCell>
                  <TableCell style={{ width: '60px' }}>
                    <input
                      type='number'
                      min='1'
                      style={{ width: '60px' }}
                      name='score'
                      key={'1'}
                      id={'1'}
                      value={'score'}
                    />
                  </TableCell>
                  <TableCell>
                    <div style={{ display: 'flex' }}>
                      <button type='button' className='ad-more ad-green'>
                        <PlusIcon style={{ fontSize: '14px' }} />
                      </button>

                      <button type='button' className='ad-more' style={{ marginLeft: '4px' }}>
                        <MinusIcon style={{ fontSize: '14px' }} />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControlLabel control={<Checkbox name='is_required' />} label='Is mandatory' />
          </Grid>
          <Grid item xs={12}>
            <Button type='submit' variant='contained' size='large'>
              Save
            </Button>

            <Button size='large' color='secondary' variant='outlined' className='ml-2'>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default RadioButton
