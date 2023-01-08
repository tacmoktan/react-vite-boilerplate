import { TextWrapper } from './Styles';

interface TextProps {
	children: React.ReactNode;
	type?: 'text' | 'display';
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
	weight?: 'regular' | 'medium' | 'semibold' | 'bold';
}

const Text = ({ children, type = 'text', size = 'md', weight = 'regular' }: TextProps) => {
	const mapSizeToClass: any = {
		text: {
			// these are tailwind text size classes
			xs: 'text-xs',
			sm: 'text-sm',
			md: 'text-base',
			lg: 'text-lg',
			xl: 'text-xl',
		},
		display: {
			xs: 'display-text-xs',
			sm: 'display-text-sm',
			md: 'display-text-md',
			lg: 'display-text-lg',
			xl: 'display-text-xl',
			'2xl': 'display-text-2xl',
		},
	};

	const mapWeightToClass: any = {
		// these are tailwind text weight classes
		regular: 'font-regular',
		medium: 'font-medium',
		semibold: 'font-semibold',
		bold: 'font-bold',
	};

	return (
		<TextWrapper className={`${mapSizeToClass[type][size]} ${mapWeightToClass[weight]}`}>
			{children}
		</TextWrapper>
	);
};

export default Text;
