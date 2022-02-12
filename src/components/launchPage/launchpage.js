import { Link } from "react-router-dom"
import { Card, ListGroup, ListGroupItem , Button} from 'react-bootstrap';
export default ({ data }) => {

    return <><ul className="shoesWaliList">


        {
            data.map(( { title, name, pic, description, price }) => {
                return <li className="perShoeStyle" key={title}>

                    <Link to={`/launch/${title.trim()}`}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pic} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>{description}</ListGroupItem>
                                <ListGroupItem>
                                    Price {price} $
                                    <Button className="cartWalaBtn" variant='dark'>Add to Cart</Button>
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Link>

                </li>
            })

        }

    </ul>

    </>
}