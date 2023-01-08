import { ButtonWrapper } from './Styles';

interface ButtonProps {
	size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
	hierarchy?:
		| 'primary'
		| 'secondary gray'
		| 'secondary'
		| 'tertiary'
		| 'tertiary gray'
		| 'link'
		| 'link gray';
	destructive?: boolean;
	loading?: boolean;
	disabled?: boolean;
	iconLoading?: React.ReactNode;
	iconLeading?: React.ReactNode;
	iconTrailing?: React.ReactNode;
	children?: React.ReactNode;
	htmlType?: 'button' | 'submit' | 'reset';
	className?: string;
}

const Button = ({
	size = 'md',
	hierarchy = 'primary',
	destructive,
	loading,
	disabled,
	iconLoading,
	iconLeading,
	iconTrailing,
	children,
	htmlType = 'button',
	className,
}: ButtonProps) => {
	const mapSizeToClass: any = {
		sm: 'btn-sm text-sm',
		md: 'btn-md text-sm',
		lg: 'btn-lg text-md',
		xl: 'btn-sm text-md',
		'2xl': 'btn-2xl text-lg',
	};
	const mapHierarchyToClass: any = {
		primary: 'btn-primary',
		secondary: 'btn-secondary',
		'secondary gray': 'btn-secondary-gray',
		tertiary: 'btn-tertiary',
		'tertiary gray': 'btn-tertiary-gray',
		link: 'btn-link',
		'link gray': 'btn-link-gray',
	};
	return (
		<ButtonWrapper
			className={`font-semibold ${mapHierarchyToClass[hierarchy]} ${mapSizeToClass[size]} ${
				destructive ? 'btn-danger' : ''
			} ${className}`}
			type={htmlType}
			disabled={disabled}
		>
			{loading && iconLoading}
			{iconLeading}
			{children}
			{iconTrailing}
		</ButtonWrapper>
	);
};

export default Button;
