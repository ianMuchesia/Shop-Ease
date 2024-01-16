import { useRouter } from 'next/router';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface PaymentFormData {
  name: string;
  card_number: string;
  card_type: string;
  exp_date: string;
  cvv: string;
}

const Payment: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormData>();

  const router = useRouter();

  const onSubmit: SubmitHandler<PaymentFormData> = (data) => {
    // Handle form submission logic here
    console.log(data);
    router.push('/success');

  };

  return (
    <div className="credit-info">
      <div className="rightside">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Payment Information</h2>

          <p>Cardholder Name</p>
          <input type="text" className="inputbox" {...register('name', { required: 'Name is required' })} />
          {errors.name && <p className="error-message">{errors.name.message}</p>}

          <p>Card Number</p>
          <input type="text" className="inputbox" {...register('card_number', { required: 'Card number is required' })} />
          {errors.card_number && <p className="error-message">{errors.card_number.message}</p>}

          <p>Card Type</p>
          <select className="inputbox" {...register('card_type', { required: 'Card type is required' })}>
            <option value="">--Select a Card Type--</option>
            <option value="Visa">Visa</option>
            <option value="RuPay">RuPay</option>
            <option value="MasterCard">MasterCard</option>
          </select>
          {errors.card_type && <p className="error-message">{errors.card_type.message}</p>}

          <div className="expcvv">
            <p className="expcvv_text">Expiry</p>
            <input type="date" className="inputbox" {...register('exp_date', { required: 'Expiry date is required' })} />
            {errors.exp_date && <p className="error-message">{errors.exp_date.message}</p>}

            <p className="expcvv_text2">CVV</p>
            <input type="password" className="inputbox" {...register('cvv', { required: 'CVV is required' })} />
            {errors.cvv && <p className="error-message">{errors.cvv.message}</p>}
          </div>

          <button type="submit" className="button">
            CheckOut
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
