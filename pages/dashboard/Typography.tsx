import { Card } from 'antd';
import { Text } from '~/components/atomic';

export const TypographyPage = () => (
	<Card>
		<Text type='display' size='2xl' weight='bold'>
			Display Typography 2xl
		</Text>
		<Text type='display' size='xl' weight='semibold'>
			Display Typography xl
		</Text>
		<Text type='display' size='lg' weight='medium'>
			Display Typography lg
		</Text>
		<Text type='display' size='md' weight='regular'>
			Display Typography md
		</Text>
		<Text type='display' size='sm' weight='bold'>
			Display Typography sm
		</Text>
		<Text type='display' size='xs' weight='bold'>
			Display Typography xs
		</Text>

		<Text type='text' size='xl' weight='bold'>
			Text Typography xl
		</Text>
		<Text type='text' size='lg' weight='semibold'>
			Text Typography lg
		</Text>
		<Text type='text' size='md' weight='medium'>
			Text Typography md
		</Text>
		<Text type='text' size='sm' weight='regular'>
			Text Typography sm
		</Text>
		<Text type='text' size='xs' weight='bold'>
			Text Typography xs
		</Text>
	</Card>
);
