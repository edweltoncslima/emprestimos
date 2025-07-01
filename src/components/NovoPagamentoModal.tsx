'use client';

import { useState } from 'react';

interface NovoPagamentoModalProps {
  isOpen: boolean;
  onClose: () => void;
  emprestimoId: string;
  valorRestante: number;
  onPagamentoCriado: () => void;
}

export default function NovoPagamentoModal({
  isOpen,
  onClose,
  emprestimoId,
  valorRestante,
  onPagamentoCriado
}: NovoPagamentoModalProps) {
  const [formData, setFormData] = useState({
    valor: '',
    dataPagamento: new Date().toISOString().split('T')[0],
    metodoPagamento: 'PIX',
    observacoes: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/pagamentos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          emprestimoId,
          valor: parseFloat(formData.valor),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao criar pagamento');
      }

      // Reset form
      setFormData({
        valor: '',
        dataPagamento: new Date().toISOString().split('T')[0],
        metodoPagamento: 'PIX',
        observacoes: ''
      });

      onPagamentoCriado();
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao criar pagamento');
    } finally {
      setSubmitting(false);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Novo Pagamento</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          {/* Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-700">
              <span className="font-medium">Valor restante:</span> {formatCurrency(valorRestante)}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Valor */}
            <div>
              <label htmlFor="valor" className="block text-sm font-medium text-gray-700 mb-2">
                Valor (R$) *
              </label>
              <input
                type="number"
                id="valor"
                name="valor"
                value={formData.valor}
                onChange={handleInputChange}
                required
                min="0.01"
                max={valorRestante}
                step="0.01"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="0,00"
              />
            </div>

            {/* Data do Pagamento */}
            <div>
              <label htmlFor="dataPagamento" className="block text-sm font-medium text-gray-700 mb-2">
                Data do Pagamento
              </label>
              <input
                type="date"
                id="dataPagamento"
                name="dataPagamento"
                value={formData.dataPagamento}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Método de Pagamento */}
            <div>
              <label htmlFor="metodoPagamento" className="block text-sm font-medium text-gray-700 mb-2">
                Método de Pagamento *
              </label>
              <select
                id="metodoPagamento"
                name="metodoPagamento"
                value={formData.metodoPagamento}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="PIX">PIX</option>
                <option value="CARTAO_CREDITO">Cartão de Crédito</option>
                <option value="CARTAO_DEBITO">Cartão de Débito</option>
                <option value="BOLETO">Boleto</option>
                <option value="TRANSFERENCIA">Transferência</option>
                <option value="DINHEIRO">Dinheiro</option>
                <option value="OUTROS">Outros</option>
              </select>
            </div>

            {/* Observações */}
            <div>
              <label htmlFor="observacoes" className="block text-sm font-medium text-gray-700 mb-2">
                Observações
              </label>
              <textarea
                id="observacoes"
                name="observacoes"
                value={formData.observacoes}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Observações sobre o pagamento..."
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Salvando...' : 'Salvar Pagamento'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 