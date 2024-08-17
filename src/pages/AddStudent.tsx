import React from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const AddStudent: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="addStudent"
      onFinish={onFinish}
      scrollToFirstError
      style={{ maxWidth: "600px", margin: "auto" }}
    >
      <Form.Item
        name="studentName"
        label="Student Name"
        rules={[{ required: true, message: "Please input the student name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="roll"
        label="Roll Number"
        rules={[{ required: true, message: "Please input the roll number!" }]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        name="department"
        label="Department"
        rules={[{ required: true, message: "Please select the department!" }]}
      >
        <Select placeholder="Select department">
          <Option value="Computer">Computer</Option>
          <Option value="Mechanical">Mechanical</Option>
          <Option value="Electrical">Electrical</Option>
          <Option value="Civil-Wood">Civil-Wood</Option>
          <Option value="Automobile">Automobile</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="address"
        label="Address"
        rules={[{ required: true, message: "Please input the address!" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: "Please input the phone number!" }]}
      >
        <Input style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddStudent;
