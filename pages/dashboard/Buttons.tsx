import { Card } from 'antd';
import { RiAddCircleLine } from 'react-icons/ri';
import { Button, Text } from '~/components/atomic';

export const ButtonsPage = () => {
	return (
		<Card>
			<Text type='display' size='2xl'>
				Buttons
			</Text>
			<div className='flex flex-col gap-4 flex-wrap'>
				<div className='flex gap-2 flex-wrap'>
					<Button
						iconLeading={<RiAddCircleLine size={20} />}
						iconTrailing={<RiAddCircleLine size={20} />}
						size='sm'
					>
						Button CTA
					</Button>
					<Button
						iconLeading={<RiAddCircleLine size={20} />}
						iconTrailing={<RiAddCircleLine size={20} />}
					>
						Button CTA
					</Button>
				</div>
				<div className='flex gap-2 flex-wrap'>
					<Button
						iconLeading={<RiAddCircleLine size={20} />}
						iconTrailing={<RiAddCircleLine size={20} />}
						size='sm'
						disabled
					>
						Button CTA
					</Button>
					<Button
						iconLeading={<RiAddCircleLine size={20} />}
						iconTrailing={<RiAddCircleLine size={20} />}
						disabled
					>
						Button CTA
					</Button>
				</div>
			</div>
		</Card>
	);
};
