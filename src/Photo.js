import React,{Component} from "react";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/';
import {Button,Card, CardImg} from 'react-bootstrap';
class Photo extends Component {
    constructor(props) {
        super(props);

        this.state={
            photo:[],
            data:false
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(Response=>Response.json())
        .then(json=>{
          this.setState({photo:json,data:true})
          console.log(json)
        })
    }


    render() { 
        return ( 
            <div>
                {this.state.photo.map((p)=>{
                  return(
                        <div>
                           
                            <Card key={p.id}>
                                <CardImg  height='150' weidth='100'src={p.thumbnailUrl}></CardImg>
                                <Card.Body>
                                    <Card.Title>{p.title}</Card.Title>
                                    <Card.Text>{p.url}</Card.Text>
                                    <Button   className="btn btn-primary">onClick</Button>
                                </Card.Body>
                            </Card>
                        </div>
                  )
                })}
            </div>
         );
    }
}
 
export default Photo;