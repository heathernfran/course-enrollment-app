import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import { courses } from "@/app/lib/data";

const meta = {
  title: "Courses/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardWithTwoDates: Story = {
  args: {
    course: courses[0],
  },
};

export const CardWithOneDate: Story = {
  args: {
    course: courses[1],
  },
};
