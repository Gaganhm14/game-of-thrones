import React from 'react'
import {Box,Grid,styled} from '@mui/material'
import { data } from '../constants/Data'
import Char from './Char'

const Character = () => {
  return (
    <div>
        <Box style={{margin:'10px 35px'}}>
        <Grid container>
            {
                data.characters.map(value =>(
                  <Grid item>
                    <Char value={value}/>
                    </Grid>
                ))
            }
            </Grid>
        </Box>
    </div>
  )
}

export default Character