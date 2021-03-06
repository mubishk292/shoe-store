import { useParams } from "react-router-dom"
import { Button, Col, Row } from "react-bootstrap";
import './file.css'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import myStore from "../../store/store";
import axios from 'axios';

export default ({ data }) => {

    let user = useSelector((store) => {
        return store.UserSection.currentUser;
    })

    let navigate = useNavigate()
    const [color, setColor] = useState("#80CED7");

    let { title } = useParams();

    let shoe = data.filter((abc) => {
        if (title == abc.title) {
            return abc
        }
    })

    const cartAdd = ()=>{
        if (user.name) {

            axios.post('/cart-item', { id: _id }).then((resp) => {
                resp.data.adItem.qty = 1;
                myStore.dispatch({
                    type: "CART",
                    product: resp.data.adItem
                })
            })

            navigate('/cart')
        } else {
            navigate('/login')
        }
    }

    // useEffect(()=>{
    //     console.log(shoe);
    // },[])

    if (!shoe) {
        return <h2>Shoe not Found</h2>
    }
    let { name, pic, description, price, _id } = shoe[0];

    return (
        <Row className="itemCard" style={{ backgroundColor: color }}>
            <Col sm={6}>

                <img className="productImage" src={`/${pic}`} />
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

                        <Button id="buy" variant="primary" style={{ color: 'white' }} onClick={cartAdd}>
                            Add to Cart
                        </Button>

                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
