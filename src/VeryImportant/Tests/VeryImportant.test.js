import React from 'react';
import { shallow } from 'enzyme';
import VeryImportant from '../VeryImportant';

describe('VeryImportant component', () => {
  let props;
  let mountedVeryImportant;
  const VeryImportantMount = () => {
    if (!mountedVeryImportant) {
      mountedVeryImportant = shallow(<VeryImportant {...props} />);
    }
    return mountedVeryImportant;
  };
  beforeEach(() => {
    props = {};
    mountedVeryImportant = undefined;
  });
  it('should do', () => {});
});
