// PaymentForm.jsx
import React, { useState } from 'react';

// PaymentForm component for collecting payment details
const PaymentForm = ({ onClose, onPaymentSubmit }) => {
  // State variables for card details
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  // Handler function for form submission
  const handleSubmit = () => {
    onPaymentSubmit();
  };

  return (
    <div className='flex flex-col h-screen justify-center items-center '>
      {/* Payment form container */}
      <div className="p-6 bg-white rounded-[1rem] h-[30vh] w-[30vw]">
        {/* Payment form title */}
        <h2 className="text-lg font-bold mb-4">Payment Details</h2>
        
        {/* Card Number input */}
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
        
        {/* Expiry Date and CVV inputs in a grid layout */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Expiry Date input */}
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
          
          {/* CVV input */}
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
        
        {/* Submit Payment button */}
        <button
          className="bg-[#EAA800] text-white py-2 px-4 rounded-md hover:bg-[#FFD54F]"
          onClick={handleSubmit}
        >
          Submit Payment
        </button>
        
        {/* Cancel button */}
        <button className="mt-2 text-sm text-gray-600 ml-4" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

// Exporting the PaymentForm component as the default export
export default PaymentForm;