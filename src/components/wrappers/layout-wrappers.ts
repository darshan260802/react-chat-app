
import styled from 'styled-components';

export const ScreenWrapper = styled('div')`
height: 100vh;
width: 100vw;
`

export const PageWrapper = styled('div')`
height: 100%;
width: 100%;
overflow-x: hidden;
`
export const ImageWrapper = styled('img')<{fit?:'cover' | 'contain'}>`
height: 100%;
width: 100%;
max-width: 100%;
max-height: 100%;
object-fit: ${props => props.fit ?? 'cover'};
object-position: center;
`