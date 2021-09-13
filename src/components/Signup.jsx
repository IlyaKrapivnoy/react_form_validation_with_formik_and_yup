import { Formik, Form } from 'formik';
import TextField from './TextField';

const Signup = () => {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
            }}
        >
            {(formik) => (
                <div>
                    <h1 className='my-4 font-weight-bold-display-4'>Sign Up</h1>
                    {console.log(formik)}
                    <Form>
                        <TextField
                            label='First Name'
                            name='firstName'
                            type='text'
                        />
                        <TextField
                            label='last Name'
                            name='lastName'
                            type='text'
                        />
                        <TextField label='Email' name='email' type='email' />
                        <TextField
                            label='password'
                            name='password'
                            type='password'
                        />
                        <TextField
                            label='Confirm Password'
                            name='confirmPassword'
                            type='password'
                        />
                    </Form>
                </div>
            )}
        </Formik>
    );
};

export default Signup;
