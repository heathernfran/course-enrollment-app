import CoursesProvider from "@/app/context/CoursesContext";
import { courses } from "@/app/lib/data";
import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta = {
  title: "Courses/Card",
  component: Card,
  decorators: [
    (Story) => (
      <CoursesProvider>
        <Story />
      </CoursesProvider>
    ),
  ],
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
