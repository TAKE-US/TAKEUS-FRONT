import React from 'react';

import { Header } from './Header';

const header = {
  title: 'Example/Header',
  component: Header,
};
export default header;

const Template = args => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
