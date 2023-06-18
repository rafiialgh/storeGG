import { Meta, StoryFn } from "@storybook/react";
import Input, { InputProps } from "../../../../components/atoms/Input";

export default {
  title: 'Components/Atoms/Input',
  component: Input,
  tags: ['autodocs']
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args}/>;

export const Default = Template.bind({});

Default.args = {
  label: 'Nama Lengkap'
};