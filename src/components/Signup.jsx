import { Formik, Form } from 'formik';

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
                    <Form></Form>
                </div>
            )}
        </Formik>
    );
};

export default Signup;
