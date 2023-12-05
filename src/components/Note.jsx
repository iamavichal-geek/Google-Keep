import Reac, {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useAutocomplete } from "@mui/material";

function Note(props) {
  

  const[edit, setEdit] = useState({
    title: props.title, 
    content: props.value
  })
function handleEdit(){
setEdit({

})
}

  function handleClick(){
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}> <DeleteIcon/> </button>
      <button onClick={handleEdit}><EditIcon/></button>
    </div>
  );
}

export default Note;