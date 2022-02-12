import axios from "axios"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { Form, Button } from 'react-bootstrap'

export default () => {
    let { register, handleSubmit, formState: { errors } } = useForm();
    let [showPassword, setShowPassword] = useState(false);
    let [word, setWord] = useState('Show')

    const formSubmisiion = async (myData) => {
        console.log(myData);

        let form = new FormData;
        form.append('name', myData.name)
        form.append('password', myData.password)
        form.append('email', myData.email)
        form.append('file', myData.profilePic[0])

        axios.post('/signup-form', form)
    }
    return <div>

        <header>
            <h1>Register Form</h1>
        </header>

        <Form className='loginForm' onSubmit={handleSubmit(formSubmisiion)}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" {...register('name', { required: true })} />
                {errors.name ? <div className="red">
                    Please enter a valid Username
                </div> : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" {...register('email', { required: true })} />
                {errors.email ? <div className="red">
                    Please enter a valid Email
                </div> : null}
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type={showPassword ? 'text' : 'password'} placeholder="Password" {...register('password', { required: true, minLength: 6 })} />
                <span onClick={() => {
                    setShowPassword(!showPassword)
                    if (!showPassword) {
                        setWord('Hide')
                    } else {
                        setWord('Show')
                    }
                }}>{word}</span>

                {errors.password && errors.password.type == 'required' ? <div className="red">
                    Please enter a Password
                </div> : null}

                {errors.password && errors.password.type == 'minLength' ? <div className="red">
                    Please enter a minimum 3 characters
                </div> : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicFile">
                <Form.Control type="file" placeholder="Enter username" {...register('profilePic', { required: true })} />
                {errors.email ? <div className="red">
                    Please upload your file
                </div> : null}
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
}