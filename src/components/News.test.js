import React from 'react';
import { shallow } from 'enzyme';
import NewsItem from './NewsItem';
import axios from 'axios';
 
jest.mock('axios');
 
describe('News component', () => {
  describe('when rendered', () => {
    it('should fetch latest feed from BBC news', () => {
      const getSpy = jest.spyOn(axios, 'get');
      const toDoListInstance = shallow(
        <NewsItem/>
      );
      expect(getSpy).toBeCalled();
    });
  });
});