import { useParams } from "react-router-dom"
import { Button, Col, Row } from "react-bootstrap";
import './file.css'
import { useState } from "react";
import { Link } from 'react-router-dom'

export default ({ data }) => {
    const [color, setColor] = useState("#80CED7");

    let { index } = useParams();

    let shoe = data[index]

    if (!shoe) {
        return <h2>Shoe not Found</h2>
    }
    let { name, img, description, price } = shoe;

    return (
        <Row className="itemCard" style={{backgroundColor: color}}>
            <Col sm={6}>

                <img className="productImage" src={img}  />
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

                        <Button id="buy" variant="primary">
                            <Link to='/cart' style={{color : 'white'}}>
                                Add to Cart
                            </Link>
                        </Button>

                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
