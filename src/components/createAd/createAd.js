import axios from "axios"
import { useForm } from "react-hook-form"
import { Form, Button } from 'react-bootstrap'

export default ()=>{

    let { register, handleSubmit, formState: { errors } } = useForm();

    const formSubmisiion = async (myData)=>{
        console.log(myData);

        let form = new FormData;
        form.append('title', myData.title)
        form.append('name', myData.name)
        form.append('description', myData.description)
        form.append('price', myData.price)
        form.append('file', myData.pic[0])

        axios.post('/create-ad', form)
    }

    return <div>
        <header>
            <h1>Create Ad</h1>
        </header>

        <Form className='loginForm' onSubmit={handleSubmit(formSubmisiion)}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" {...register('title', { required: true })} />
                {errors.title ? <div className="red">
                    Please enter a valid Title
                </div> : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Name" {...register('name', { required: true })} />
                {errors.name ? <div className="red">
                    Please enter a valid Product Name 
                </div> : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control type='text' placeholder="Description" {...register('description', { required: true, minLength: 6 })} />
                {errors.description ? <div className="red">
                    Please enter description
                </div> : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicFile">
            <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter price" {...register('price', { required: true })} />
                {errors.price ? <div className="red">
                    Please enter price
                </div> : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicFile">
            <Form.Label>Product Image</Form.Label>
                <Form.Control type="file" placeholder="Enter price" {...register('pic', { required: true })} />
                {errors.pic ? <div className="red">
                    Please upload your file
                </div> : null}
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
}