import React, { useEffect, useState } from 'react';

const AudienceField = ({ formData, updateFormData, onValidation }) => {
  const [error, setError] = useState<string | null>(null);

  const validateForUI = (value: string) => {
    if (value.trim() === '') {
      setError('audience cannot be empty');
      onValidation(false);
    } else {
      setError(null);
      onValidation(true);
    }
  };

  const justValidate = (value: string) => {
    if (value.trim() === '') {
      onValidation(false);
    } else {
      onValidation(true);
    }
  };

  useEffect(() => {
    justValidate(formData['audience'] || '');
  }, [formData['audience']]);

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    updateFormData({
      ...formData,
      [name]: value,
    });
    validateForUI(value);
  };

  return (
    <div className="page flex h-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-start px-6">
        <h1 className="mb-2 text-2xl font-bold text-white">
          who is your target audience?
        </h1>
        <div className="flex h-full w-full items-center justify-center">
          <input
            type="text"
            name="audience"
            placeholder="type here..."
            value={formData['audience'] || ''}
            onChange={handleInputChange}
            className={`white_placeholder w-full appearance-none rounded ${
              error ? 'border-2 border-red-500' : ''
            } bg-[#63b2fd] px-4 py-2 leading-tight text-white focus:bg-white focus:text-black font-semibold focus:outline-none`}
          />
        </div>
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default AudienceField;
