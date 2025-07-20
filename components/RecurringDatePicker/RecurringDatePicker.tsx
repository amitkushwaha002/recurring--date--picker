import React from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import CustomInterval from './CustomInterval';
import WeekdaySelector from './WeekdaySelector';
import PatternSelector from './PatternSelector';
import DateRangeSelector from './DateRangeSelector';
import CalendarPreview from './CalendarPreview';

const RecurringDatePicker: React.FC = () => {
  return (
    <div className="p-6 max-w-xl mx-auto border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Recurring Date Picker</h1>
      <RecurrenceOptions />
      <CustomInterval />
      <WeekdaySelector />
      <PatternSelector />
      <DateRangeSelector />
      <CalendarPreview />
    </div>
  );
};

export default RecurringDatePicker;
