import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import { Lock, Eye, EyeOff } from 'lucide-react';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAdmin();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin/dashboard');
    } else {
      setError('Senha incorreta');
      setPassword('');
    }
  };

  return (
    <div className="admin-login">
      <div className="admin-login__container">
        <div className="admin-login__card">
          <div className="admin-login__header">
            <Lock size={48} />
            <h1>Painel Administrativo</h1>
            <p>Digite a senha para acessar o painel</p>
          </div>

          <form onSubmit={handleSubmit} className="admin-login__form">
            <div className="admin-login__input-group">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Digite a senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="admin-login__input"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="admin-login__toggle-password"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {error && (
              <div className="admin-login__error">
                {error}
              </div>
            )}

            <button type="submit" className="admin-login__submit">
              Entrar
            </button>
          </form>

          <div className="admin-login__demo-info">
            <p><strong>Demo:</strong> Senha: admin123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;