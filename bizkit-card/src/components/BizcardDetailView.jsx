import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const BizCardDetailView = () => {
  const { bizcard_id } = useParams(); // Extract bizcard_id from URL
  const [bizCard, setBizCard] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBizCardDetails = async () => {
      try {
        const response = await axios.get('https://9jdcxxr1-8000.inc1.devtunnels.ms/web-view/', {
          params: {
            bizcard_id, // Include bizcard_id as a query parameter
          },
        });
        setBizCard(response.data);
      } catch (error) {
        console.error(error);
        setError(error.response ? error.response.data : 'An error occurred');
      }
    };
    fetchBizCardDetails();
  }, []);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-100 text-red-700 p-4 rounded">
          Error: {error.message}
        </div>
      </div>
    );
  }

  if (!bizCard) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-full items-center min-h-screen bg-[#08353B]">
    <div className="bg-[#111314] rounded-lg shadow-lg p-6 w-80">
      {bizCard.logo && (
        <div className="flex justify-center mb-4">
          <div className="rounded-full w-28 h-28 overflow-hidden border border-gray-700">
            <img
              src={`data:image/jpeg;base64,${bizCard.logo}`}
              alt="Company Logo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}
      <h1 className="text-2xl font-bold mb-2 text-center text-[#09AD8A]">
        {bizCard.name || 'N/A'}
      </h1>
      <div className="text-center mb-6">
        <p className="text-white">{bizCard.designation || 'N/A'}</p>
        <p className="text-white">{bizCard.company_name || 'N/A'}</p>
      </div>
      <div className="text-center">
        <button className="bg-[#09AD8A] text-white py-2 px-4 rounded hover:bg-[#09AD8A]-600">
          Download Now ⬇️  
        </button>
      </div>
    </div>
  </div>
);
};

export default BizCardDetailView;
