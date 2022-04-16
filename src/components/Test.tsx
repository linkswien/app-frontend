import React from 'react';

export interface Props {
	name: string;
}

const Test = ({ name = 'test' }: Props) => <div>{name}</div>;

export default Test;
