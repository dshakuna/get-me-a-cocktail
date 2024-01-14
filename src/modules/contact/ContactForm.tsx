import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { sendCustomEmail } from './Email';
import SuccessMessage from './SuccessMessage';
import ErrorMessage from './ErrorMessage';

function ContactForm() {
    const [details, setDetails] = useState({ to_name: '', to_email: '', message: '' });
    const [emailValid, setEmailValid] = useState(true);
    const [showMessage, setShowMessage] = useState({ success: false, error: false });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        if (name === 'to_email') {
            setEmailValid(/^\S+@\S+\.\S+$/.test(value));
        }
        setDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!emailValid) {
            return;
        }

        try {
            await sendCustomEmail(details);
            setShowMessage({ success: true, error: false });
        } catch {
            setShowMessage({ success: false, error: true });
        }
    };

    console.log("detalles",details)

    return (
        <div>
            {showMessage.success && <SuccessMessage />}
            {showMessage.error && <ErrorMessage />}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="to_name"
                        value={details.to_name}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        name="to_email"
                        value={details.to_email}
                        onChange={handleInputChange}
                        isInvalid={!emailValid}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        value={details.message}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <button type="submit" disabled={!details.to_email || !emailValid || !details.message || !details.to_name}>
                    Send Email
                </button>
            </Form>
        </div>
    );
}

export default ContactForm;
