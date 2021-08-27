import React from 'react';

import { Button } from 'components';
import { ReactComponent as EditIcon } from "assets/img/ic_edit.svg";


const example = {
  title: 'Component/Button',
  component: Button,
};

export default example;

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'button',
  primary: true,
  padding: '10px 20px',
  font: 'button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'button',
  primary: false,
  padding: '10px 20px',
  font: 'button'
};

export const Rounded = Template.bind({});
Rounded.args = {
  children: 'button',
  primary: true,
  rounded: true,
  padding: '10px 20px',
  font: 'button'
};

export const Black = Template.bind({});
Black.args = {
  children: 'button',
  primary: true,
  black: true,
  padding: '10px 20px',
  font: 'button'
};


export const Full = Template.bind({});
Full.args = {
  children: 'button',
  primary: true,
  full: true,
  padding: '10px 20px',
  font: 'button'
};

export const Icon = Template.bind({});
Icon.args = {
  children: <>button<EditIcon width="20" height="20" style={{'margin-left': '8px', color: 'red'} }/></>,
  primary: true,
  padding: '10px 20px',
  font: 'button'
};
