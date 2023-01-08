import styled from 'styled-components';

export const ButtonWrapper = styled.button`
	display: flex;
	align-items: center;
	gap: 8px;
	width: max-content;
	height: max-content;
	border-radius: 8px;
	box-shadow: ${({ theme }) => theme.shadows.xs};
	/* hierarchy */
	&.btn-primary {
		border: 1px solid;
		color: ${({ theme }) => theme.colors.white};
		background: ${({ theme }) => theme.colors.primary.p6};
		border-color: ${({ theme }) => theme.colors.primary.p6};
		:hover {
			background: ${({ theme }) => theme.colors.primary.p7};
			border-color: ${({ theme }) => theme.colors.primary.p7};
		}
		:focus {
			box-shadow: ${({ theme }) => theme.shadows.xs}, 0px 0px 0px 4px #f4ebff;
		}
		:disabled {
			cursor: not-allowed;
			background: ${({ theme }) => theme.colors.primary.p2};
			border-color: ${({ theme }) => theme.colors.primary.p2};
		}
	}

	/* sizes */
	&.btn-sm {
		padding: 7px 13px;
	}
	&.btn-md {
		padding: 9px 15px;
	}
	&.btn-lg {
		padding: 11px 17px;
	}
	&.btn-xl {
		padding: 13px 19px;
	}
	&.btn-2xl {
		padding: 17px 28px;
	}
`;
