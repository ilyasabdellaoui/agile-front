import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import ensias from '../images/ensias.png';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const isSuccess = await login(formData.email, formData.password);
      
      if (isSuccess) {
        navigate('/home');
      } 
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <img src={ensias} alt="ensias" className="img-fluid mb-4" />
          <h2 className="text-center mb-4">Bienvenue sur l'application de consultation des notes</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <h3 className="text-center mb-4">Veuillez vous authentifier</h3>
            <div className="mb-3">
              <label className="form-label">Email ENSIAS</label>
              <input 
                type="text" 
                className="form-control" 
                name="email" 
                placeholder='@ensias.um5.ac.ma'
                value={formData.email} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mot de Passe</label>
              <input 
                type="password" 
                className="form-control" 
                name="password" 
                value={formData.password} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">Connexion</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
