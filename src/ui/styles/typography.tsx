import styled, { css } from "styled-components";

interface TextProps{
  color?: string;
  weight?: number;
  disabled?: boolean;
}

const Heading1Style = css`
  font-size: 32px;
  line-height: 36px;
  font-weight: 600;
`
export const Heading1 = styled.h1.attrs((props: TextProps) => props)`
  ${Heading1Style}
  ${props => props.color && css`
    color: ${props.color}
  `};
  ${props => props.weight && css`
    font-weight: ${props.weight}
  `};
`

const Heading2Style = css`
  font-size: 28px;
  line-height: 32px;
  font-weight: 600;
`
export const Heading2 =  styled.h2.attrs((props: TextProps) => props)`
  ${Heading2Style}
  ${props => props.color && css`
    color: ${props.color}
  `};
  ${props => props.weight && css`
    font-weight: ${props.weight}
  `};
`

const Subhead1Style = css`
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
`
export const Subhead1 =  styled.h3.attrs((props: TextProps) => props)`
  ${Subhead1Style}
  ${props => props.color && css`
    color: ${props.color}
  `};
  ${props => props.weight && css`
    font-weight: ${props.weight}
  `};
`
const Subhead2Style = css`
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
`
export const Subhead2 =  styled.h4.attrs((props: TextProps) => props)`
  ${Subhead2Style}
  ${props => props.color && css`
    color: ${props.color}
  `};
  ${props => props.weight && css`
    font-weight: ${props.weight}
  `};
`
const Text16Style = css`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
`
export const Text16 =  styled.p.attrs((props: TextProps) => props)`
  ${Text16Style}
  ${props => props.color && css`
    color: ${props.color}
  `};
  ${props => props.weight && css`
    font-weight: ${props.weight}
  `};
`
const Text14Style = css`
  font-size: 14px;
  line-height: 16px;
  font-weight: 300;
`
export const Text14 =  styled.p.attrs((props: TextProps) => props)`
  ${Text14Style}
  ${props => props.color && css`
    color: ${props.color}
  `};
  ${props => props.weight && css`
    font-weight: ${props.weight}
  `};
`

const Text12Style = css`
  font-size: 12px;
  line-height: 14px;
  font-weight: 300;
`
export const Text12 =  styled.p.attrs((props: TextProps) => props)`
  ${Text12Style}
  ${props => props.color && css`
    color: ${props.color}
  `};
  ${props => props.weight && css`
    font-weight: ${props.weight}
  `};
`