
import React, { useState } from 'react';
import { Lock, User, AlertCircle } from 'lucide-react';

interface Props {
  onLogin: () => void;
}

const Login: React.FC<Props> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'prothera' && password === '1234') {
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="inline-block bg-blue-600 p-4 rounded-2xl mb-4 shadow-xl shadow-blue-100">
             <span className="text-white font-black text-4xl tracking-tighter">DILEPÉ</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Portal SmartBrace 3D</h2>
          <p className="text-gray-500 mt-2">Acesse sua conta para gerenciar solicitações</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 p-3 rounded-lg flex items-center gap-2 text-sm animate-shake">
                <AlertCircle size={18} />
                Usuário ou senha incorretos
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Usuário</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Seu usuário"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Senha</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all transform active:scale-95"
            >
              Entrar no Sistema
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-xs">
              Esqueceu sua senha? Entre em contato com o suporte técnico Dilepé.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
