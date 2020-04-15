import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import * as Progress from 'react-native-progress';

import {
  EditSalaryForm,
  EditDegreeForm,
  EditScheduleForm,
  EditSkillForm,
  EditExpectJobForm,
} from '.';

const CVList = props => {
  const [modalSalary, setModalSalary] = useState(false);
  const [modalSchedule, setModalSchedule] = useState(false);
  const [modalSkill, setModalSkill] = useState(false);
  const [modalExpectedJob, setModalExpectedJob] = useState(false);
  const [modalDegree, setModalDegree] = useState(false);

  const openModalSalary = () => {
    setModalSalary(true);
  };

  const openModalSchedule = () => {
    setModalSchedule(true);
  };

  const openModalSkill = () => {
    setModalSkill(true);
  };

  const openModalExpectedJob = () => {
    setModalExpectedJob(true);
  };

  const openModalDegree = () => {
    setModalDegree(true);
  };

  const closeModalSalary = () => {
    setModalSalary(false);
  };

  const closeModalSkill = () => {
    setModalSkill(false);
  };

  const closeModalShedule = () => {
    setModalSchedule(false);
  };

  const closeModalExpectedJob = () => {
    setModalExpectedJob(false);
  };

  const closeModalDegree = () => {
    setModalDegree(false);
  };

  return (
    <>
      <EditSalaryForm
        modal={modalSalary}
        openModal={openModalSalary}
        closeModal={closeModalSalary}
      />
      <EditDegreeForm
        modal={modalDegree}
        openModal={openModalDegree}
        closeModal={closeModalDegree}
      />
      <EditScheduleForm
        modal={modalSchedule}
        openModal={openModalSchedule}
        closeModal={closeModalShedule}
      />
      <EditSkillForm
        modal={modalSkill}
        openModal={openModalSkill}
        closeModal={closeModalSkill}
      />
      <EditExpectJobForm
        modal={modalExpectedJob}
        openModal={openModalExpectedJob}
        closeModal={closeModalExpectedJob}
      />
      <View style={styles.card}>
        <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
          <Text style={styles.name}>Mức độ hoàn thiện hồ sơ : 50%</Text>
          <Progress.Bar progress={0.5} width={null} />
        </View>
      </View>
      <TouchableOpacity style={styles.card} onPress={openModalDegree}>
        <Image
          style={styles.image}
          source={require('../../../assets/bachelor.png')}
        />
        <View style={styles.cardContent}>
          <Text style={styles.name}>Bằng cấp</Text>
          <Text style={styles.count}>33333</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={openModalSalary}>
        <Image
          style={styles.image}
          source={require('../../../assets/salary.png')}
        />
        <View style={styles.cardContent}>
          <Text style={styles.name}>Lương mong muốn</Text>
          <Text style={styles.count}>33333</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={openModalSkill}>
        <Image
          style={styles.image}
          source={require('../../../assets/skill.png')}
        />
        <View style={styles.cardContent}>
          <Text style={styles.name}>Kỹ năng</Text>
          <Text style={styles.count}>33333</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={openModalExpectedJob}>
        <Image
          style={styles.image}
          source={require('../../../assets/worker.png')}
        />
        <View style={styles.cardContent}>
          <Text style={styles.name}>Vị trí mong muốn</Text>
          <Text style={styles.count}>33333</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={openModalSchedule}>
        <Image
          style={styles.image}
          source={require('../../../assets/schedule.png')}
        />
        <View style={styles.cardContent}>
          <Text style={styles.name}>Thời gian làm việc</Text>
          <Text style={styles.count}>33333</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default CVList;

const styles = StyleSheet.create({
  cardContent: {
    marginLeft: 20,
    marginTop: 20,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ebf0f7',
  },

  card: {
    // shadowColor: '#00000021',
    // shadowOffset: {
    //   width: 0,
    //   height: 6,
    // },
    // shadowOpacity: 0.37,
    // shadowRadius: 7.49,
    // elevation: 10,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: '#4dc4ff',
    fontWeight: 'bold',
  },
  count: {
    fontSize: 14,
    flex: 1,
    color: '#8b929b',
  },
  followButton: {
    marginTop: 10,
    height: 15,
    width: 70,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#8bc94d',
  },
  followButtonText: {
    color: '#8bc94d',
    fontSize: 14,
  },
});
