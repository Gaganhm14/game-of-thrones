import React from 'react';
import { Card, styled, Box, Typography } from '@mui/material';
import { useState } from 'react';

const Image = styled('img')({
    width: '100%',
    height: 300
})

const Cardcss = styled(Card)`
width:200px;
margin:10px;
position:relative;
`

const Boxcss = styled(Box)`
position:absolute;
top:0;
color:white;
height:300px;
width:100%;
background:#000;
opacity:0.5;`

const Char = ({ value }) => {
    const [toggle, settoggle] = useState(false);

    const toggleHover = () => {
        settoggle(!toggle);
    }


    return (

        value.characterImageFull ?
            <Cardcss onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                <Image src={value.characterImageFull} alt="pic" />
                {
                    toggle ?
                    <Boxcss>
                    <Typography>Name :{value.characterName}</Typography>
                    <Typography>Real Name:{value.actorName}</Typography>
                    <Typography>House Name:{value.houseName}</Typography>
                </Boxcss>
                :''
                }
                
            </Cardcss>
            : ''

    )
}

export default Char