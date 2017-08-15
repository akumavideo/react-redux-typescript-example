import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Button from 'antd/lib/button';

export interface Props extends RouteComponentProps<{}> {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <Button type="primary" onClick={onDecrement}>-</Button>
        <Button type="primary" onClick={onIncrement}>+</Button>
      </div>
    </div>
  );
}

export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}