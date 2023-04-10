// ** MUI Imports
import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import { Button, InputAdornment, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

const SectionHeader: React.FC = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {}, [])
  return (
    <div className={'fieldItem w-100'}>
      <form>
        <Grid container spacing={4} className='mt-1'>
          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <InputLabel id='form-layouts-separator-select-label'>Category</InputLabel>
              <Select
                name='category'
                label='Category'
                id='form-layouts-separator-select'
                labelId='form-layouts-separator-select-label'
                required
                className='h-44'
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
              name='description'
              fullWidth
              multiline
              minRows={3}
              label='Message'
              required
              placeholder='Description...'
              sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
              InputProps={{
                startAdornment: <InputAdornment position='start'> </InputAdornment>
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <InputLabel id='text-allignment-label'>Text Allignment</InputLabel>
              <Select
                className='h-44'
                name='text_allignment'
                label='Text Allignment'
                id='text-allignment-select'
                labelId='text-allignment-label'
                required
              >
                <MenuItem value='left'>Left</MenuItem>
                <MenuItem value='right'>Right</MenuItem>
                <MenuItem value='center'>Center</MenuItem>
                <MenuItem value='justify'>Justify</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <InputLabel id='text-transform-label'>Text Transform</InputLabel>
              <Select
                className='h-44'
                name='text_transform'
                label='Text Transform'
                id='text-transform-select'
                labelId='text-transform-label'
                required
              >
                <MenuItem value='normal'>Normal</MenuItem>
                <MenuItem value='bold'>Bold</MenuItem>
                <MenuItem value='light-weight'>Light Weight</MenuItem>
                <MenuItem value='italic'>Italic</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type='submit' variant='contained' size='large'>
              Save
            </Button>
            <Button size='large' variant='outlined' className='ml-2'>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default SectionHeader
