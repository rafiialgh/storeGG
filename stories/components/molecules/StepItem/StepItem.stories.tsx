import { Meta, StoryFn } from "@storybook/react";
import StepItem, { StepItemProps } from "../../../../components/molecules/StepItem";

export default {
  title: 'Components/Molecules/StepItem',
  component: StepItem,
  tags: ['autodocs']
} as Meta;

const Template: StoryFn<StepItemProps> = (args) => <StepItem {...args}/>;

export const Default = Template.bind({});

Default.args = {
  title: '1. Start',
  icon: 'step1',
  desc1: 'Pilih salah satu game',
  desc2: 'yang ingin kamu top up',
};