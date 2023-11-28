import { Box, Stack, Text } from '@mantine/core';
import React from 'react';

import './styles'

interface FormGroupProps {
	title: string;
	className?: string;
	children: React.ReactNode;
}

const FormGroup: React.FC<FormGroupProps> = ({
	title,
	className,
	children,
}) => {

	return (
		<Box className={className}>
			<Text className='groupTitle'>{title}</Text>

			<Stack mt={5} gap={8}>
				{children}
			</Stack>
		</Box>
	);
};

export default FormGroup;
