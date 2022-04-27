
import DatePicker from 'react-native-modern-datepicker';
const SelectDate = ({setDate , options}) => {
  
  return (
    <DatePicker
      mode="calendar"
      options={options}
      selectorStartingYear={2000}
      onSelectedChange={selectedDate => setDate(selectedDate)}
    />    
  );
};

export { SelectDate }