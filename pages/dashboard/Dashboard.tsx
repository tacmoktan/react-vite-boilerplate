import React from 'react';
import { z } from 'zod';

import { useRHForm, ControlledField } from '~/components/form';

import { useTypeSafeTranslation } from '~/hooks/useTypeSafeTranslation';
import { TypographyPage } from './Typography';
import { ButtonsPage } from './Buttons';

const Dashboard: React.FC = () => {
	const { t } = useTypeSafeTranslation();

	const schema = z.object({
		firstName: z.string().min(1, { message: 'FirstName is required' }),
	});

	const handleSubmit = (data: any) => console.log(data);
	const { Form, methods } = useRHForm({ initialValues: null, schema });

	return (
		<div>
			<div className='flex flex-col gap-8'>
				<TypographyPage />
				<ButtonsPage />
			</div>
			{/*
			<Card>
				<Form onSubmit={handleSubmit}>
					<ControlledField
					control={methods.control}
					name='firstName'
						Component={Input}
						errors={methods.formState.errors}
						componentProps={{ size: 'small' }}
					/>
				</Form>
			</Card>
				*/}
		</div>
	);
};

export default Dashboard;
