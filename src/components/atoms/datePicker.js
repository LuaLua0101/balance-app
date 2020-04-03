import React from 'react';
import DatePicker from 'react-native-datepicker';

const DateSelector = props => (
  <DatePicker
    style={{width: 300}}
    showIcon={false}
    date={props.value}
    onDateChange={date => {
      props.setValue(date);
    }}
    mode="date"
    placeholder="chọn ngày sinh"
    format="DD-MM-YYYY"
    minDate="01-01-1970"
    maxDate="01-01-2050"
    customStyles={{
      dateInput: {
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderWidth: 0,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',

        shadowColor: '#808080',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      },
    }}
  />
);

export default DateSelector;
