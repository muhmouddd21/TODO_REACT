import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function SubSection({handleFilter,alignment}){

    return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleFilter}
      aria-label="text alignment"
      style={{marginBottom:"15px",direction:"ltr"}}
    >
      <ToggleButton value="left" color='primary' aria-label="left aligned">
         الغير منجزة      </ToggleButton>
      <ToggleButton value="center" color='primary' aria-label="centered">
        المنجز
      </ToggleButton>
      <ToggleButton value="right" color='primary' aria-label="right aligned">
        الكل
      </ToggleButton>
    </ToggleButtonGroup>

    )
        
    
}