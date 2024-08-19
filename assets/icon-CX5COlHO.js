import{j as o,d as r}from"./styled-components.browser.esm-BmQQ1SYj.js";import{r as l}from"./index-DJO9vBfz.js";const i={sm:{fontSize:"12px",padding:"2px 0",iconSize:"12px"},md:{fontSize:"14px",padding:"4px 0",iconSize:"14px"},lg:{fontSize:"16px",padding:"6px 0",iconSize:"16px"},xl:{fontSize:"18px",padding:"8px 0",iconSize:"18px"}},h={sm:"small",md:"medium",lg:"large",xl:"extra-large"},s={top:{bottom:"150%",left:"50%","margin-left":"-60px"},bottom:{top:"150%",left:"50%","margin-left":"-60px"},left:{top:"50%",transform:"translateY(-50%);",right:"105%"},right:{top:"50%",transform:"translateY(-50%);",left:"140%"}},p={top:{top:"100%",left:"50%","margin-left":"-5px","border-width":"5px","border-style":"solid","border-color":"black transparent transparent transparent"},bottom:{bottom:"100%",left:"50%","margin-left":"-5px","border-width":"5px","border-style":"solid","border-color":"transparent transparent black transparent"},right:{top:"50%",right:"100%","margin-top":"-5px","border-width":"5px","border-style":"solid","border-color":"transparent black transparent transparent"},left:{top:"50%",left:"100%","margin-top":"-5px","border-width":"5px","border-style":"solid","border-color":"transparent transparent transparent black"}},d=r.label``,c=r.div`
	display: flex;
	font-family: ${({fontFamily:t})=>t??"sans-serif"};
	font-size: ${({size:t})=>i[t??"md"].fontSize};
	padding: ${({size:t})=>i[t??"md"].padding};
	align-items: center;
	width: ${({width:t})=>t??"100%"};
	flex-wrap: wrap;
	word-break: break-word;
	font-family: ${({fontFamily:t})=>t};
`,x=r.img`
  -webkit-user-drag: none;
  pointer-events: none;
	width: ${({size:t})=>i[t??"md"].iconSize};
	height: ${({size:t})=>i[t??"md"].iconSize};
	margin-left: ${({marginLeft:t})=>t??"0.5rem"};
	object-fit: contain;

	&:hover + * {
    ${({tooltipText:t})=>t&&"visibility: visible;"}
  }
`,m=r.div`
	margin: 0;
	padding: 0;
	position: relative;
`,b=r.span`
	visibility: hidden;
  background-color: ${({tooltipBackground:t})=>t??"black"};;
  color: ${({tooltipColor:t})=>t??"white"};
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
	width: 120px;
  ${({tooltipPosition:t})=>s[t??"right"]};

	&::after {
		content: "";
		position: absolute;
		${({tooltipPosition:t})=>p[t??"right"]};
	}
`,w=l.memo(function({htmlFor:n,title:a,...e}){return o.jsxs(c,{...e,children:[o.jsx(d,{htmlFor:n,...e,children:a}),o.jsxs(m,{children:[e.icon&&o.jsx(x,{src:e.icon,...e}),o.jsx(b,{...e,children:e.tooltipText})]})]})}),S="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23bebebe'%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.716,4.354a8.031,8.031,0,1,0-2.7,13.138l3.58,3.581A3.164,3.164,0,0,0,21.073,16.6l-3.58-3.58A8.046,8.046,0,0,0,15.716,4.354ZM10.034,16.069A6.033,6.033,0,1,1,14.3,14.3,6,6,0,0,1,10.034,16.069Zm9.625,1.943a1.165,1.165,0,0,1-1.647,1.647l-3.186-3.186a8.214,8.214,0,0,0,.89-.757,8.214,8.214,0,0,0,.757-.89Z'/%3e%3c/svg%3e";export{w as I,h as a,S as b};
