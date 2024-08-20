import{j as o,d as r}from"./styled-components.browser.esm-BmQQ1SYj.js";import{r as s}from"./index-DJO9vBfz.js";const e={sm:{fontSize:"12px",padding:"8px 12px",borderRadius:"4px",iconSize:"12px",width:"100px"},md:{fontSize:"14px",padding:"10px 14px",borderRadius:"6px",iconSize:"16px",width:"150px"},lg:{fontSize:"16px",padding:"12px 16px",borderRadius:"8px",iconSize:"20px",width:"200px"},xl:{fontSize:"18px",padding:"14px 18px",borderRadius:"10px",iconSize:"24px",width:"250px"}},p={sm:"small",md:"medium",lg:"large",xl:"extra-large"};function a(i){return typeof i=="number"?`${i}px`:i===void 0?null:i}const c=r.input`
	box-sizing: border-box;
	border: none;
	width: 100%;
	font-family: ${({fontFamily:i})=>i};
	font-size: ${({size:i})=>e[i??"md"].fontSize};
	background-color: ${({backgroundColor:i})=>i??"white"};
	border-radius: ${({size:i})=>e[i??"md"].borderRadius};
	padding: ${({size:i})=>e[i??"md"].padding};
	${({isDisabled:i})=>i&&"cursor: not-allowed;"}
	padding-left: ${({leftIcon:i,size:t})=>{if(i)return`calc(${e[t??"md"].iconSize} + .75rem)`}};

	padding-right: ${({rightIcon:i,lastIcon:t,size:n})=>{const d=[i,t].filter(Boolean).length;return`calc(${e[n??"md"].iconSize} + ${d} * 1.25rem)`}};

	text-align: ${({textPosition:i})=>i??"left"};
	display: ${({display:i})=>i??"block"};

	&:focus {
		outline-color: ${({outlineColor:i,isError:t})=>t?"error":i??"black"};
		outline-width: ${({outlineWidth:i})=>i??"4px"};
		outline-style: solid;
		outline-color: ${({outlineColor:i,isError:t})=>t?"#FDA29B":i??"#84CAFF"};
		outline-offset: ${({borderWidth:i})=>i??"1px"};
	};

	&::placeholder {
		color: ${({placeholderColor:i,isDisabled:t})=>t?"gray":i??"gray"};
	}
`,l=r.div`
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	opacity: ${({isDisabled:i})=>{if(i)return .5}};
	width: ${({size:i})=>e[i??"md"].width};
	position: relative;
	border-radius: ${({size:i})=>e[i??"md"].borderRadius};
	margin: ${({margin:i})=>a(i)};
	border-style: ${({borderStyle:i})=>i??"solid"};
	border-width: ${({borderWidth:i})=>i??"1px"};
	border-color: ${({borderColor:i,isError:t,isDisabled:n})=>n?"gray":t?"#F044383D":i??"#2E90FA3D"};
`,x=r.img`
  -webkit-user-drag: none;
  pointer-events: none;
	box-sizing: border-box;
	width: ${({size:i})=>e[i??"md"].iconSize};
	height: ${({size:i})=>e[i??"md"].iconSize};
	position: absolute;
	left: 0.3rem;
	top: 50%;
	transform: translateY(-50%);
`,u=r.img`
  -webkit-user-drag: none;
  pointer-events: none;
	box-sizing: border-box;
	width: ${({size:i})=>e[i??"md"].iconSize};
	height: ${({size:i})=>e[i??"md"].iconSize};
	position: absolute;
	right: ${({size:i,lastIcon:t})=>{const n=t?1:0;return`calc(${e[i??"md"].iconSize} * ${n} + 1rem)`}};
	top: 50%;
	transform: translateY(-50%);`,m=r.img`
  -webkit-user-drag: none;
  pointer-events: none;
	box-sizing: border-box;
	width: ${({size:i})=>e[i??"md"].iconSize};
	height: ${({size:i})=>e[i??"md"].iconSize};
	position: absolute;
	right: 0.5rem;
	top: 50%;
	transform: translateY(-50%);
`,f=s.memo(function(t){return o.jsxs(l,{...t,children:[t.leftIcon&&o.jsx(x,{...t,src:t.leftIcon}),o.jsx(c,{disabled:t.isDisabled,...t}),t.rightIcon&&o.jsx(u,{...t,src:t.rightIcon}),t.lastIcon&&o.jsx(m,{...t,src:t.lastIcon})]})});export{f as I,p as a};
