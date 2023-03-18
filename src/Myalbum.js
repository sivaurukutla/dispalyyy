import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/';
import {Button, Card, CardImg} from 'react-bootstrap';
class Myalbum extends Component {
    constructor(props) {
        super(props);
        this.state={
            content:[],
            datalodaded:false
        }
    }

    componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/photos')
     .then(Response=>Response.json())
     .then(json=>{
        this.setState({content:json,datalodaded:true})
        console.log(json)

     })
    }
    
    render() { 
        return (  
            <div>
              {
              this.state.content.map((content)=>{
                 return(
                        <Card key={content.id}>
                             <CardImg src={content.thumbnailUrl} alt={content.id}></CardImg>
                             <Card.Body>
                <Card.Title>{content.title}</Card.Title> 
                <Card.Footer>view mylist</Card.Footer> 
                <Button class="btn btn-primary">view mylist</Button>  
                </Card.Body>
                        </Card>
                 )
              })}
            </div>
        );
    }
}
 
export default Myalbum;