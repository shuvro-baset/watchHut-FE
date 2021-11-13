import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const AddWatch = () => {
    // react hook form
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        
    // POST method for adding new tour
    // axios.post('http://localhost:5000/add-watch', data)
    axios.post('https://agile-shelf-31650.herokuapp.com/add-watch', data)

            .then(res => {
                if (res.data.insertedId) {
                    alert('New Watch added successfully');
                    reset();

                }
            })
}

    return (
        <Container className="my-5">
        <Row>
            <Col md={6}>

                <div className="mt-3 mb-5">
                    <h2 className="div-head">Add Watch</h2>
                    <div className="underline"></div>
                </div>
                <div className='login-div'>
                    <form onSubmit={handleSubmit(onSubmit)} className="form-info">
                        <label>Watch title</label> <br />
                        <input {...register("title", { required: true })} className="w-100" /> <br />
                        {errors.title && <span>This field is required</span>}
                        
                        
                        <label>Watch Description</label> <br />
                        <textarea rows="4" className="w-100" {...register("description")} /> <br />
                        {errors.description && <span>This field is required</span>}

                        <label>Price</label> <br />
                        <input type="number" className="w-100" {...register("price", { required: true })} /> <br />
                        {errors.price && <span>This field is required</span>}

                        
                        <label>Watch Image Url</label> <br />
                        <input {...register("image", { required: true })} className="w-100" /> <br />
                        {errors.image && <span>This field is required</span>} <br />
                        <button type="submit" className="btn btn-order">Add Watch</button>
                    </form>
                </div>
            </Col>

            <Col md={6} className="d-flex justify-content-center align-items-center">
                <img className="img-fluid rounded my-5"src="https://images.unsplash.com/photo-1598516801967-0ce306d00780?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            </Col>
        </Row>
    </Container>
    );
};

export default AddWatch;