import React from 'react';
import { action } from '@storybook/addon-actions';
import { FiChevronsRight } from "react-icons/fi";

import IconButton from './index';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <IconButton {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  icon: <FiChevronsRight />,
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
  icon: <FiChevronsRight />,
  loading: true,
};

export const ButtonWithArgs = Template.bind({});
ButtonWithArgs.args = {
  icon: <FiChevronsRight />,
  onClick: action('Button clicked'),
};
