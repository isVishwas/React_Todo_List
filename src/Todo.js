import React,{useState} from 'react';
import {Row,Col,Container,Button, Form,Alert} from 'react-bootstrap';

const Todo = () => {
    const [todoInput,setTodoInput] = useState('');
    const [todos,setTodos] = useState([]);


    //add todo

    const addItem = ()=>{
       
       if(todoInput!=="")
       {
            const  todoList = {
            id:Math.floor(Math.random()*1000),
            value:todoInput

        }
        setTodos([...todos,todoList]);
        setTodoInput("");
       }
       else
       {
           alert("Please Enter Task")
       }
        
    }

    console.log(todos)

    //delete todo

    const deleteItem = (e,id)=>{
        e.preventDefault();
    setTodos(todos.filter((task)=>task.id!==id));
       
}



    return (
       
        <Container className='container bg-dark'>
             <h1 className='text-light'>Todo List Example ..</h1>
            <Row>
                <Col>
                <Form>
                    <Form.Group>
                        <Form.Control type='text' value={todoInput} placeholder='enter tasks..' onChange={(event)=>setTodoInput(event.target.value)}></Form.Control>
                    </Form.Group>
                </Form>
                </Col>
            </Row>
            <Button className = 'mb-5'onClick={()=>addItem()} block >ADD</Button> 

    <Row>
        {todos.length>0?(<Col>
        {todos.map((item)=>{
       return (<Alert variant='success' key={item.id}  block='true'>{item.value} <button style={{border:'none',color:'red'}}className='float-right' onClick={(event)=>deleteItem(event,item.id)}>&times;</button></Alert>)
        })}
      </Col>):null}
       
</Row>
       
        </Container>
    )
}

export default Todo



