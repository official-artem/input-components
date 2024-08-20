import { memo, ReactNode } from 'react';
import styled, { CSSProperties } from 'styled-components';

interface Props {
	children: ReactNode;
	display?: CSSProperties['display'];
}

const InputGroupWrapper = styled.div<Props>`
	width: '100%';
	display: ${({ display }) => display ?? 'block'};
`;

export default memo(
	function InputGroup({children, ...props}: Props) {
		return (
			<InputGroupWrapper {...props}>
				{children}
			</InputGroupWrapper>
		);
	}
)