'use client';
 
import { useStripe } from '@/app/hooks/useStripe';

export default function Pagamentos() {
  const {
    createPaymentStripeCheckout,
    createSubscriptionStripeCheckout,
    handleCreateStripePortal,
  } = useStripe();

  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Pagamentos</h1>
      <button
        className="border rounded-md px-4 py-2 cursor-pointer"
        onClick={() => createPaymentStripeCheckout({ testeId: '124' })}
      >
        Criar Pagamento Stripe
      </button>
      <button
        className="border rounded-md px-4 py-2 cursor-pointer"
        onClick={() => createSubscriptionStripeCheckout({ testeId: '124' })}
      >
        Criar Assinatura Stripe
      </button>
      <button
        className="border rounded-md px-4 py-2 cursor-pointer"
        onClick={handleCreateStripePortal}
      >
        Criar Portal de Pagamento
      </button>
    </div>
  )
}

