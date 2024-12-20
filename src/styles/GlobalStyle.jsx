import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* 폰트 */

@font-face {
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 300;
  src: url(/assets/fonts/pretendard/Pretendard-Light.woff2) format('woff2'),
    url(/assets/fonts/pretendard/Pretendard-Light.woff) format('woff'),
    url(/assets/fonts/pretendard/Pretendard-Light.otf) format('opentype');
}

@font-face {
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  src: url(/assets/fonts/pretendard/Pretendard-Regular.woff2) format('woff2'),
    url(/assets/fonts/pretendard/Pretendard-Regular.woff) format('woff'),
    url(/assets/fonts/pretendard/Pretendard-Regular.otf) format('opentype');
}

@font-face {
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  src: url(/assets/fonts/pretendard/Pretendard-Medium.woff2) format('woff2'),
    url(/assets/fonts/pretendard/Pretendard-Medium.woff) format('woff'),
    url(/assets/fonts/pretendard/Pretendard-Medium.otf) format('opentype');
}

@font-face {
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  src: url(/assets/fonts/pretendard/Pretendard-Bold.woff2) format('woff2'),
    url(/assets/fonts/pretendard/Pretendard-Bold.woff) format('woff'),
    url(/assets/fonts/pretendard/Pretendard-Bold.otf) format('opentype');
}

/* 색상 변수 */
 :root {

  --Primary: #9935FF;
  --Purple100: #F8F0FF;
  --Purple200: #ECD9FF;
  --Purple300: #DCB9FF;
  --Purple400: #C894FD;
  --Purple500: #AB57FF;
  --Purple600: #861DEE;
  --Purple700: #6E0AD1;
  --Purple800: #5603A7;

  --Beige100: #FFF0D6;
  --Beige200: #FFE2AD;
  --Beige300: #FFC583;
  --Beige400: #FFAE65;
  --Beige500: #FF8832;

  --Blue100: #E2F5FF;
  --Blue200: #B1E4FF;
  --Blue300: #7CD2FF;
  --Blue400: #34B9FF;
  --Blue500: #00A2FE;

  --Green100: #E4FBDC;
  --Green200: #D0F5C3;
  --Green300: #9BE282;
  --Green400: #60CF37;
  --Green500: #2BA600;

  --Gray100: #F6F6F6;
  --Gray200: #EEEEEE;
  --Gray300: #CCCCCC;
  --Gray400: #999999;
  --Gray500: #555555;
  --Gray600: #4A4A4A;
  --Gray700: #3A3A3A;
  --Gray800: #2B2B2B;
  --Gray900: #181818;

  --White: #FFFFFf;
  --Black: #000000;
  --Error: #DC3A3A;
  --Surface: #F6F8FF;

}

/* 초기화 */
* {

  outline: 0;
  box-sizing: border-box;

}

body {

  min-width: 320px;
  line-height: 1.5;
  word-wrap: break-word;
  word-break: break-all;
  overflow-x: hidden;

}

table {

  border-collapse: collapse;
  border-spacing: 0;

}

body,
input,
textarea,
select,
button,
table {

  font-family: 'Pretendard', sans-serif;
  color: var(--Black);
  font-size: 16px;

}

fieldset,
img,
button {

  border: 0;

}

body,
div,
p,
ul,
ol,
li,
dl,
dd,
dt,
h1,
h2,
h3,
h4,
h5,
h6,
table,
tr,
th,
td,
form,
select,
textarea,
fieldset,
legend,
figure,
figcaption,
input,
button {

  margin: 0;
  padding: 0;

}

ol,
ul,
li {

  list-style: none;

}

a {

  text-decoration: none;
  color: var(--Black);

}

em,
address {

  font-style: normal;
  
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {

  display: block;

}

button {

  background: transparent;
  cursor: pointer;

}

.blind {

  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;

}

/* 가운데영역 */
.container{
  max-width: 1200px;
  margin: 0 auto;

  /* Tablet, Mobile */
   @media (max-width:1248px) {
    padding:0 24px;
  }
}

`;

export default GlobalStyle;
