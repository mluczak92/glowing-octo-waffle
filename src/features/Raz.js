import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../App.css';

function Raz() {
    return (
        <div className="f-c f-ai-c f-jc-s">
            <h1>Raz</h1>
            <Formik
                initialValues={{ number: '', additional: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="f f-c f-ai-c">
                        <Field type="text" name="number" placeholder="number" required />
                        <Field type="text" name="additional" placeholder="additional" />
                        <button type="submit" disabled={isSubmitting}>
                            Make order
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Raz;