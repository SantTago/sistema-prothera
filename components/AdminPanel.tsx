
import React, { useState } from 'react';
import { 
  BarChart3, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Search, 
  Filter, 
  MoreVertical,
  Eye,
  ArrowUpRight
} from 'lucide-react';

const AdminPanel: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { label: 'Total Pedidos', value: '142', icon: BarChart3, color: 'bg-blue-50 text-blue-600' },
    { label: 'Em Análise', value: '12', icon: Clock, color: 'bg-yellow-50 text-yellow-600' },
    { label: 'Em Produção', value: '8', icon: AlertCircle, color: 'bg-purple-50 text-purple-600' },
    { label: 'Concluídos', value: '122', icon: CheckCircle, color: 'bg-green-50 text-green-600' },
  ];

  const requests = [
    { id: 'DL-3021', patient: 'Maria Oliveira', date: '24/05/2024', store: 'Unidade SP - Matriz', status: 'Concluído', color: 'bg-green-100 text-green-700' },
    { id: 'DL-3022', patient: 'João Carlos Silva', date: '23/05/2024', store: 'Unidade RJ - Filial', status: 'Pendente', color: 'bg-yellow-100 text-yellow-700' },
    { id: 'DL-3023', patient: 'Ana Beatriz Ramos', date: '22/05/2024', store: 'Unidade SP - Matriz', status: 'Em Produção', color: 'bg-purple-100 text-purple-700' },
    { id: 'DL-3024', patient: 'Pedro Henrique', date: '22/05/2024', store: 'Unidade SP - Matriz', status: 'Análise RX', color: 'bg-blue-100 text-blue-700' },
    { id: 'DL-3025', patient: 'Lucas Mendes', date: '21/05/2024', store: 'Parceiro Curitiba', status: 'Concluído', color: 'bg-green-100 text-green-700' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Painel Administrativo</h2>
          <p className="text-gray-500">Gerencie e acompanhe todas as solicitações de SmartBrace 3D.</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all">
          Exportar Relatório
          <ArrowUpRight size={18} />
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-3xl font-black text-gray-900 mt-1">{stat.value}</h3>
            </div>
            <div className={`p-4 rounded-xl ${stat.color}`}>
              <stat.icon size={24} />
            </div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Pesquisar por paciente ou ID..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 text-gray-600 font-bold text-sm border border-gray-200 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors">
            <Filter size={18} />
            Filtros Avançados
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-xs font-bold text-gray-400 uppercase tracking-widest text-left">
              <tr>
                <th className="px-6 py-4">Pedido ID</th>
                <th className="px-6 py-4">Paciente</th>
                <th className="px-6 py-4">Data</th>
                <th className="px-6 py-4">Unidade/Loja</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {requests.map((req, i) => (
                <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-900">{req.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                        {req.patient.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-gray-700">{req.patient}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{req.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{req.store}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${req.color}`}>
                      {req.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-center">
          <button className="text-blue-600 text-sm font-bold hover:underline">Carregar mais solicitações</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
