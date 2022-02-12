import { useParams } from "react-router-dom"
import { Button, Col, Row } from "react-bootstrap";
import './file.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default ({ data }) => {

    let user = useSelector((store) => {
        return store.UserSection.currentUser;
    })

    let navigate = useNavigate()
    const [color, setColor] = useState("#80CED7");

    let { title } = useParams();

    let shoe = data.filter((abc)=>{
        if(title == abc.title){
            return abc
        }
    })

    if (!shoe) {
        return <h2>Shoe not Found</h2>
    }
    let { name, pic, description, price } = shoe[0];

    return (
        <Row className="itemCard" style={{ backgroundColor: color }}>
            <Col sm={6}>

                <img className="productImage" src={pic} />
            </Col>
            <Col className="info">
                <h2>{name}</h2>
                <br />
                <br />
                <p>{description}</p>
                <Row className="buttonRow">
                    <Col>
                        <p>Available Colors:</p>
                        <Button id="blue" onClick={() => setColor("#80CED7")}></Button>
                        <Button id="flax" onClick={() => setColor("#E9D985")}></Button>
                        <Button id="red" onClick={() => setColor("#BF211E")}></Button>
                    </Col>
                    <Col style={{ textAlign: "right" }}>
                        <p> <strong> Price: {price} </strong></p>

                        <Button id="buy" variant="primary" style={{ color: 'white' }} onClick={()=>{
                            if(user.name){
                                navigate('/cart')
                            }else{
                                navigate('/login')
                            }
                        }}>
                            Add to Cart
                        </Button>

                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
