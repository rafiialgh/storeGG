import { Meta, StoryFn } from "@storybook/react";
import GameItem, { GameItemProps } from "../../../../components/molecules/GameItem";

export default {
  title: 'Components/Molecules/GameItem',
  component: GameItem,
  tags: ['autodocs']
} as Meta;

const Template: StoryFn<GameItemProps> = (args) => <GameItem {...args}/>;

export const Default = Template.bind({});
Default.args = {
  title: 'Super Mechs',
  category: 'Mobile',
  thumbnail: 'Thumbnail-1'
};