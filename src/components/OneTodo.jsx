
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField';
import {  useState } from 'react';

export default function OneTodo({index,todo,completeTask,deleteTask,updateTodo,updatedTodo,setUpdatedTodo}){
    const [open,setOpen]=useState(false);
    const [openUpdate,setOpenUpdate] = useState(false);
   
    function showPopUpBeforeDeletion(){
        setOpen(true);
    }
    function closeModal(){
        setOpen(false);
    }
    function showUpdateModal(){
        setUpdatedTodo(todo) 
        setOpenUpdate(true);
    }
    function closeUpdateModal(){
        setOpenUpdate(false);
    }


    return (    

        
        <div>
                <Dialog style={{direction:"rtl"}} open={openUpdate} onClose={closeUpdateModal}>
                    
                    <DialogTitle>تعديل المهمة</DialogTitle>
                    <DialogContent sx={{ paddingBottom: 0 }}>
                    <DialogContentText>
                        الرجاء ادخال البيانات التالية
                    </DialogContentText>
                    <form >
                        <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        label="عنوان المهمة"
                        fullWidth
                        variant="standard"
                        value={updatedTodo.title}
                        onChange={(event) => setUpdatedTodo({ 
                            ...updatedTodo, 
                            title: event.target.value 
                        })}
                        />
        
                          <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        label="تفاصيل المهمة"
                        fullWidth
                        variant="standard"
                        value={updatedTodo.discription}
                        onChange={(event) => setUpdatedTodo({ 
                            ...updatedTodo, 
                            discription: event.target.value 
                        })}
                        />
                        <DialogActions>
                            <Button   onClick={() => {
                                    updateTodo(todo.id);
                                    closeUpdateModal();
                                }}
                             type="submit">تعديل</Button>
                            <Button onClick={closeUpdateModal}>إلغاء</Button>
                        </DialogActions>
                    </form>
                    </DialogContent>
                </Dialog>   



               <Dialog
                    style={{direction:"rtl"}}
                    open={open}
                    onClose={closeModal}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                    {"هل انت متأكد من رغبتك فى حذف هذه المهمة ؟"}
                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {"لا يمكنك التراجع بعد الحذف"}
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>

                <Button onClick={closeModal}>اغلاق </Button>
                <Button onClick={()=>{deleteTask(todo.id)}} autoFocus> نعم قم بالحذف</Button>
                    </DialogActions>
                </Dialog>
            <Divider>
            <Chip label={`مهمة رقم ${index}`} color="primary" style={{marginTop:"10px"}}  size="medium" />
            </Divider>

            <Card className='card-hover' sx={{ bgcolor:"primary.dark", color:"black", marginTop:1  }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid size={8} >
                            <Typography dir="rtl" variant='h6' sx={{ color: 'white', textAlign:"left" ,fontSize: 20}}>
                                {todo.title}
                            </Typography>
                            <Typography dir="rtl" variant='h6' sx={{ color: 'white', textAlign:"left" ,fontSize: 14 }}>
                                {todo.discription}
                            </Typography>
                        </Grid>
                        <Grid size={4} display={"flex"} justifyContent={'space-around'} alignItems={"center"}>
                            <IconButton onClick={()=>{completeTask(todo.id)}} className='icon-btn' aria-label="delete"  color="primary" style={{color:todo.isCompleted? "white":"#8bc34a",backgroundColor:todo.isCompleted? "#8bc34a":"white",border:"solid 1px white"}}>
                                <CheckIcon  />
                            </IconButton>
                            <IconButton onClick={()=>{showPopUpBeforeDeletion()}} className='icon-btn' aria-label="delete"  color="primary" style={{color:"#8bc34a",backgroundColor:"white",border:"solid 1px white"}}>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton  onClick={()=>{showUpdateModal()}} className='icon-btn' aria-label="delete"  color="primary" style={{color:"#8bc34a",backgroundColor:"white",border:"solid 1px white"}}>
                                <EditIcon />
                            </IconButton>
                        </Grid>
                    </Grid>

                </CardContent>


            </Card>

        </div>
   

    )
}