import React from 'react';

import { Loading } from 'components';

const example = {
  title: 'Component/Loading',
  component: Loading,
  argTypes: {},
};

export default example;

const Template = args => <Loading {...args}/>;

export const Default = Template.bind({});
Default.args = {};
