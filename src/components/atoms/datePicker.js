import React from 'react';
import DatePicker from 'react-native-datepicker';

const DateSelector = props => (
  <DatePicker
    style={{width: 300}}
    showIcon={false}
    date={'01-11-2020'}
    mode="date"
    placeholder="chọn ngày sinh"
    format="DD-MM-YYYY"
    minDate="1970-01-01"
    maxDate="2050-01-01"
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
