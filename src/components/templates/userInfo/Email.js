import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

const mainColor = '#01C89E';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,
    marginTop: 25,
  },
  iconRow: {
    flex: 2,
    justifyContent: 'center',
  },
  smsIcon: {
    color: 'gray',
    fontSize: 30,
  },
  smsRow: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  telIcon: {
    color: mainColor,
    fontSize: 30,
  },
  telNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  telNameText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '200',
  },
  telNumberColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  telNumberText: {
    fontSize: 16,
  },
  telRow: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const Tel = ({containerStyle, index, name, email, onPressEmail}) => {
  return (
    <TouchableOpacity onPress={() => onPressEmail(email)}>
      <View style={[styles.container, containerStyle]}>
        <View style={styles.iconRow}>
          <Icon
            name="email"
            underlayColor="transparent"
            iconStyle={styles.telIcon}
            onPress={() => onPressEmail(email)}
          />
        </View>
        <View style={styles.telRow}>
          <View style={styles.telNumberColumn}>
            <Text style={styles.telNumberText}>{email}</Text>
          </View>
          <View style={styles.telNameColumn}>
            {name.trim().length !== 0 && (
              <Text style={styles.telNameText}>Email</Text>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

Tel.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  index: PropTypes.string.isRequired,
  name: PropTypes.string,
  number: PropTypes.string.isRequired,
  onPressSms: PropTypes.func.isRequired,
  onPressEmail: PropTypes.func.isRequired,
};

Tel.defaultProps = {
  containerStyle: {},
  name: null,
};

export default Tel;
