import { Button } from 'react-bootstrap';

export const Task = (props) =>{
    return(
        <div className='listeTask' style={{backgroundColor: props.completed ? "green" : "red"}}>
            <h4>{props.taskName}</h4>
            <div className='btnTache'>
                <Button className='btnTast' onClick={() => props.completeTask(props.id)}>Done</Button>
                <Button className='btnTast' onClick={() => props.deleteTask(props.id)}>delete</Button> 
            </div>
            
        </div>
    ) 
}







