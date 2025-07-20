// Demo page rendering <RecurringDatePicker />
import React from 'react';
import RecurringDatePicker from '../components/RecurringDatePicker';

const HomePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Recurring Date Picker Demo</h1>
      <RecurringDatePicker />
    </div>
  );
};

export default HomePage;

