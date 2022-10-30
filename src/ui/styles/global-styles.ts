import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  text-decoration: none;
  color: #000000;
}
body{
	font-family: 'Montserrat', sans-serif;
}
html{
  box-sizing: border-box;
  scroll-snap-type: y mandatory;
}
*, *:before, *:after{
  box-sizing: inherit;
}
button{
	border: none;
	background-color: none;
	padding: 0;
	margin: 0;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body{
  background-color: #F5F6FA
}
button{
	background: none repeat scroll 0 0 transparent;
  border: medium none;
  border-spacing: 0;
  color: #26589F;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.42rem;
  list-style: none outside none;
  margin: 0;
  padding: 0;
  text-align: left;
  text-decoration: none;
  text-indent: 0;
	font-family: 'Montserrat', sans-serif;
	border: none;
  outline: none;
  outline: unset;
}
button::-moz-focus-inner,
input[type=button]::-moz-focus-inner {
  border: 0;
}
button:active,
button:focus{
	border: none;
	outline: none;
  outline: unset;
}


`