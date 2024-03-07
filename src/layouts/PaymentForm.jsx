// PaymentForm.jsx
import React, { useState } from 'react';

const PaymentForm = ({ onClose, onPaymentSubmit }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleSubmit = () => {
    onPaymentSubmit();
  };

  return (
    <div className='flex flex-col h-screen justify-center items-center '>
    <div className="p-6 bg-white rounded-[1rem] h-[30vh] w-[30vw]">
      <h2 className="text-lg font-bold mb-4">Payment Details</h2>
      <div className="mb-4">
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-600">
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter card number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-600">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiryDate"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cvv" className="block text-sm font-medium text-gray-600">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter CVV"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
          />
        </div>
      </div>
      <button
        className="bg-[#EAA800] text-white py-2 px-4 rounded-md hover:bg-[#FFD54F]"
        onClick={handleSubmit}
      >
        Submit Payment
      </button>
      <button className="mt-2 text-sm text-gray-600 ml-4" onClick={onClose}>
        Cancel
      </button>
    </div>
    </div>
  );
};

export default PaymentForm;
