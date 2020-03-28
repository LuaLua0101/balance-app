import React, {Component} from 'react';
import {Container, Header, Content, Accordion} from 'native-base';
const dataArray = [
  {title: 'First Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Second Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Third Element', content: 'Lorem ipsum dolor sit amet'},
];
export default class Syllabus extends Component {
  render() {
    return (
      <Accordion
        dataArray={dataArray}
        headerStyle={{backgroundColor: '#4dc4ff'}}
        contentStyle={{backgroundColor: '#fff'}}
      />
    );
  }
}
