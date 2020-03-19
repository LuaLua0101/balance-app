import React from 'react';
import {Button, Text, Footer, FooterTab} from 'native-base';

const Course = props => {
  return (
    <>
      <Text>course</Text>
      <Footer>
        <FooterTab style={{backgroundColor: '#8fbd40'}}>
          <Button>
            <Text style={{color: '#fff'}}>Apps</Text>
          </Button>
          <Button>
            <Text style={{color: '#fff'}}>Navigate</Text>
          </Button>
          <Button>
            <Text style={{color: '#fff'}}>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    </>
  );
};

export default Course;
