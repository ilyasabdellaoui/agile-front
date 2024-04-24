import React, { useState } from 'react';
import { login } from '../services/authService';
import ensias from '../images/ensias.png';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const isSuccess = await login(formData.email, formData.password);

      if (isSuccess) {
        window.location.href = '/admin';
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4 border rounded p-4">
          <div className="text-center mb-4">
            <img src={ensias} alt="ensias" className="img-fluid mb-2" />
            <h2>Bienvenue sur l'application de consultation des notes</h2>
          </div>
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
