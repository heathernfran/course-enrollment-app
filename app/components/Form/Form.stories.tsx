import CoursesProvider from "@/app/context/CoursesContext";
import { courses } from "@/app/lib/data";
import type { Meta, StoryObj } from "@storybook/react";
import Form from "./Form";

const meta = {
  title: "Courses/Form",
  component: Form,
  decorators: [
    (Story) => (
      <CoursesProvider>
        <Story />
      </CoursesProvider>
    ),
  ],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    courses,
  },
};
