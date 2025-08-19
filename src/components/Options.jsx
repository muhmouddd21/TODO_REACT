import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Options({handleClick,inpt,handleAddingTodo}){


    return (
        <>

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Grid size={9}>
                <TextField fullWidth id="outlined-basic" label="إسم المهمة" variant="outlined" value={inpt} onChange={handleAddingTodo}/>
                </Grid>
                <Grid size={3}>
                <Button variant="contained" onClick={handleClick}>إضافة مهمة</Button>
                </Grid>
            </Grid>
        </Box>

        </>
    
    )
}