import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, FormHelperText, Input, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 1,
};

export default function EditCharacterView(props:any) {
  const[height, setHeight] = React.useState<any>(props.height);
  const[gender, setGender] = React.useState<any>(props.gender);
  const handleOpen = () => props.setOpen(true);
  const handleClose = () => props.setOpen(false);

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h4 id="parent-modal-title">Update Details</h4>
        <p>
        <TextField
      label="Height"
      variant="outlined"
      margin="normal"
      value={height}
      type="number"
      fullWidth
      onChange={(e) => setHeight(e.target.value)}
    />
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={gender}
    label="Gender"
    fullWidth
    onChange={(e)=>setGender(e.target.value)}
  >
    <MenuItem value='male'>male</MenuItem>
    <MenuItem value='female'>female</MenuItem>

  </Select>
  <Button variant="contained" style={{marginTop:'1rem'}} onClick={()=>props.callback(height, gender)}>Update</Button>
  <Button variant="contained" style={{marginTop:'1rem', marginLeft:'0.5rem'}} onClick={()=>props.setOpen(false)}>Cancel</Button>
    </p>
        </Box>
      </Modal>
    </div>
  );
}