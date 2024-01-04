"use client"
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Alert from '../component/Alert';

export default function Contact() {

    const initialValues = {
        fullname: '',
        email: '',
        subject: '',
        message: '',
    };

    const validateForm = (values) => {
        const errors = {};

        if (!values.fullname) {
            errors.fullname = 'Fullname is required';
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.subject) {
            errors.subject = 'position is required';
        }

        if (!values.message) {
            errors.message = 'Message is required';
        }

        return errors;
    };
    const [alert, setAlert] = useState(false)
    const [name, setName] = useState(null)
    const close = () => {
        if (!alert) {
            setAlert(true)
        } else {
            setAlert(false)
        }
    }

    const handleSubmit = (values) => {
        setAlert(true)
        setName(values.fullname)
    };
    return (
        <div className="min-h-screen lg:flex md:flex justify-around items-center py-44 lg:px-[10%] px-5">

            {alert && (
                <Alert name={name} close={close} />
            )}

            <div className='lg:w-1/2 md:w-1/3 w-full'>
                <p className='text-white text-5xl font-semibold'>
                    Let's <span className='text-[#42C6FF]'>chat</span>.<br />
                    Tell me about your <span className='text-[#42C6FF]'>interest</span>!
                </p>
                <p className='text-gray-300 text-lg mt-4'>Let's create something together 🫰</p>
            </div>
            <div className='lg:w-1/2 md:w-2/3 w-full flex justify-center items-center h-full'>
                <Formik
                    initialValues={initialValues}
                    validate={validateForm}
                    onSubmit={handleSubmit}
                >
                    <Form className="max-w-[500px] w-full mt-10 bg-gray-500/30 lg:p-10 md:p-5 p-5 rounded-3xl grid gap-5 shadow-lg">
                        <p className='text-2xl text-white font-semibold '>Send me message 🚀</p>
                        <div className="mb-4">
                            <Field
                                type="text"
                                id="fullname"
                                name="fullname"
                                placeholder="Full name"
                                className="form-input mt-1 block w-full rounded-xl p-4"
                            />
                            <ErrorMessage name="fullname" component="div" className="text-red-500" />
                        </div>

                        <div className="mb-4">
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                placeholder="email address"
                                className="form-input mt-1 block w-full rounded-xl p-4"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500" />
                        </div>

                        <div className="mb-4">
                            <Field
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Position"
                                className="form-input mt-1 block w-full rounded-xl p-4"
                            />
                            <ErrorMessage name="subject" component="div" className="text-red-500" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor='message' className="text-gray-300">Tell me your message</label>
                            <Field
                                as="textarea"
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Message"
                                className="form-textarea mt-1 block w-full rounded-xl p-4"
                            />
                            <ErrorMessage name="message" component="div" className="text-red-500" />
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        >
                            Send message
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
