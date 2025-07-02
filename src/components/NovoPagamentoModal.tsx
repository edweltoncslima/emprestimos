'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, DollarSign, Calendar, CreditCard } from 'lucide-react';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      metodoPagamento: value
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
          metodoPagamento: formData.metodoPagamento,
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <DollarSign className="h-5 w-5" />
            <span>Novo Pagamento</span>
          </DialogTitle>
          <DialogDescription>
            Registre um novo pagamento para este empréstimo
          </DialogDescription>
        </DialogHeader>

        {/* Error Message */}
        {error && (
          <Card className="border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20">
            <CardContent className="pt-4">
              <p className="text-red-700 dark:text-red-300 text-sm">
                {error}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Info Card */}
        <Card className="border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/20">
          <CardContent className="pt-4">
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                Valor Restante
              </Badge>
              <span className="font-semibold text-blue-700 dark:text-blue-300">
                {formatCurrency(valorRestante)}
              </span>
            </div>
          </CardContent>
        </Card>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Valor */}
          <div className="space-y-2">
            <Label htmlFor="valor">Valor (R$)</Label>
            <Input
              type="number"
              id="valor"
              name="valor"
              value={formData.valor}
              onChange={handleInputChange}
              required
              min="0.01"
              max={valorRestante}
              step="0.01"
              placeholder="0,00"
              className="text-lg font-medium"
            />
          </div>

          {/* Data do Pagamento */}
          <div className="space-y-2">
            <Label htmlFor="dataPagamento" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Data do Pagamento</span>
            </Label>
            <Input
              type="date"
              id="dataPagamento"
              name="dataPagamento"
              value={formData.dataPagamento}
              onChange={handleInputChange}
            />
          </div>

          {/* Método de Pagamento */}
          <div className="space-y-2">
            <Label htmlFor="metodoPagamento" className="flex items-center space-x-2">
              <CreditCard className="h-4 w-4" />
              <span>Método de Pagamento</span>
            </Label>
            <Select value={formData.metodoPagamento} onValueChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o método" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="PIX">PIX</SelectItem>
                <SelectItem value="CARTAO_CREDITO">Cartão de Crédito</SelectItem>
                <SelectItem value="CARTAO_DEBITO">Cartão de Débito</SelectItem>
                <SelectItem value="BOLETO">Boleto</SelectItem>
                <SelectItem value="TRANSFERENCIA">Transferência</SelectItem>
                <SelectItem value="DINHEIRO">Dinheiro</SelectItem>
                <SelectItem value="OUTROS">Outros</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Observações */}
          <div className="space-y-2">
            <Label htmlFor="observacoes">Observações</Label>
            <Textarea
              id="observacoes"
              name="observacoes"
              value={formData.observacoes}
              onChange={handleInputChange}
              placeholder="Observações sobre o pagamento..."
              rows={3}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={submitting}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={submitting || !formData.valor}
              className="bg-green-600 hover:bg-green-700"
            >
              {submitting ? 'Registrando...' : 'Registrar Pagamento'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 