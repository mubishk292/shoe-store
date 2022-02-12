import { Link, Outlet } from "react-router-dom"
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
export default ({ data }) => {

    return <><ul className="shoesWaliList">


        {
            Object.entries(data).map(([index, { name, img, description, price }]) => {
                return <li key={index}>

                    <Link to={`/launch/${index.trim()}`}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>{description}</ListGroupItem>
                                <ListGroupItem>Price {price}</ListGroupItem>
                            </ListGroup>
                            {/* <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
                        </Card>
                    </Link>
                   
                </li>
            })

        }

    </ul>

    </>
}