import React from 'react';
import { shallow } from 'enzyme';
import Discussion from '../Discussion';

describe('Discussion component', () => {
  let props;
  let mountedDiscussion;
  const DiscussionMount = () => {
    if (!mountedDiscussion) {
      mountedDiscussion = shallow(<Discussion {...props} />);
    }
    return mountedDiscussion;
  };
  beforeEach(() => {
    props = {};
    mountedDiscussion = undefined;
  });
  it('should do', () => {});
});
