import * as React from 'react';
import Form from 'antd/lib/form/Form';
import Input from 'antd/lib/input/Input';
import { RouteComponentProps } from 'react-router';
import Icon from 'antd/lib/icon';

export interface Props extends RouteComponentProps<{}> {
  value?: string;
}

export default function AnswerForm(props: Props) {
  return (
    <Form>
      <Form.Item
        label="Title"
        validateStatus="error"
        help="Oh no! Did you forget to include a title?"
      >
        <Input
          name="title"
          value={props.value}
        />
        <Icon type="edit" />
      </Form.Item>
    </Form>
  );
}