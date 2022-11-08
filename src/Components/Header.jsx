import React from 'react'
import {AppBar,Toolbar ,styled} from '@mui/material';
import Logo from '../images/logo.webp'

const AppBarcss =styled(AppBar)`
background:black`
const Header = () => {
  return (
    <div>
        <AppBarcss position='static'>
            <Toolbar>
                    <img src={Logo} alt="logo" style={{width:150}}/>
            </Toolbar>
        </AppBarcss>
    </div>
  )
}

export default Header