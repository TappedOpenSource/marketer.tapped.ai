import React, { useEffect, useState } from 'react';

const AestheticField = ({ formData, updateFormData, onValidation }) => {
  const [error, setError] = useState(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  let product = ''

  if (formData['marketing_field'] === 'single') {
    product = 'single'
  } else if (formData['marketing_field'] === 'EP') {
    product = 'EP'
  } else {
    product = 'album'
  }

  const handleInputChange = (e) => {
    setHasInteracted(true);

    const { value } = e.target;
    updateFormData({ ...formData, ['aesthetic_field']: value });
    validateForUI(value);
  };

  const validateForUI = (value) => {
    if (hasInteracted) {
      if (!value) {
        setError('Please select your aesthetic.');
        onValidation(false);
      } else {
        setError(null);
        onValidation(true);
      }
    } else {
      setError(null);
      onValidation(false);
    }
  };

  const justValidate = (value) => {
    if (!value) {
      onValidation(false);
    } else {
      onValidation(true);
    }
  };

  useEffect(() => {
    justValidate(formData['aesthetic_field']);
  }, [formData['aesthetic_field']]);

  const options = [
    'dreamy waves',
    'futuristic cyberpunk',
    '90s y2k',
    'rage rap',
  ];

  return (
    <div className="page flex h-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-start px-6">
        <h1 className="mb-2 text-2xl font-bold text-white">
          what is the {product}'s aesthetic?
        </h1>
        
        {/* New input field */}
        <input
          type="text"
          name="aesthetic_field"
          placeholder="type here..."
          onChange={handleInputChange}
          value={formData['aesthetic_field'] || ''}
          className="w-full appearance-none rounded bg-[#63b2fd] px-4 py-2 mb-4 leading-tight text-white focus:bg-white focus:text-black font-semibold focus:outline-none"
        />
        
        {/* Separator line with "or" */}
        <div className="grid w-full grid-cols-3 items-center my-4">
          <div className="h-px bg-gray-300"></div>
          <span className="text-center text-white">or</span>
          <div className="h-px bg-gray-300"></div>
        </div>
        
        {/* Options */}
        <div className="flex flex-wrap w-full justify-between">
          {options.map((option) => (
            <div key={option} className="w-1/2 flex items-center justify-center mb-4 pr-2">
              <input
                type="radio"
                id={option}
                name="aesthetic_field"
                value={option}
                checked={formData['aesthetic_field'] === option}
                onChange={handleInputChange}
                className="sr-only"
              />
              <label
                htmlFor={option}
                className={`w-full text-center px-4 py-2 rounded-xl cursor-pointer transition duration-200 ease-in-out 
                ${formData['aesthetic_field'] === option ? 'bg-white font-bold text-black' : 'bg-[#63b2fd] font-bold text-white'}`}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
        
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default AestheticField;
