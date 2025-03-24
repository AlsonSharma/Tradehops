import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3000/login', formData);

      console.log(response.data);
      console.log(response.data.success);

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        window.location.href = `http://localhost:5174/?token=${encodeURIComponent(response.data.token)}`;
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container className="my-5" style={{ maxWidth: '600px' }}>
      <h2 className="text-center mb-4">Login to Your Account</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div className="d-grid mb-3">
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? 'Logging In...' : 'Login'}
          </Button>
        </div>

        <p className="text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="text-decoration-none">
            Sign up here
          </Link>
        </p>
      </Form>
    </Container>
  );
};

export default Login;