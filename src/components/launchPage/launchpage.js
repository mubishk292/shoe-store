import { Link, Outlet } from "react-router-dom"
import { Card, ListGroup, ListGroupItem , Button} from 'react-bootstrap';
export default ({ data }) => {

    return <><ul className="shoesWaliList">


        {
            Object.entries(data).map(([index, { name, img, description, price }]) => {
                return <li className="perShoeStyle" key={index}>

                    <Link to={`/launch/${index.trim()}`}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>{description}</ListGroupItem>
                                <ListGroupItem>
                                    Price {price}
                                    <Button className="cartWalaBtn" variant='dark'>Add to Cart</Button>
                                </ListGroupItem>
                                {/* <ListGroupItem>Price {price}</ListGroupItem> */}
                            </ListGroup>
                        </Card>
                    </Link>

                </li>
            })

        }

    </ul>

    </>
}