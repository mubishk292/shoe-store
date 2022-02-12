import axios from "axios"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import myStore from "../../store/store"
import { Form, Button } from 'react-bootstrap'

export default () => {
    let { register, handleSubmit, formState: { errors } } = useForm();
    let [showPassword, setShowPassword] = useState(false);
    let [word, setWord] = useState('Show')
    
    let navigate = useNavigate()
    const formSubmisiion = async (myData) => {
        console.log(myData);

        axios.post('/login-form', myData).then((resp) => {
            if (resp.data) {

                localStorage.setItem('myToken', resp.data.nishani)

                myStore.dispatch({
                    type: 'LOGIN',
                    user: resp.data.userFound,
                })
                navigate('/dashboard')
                console.log(resp.data.userFound)
            } else {
                alert('User not found')
            }
        })
    }
    return <div>

        <header>
            <h1>Login Form</h1>
        </header>

        <Form className='loginForm' onSubmit={handleSubmit(formSubmisiion)}>
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

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
}