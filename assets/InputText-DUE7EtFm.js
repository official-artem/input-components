import{l as s,j as n,d as r}from"./styled-components.browser.esm-DZC3XYdC.js";import{r as c}from"./index-DJO9vBfz.js";const i={sm:{fontSize:"12px",padding:"8px 12px",borderRadius:"4px",iconSize:"12px",width:"100px"},md:{fontSize:"14px",padding:"10px 14px",borderRadius:"6px",iconSize:"16px",width:"150px"},lg:{fontSize:"16px",padding:"12px 16px",borderRadius:"8px",iconSize:"20px",width:"200px"},xl:{fontSize:"18px",padding:"14px 18px",borderRadius:"10px",iconSize:"24px",width:"250px"}},f={sm:"small",md:"medium",lg:"large",xl:"extra-large"},a=s`
	outline-color: #FDA29B;
	border-color: #F04438;
`,x=s`
	border-color: gray;
	color: gray;
	opacity: 0.5;
`,e="lg",p=r.input`
	box-sizing: border-box;
	border: none;
	width: 100%;
	font-family: ${({fontFamily:o})=>o};
	font-size: ${({size:o})=>i[o??"md"].fontSize};
	background-color: ${({backgroundColor:o})=>o??"white"};
	border-radius: ${({size:o})=>i[o??"md"].borderRadius};
	padding: ${({size:o})=>i[o??"md"].padding};
	${({disabled:o})=>o&&"cursor: not-allowed;"}
	padding-left: ${({leftIcon:o,size:t})=>{if(o)return`calc(${i[t??"md"].iconSize} + .75rem)`}};

	padding-right: ${({rightIcon:o,lastIcon:t,size:d})=>{const l=[o,t].filter(Boolean).length;return`calc(${i[d??e].iconSize} + ${l} * 1.25rem)`}};

	text-align: ${({textPosition:o})=>o??"left"};
	display: ${({display:o})=>o??"block"};

	&:focus {
		outline-color: ${({outlineColor:o})=>o??"black"};
		outline-width: ${({outlineWidth:o})=>o??"4px"};
		outline-style: solid;
		outline-color: ${({outlineColor:o})=>o??"#84CAFF"};
		outline-offset: ${({borderWidth:o})=>o??"1px"};
		${({isError:o})=>o&&a}
	};

	&::placeholder {
		color: ${({placeholderColor:o})=>o??"gray"};
	}
`,u=r.div`
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	width: ${({size:o})=>i[o??e].width};
	position: relative;
	border-radius: ${({size:o})=>i[o??e].borderRadius};
	border-style: ${({borderStyle:o})=>o??"solid"};
	border-width: ${({borderWidth:o})=>o??"1px"};
	border-color: ${({borderColor:o})=>o??"#2E90FA3D"};

	${({isError:o})=>o&&a}
	${({disabled:o})=>o&&x}
`,b=r.img`
  -webkit-user-drag: none;
  pointer-events: none;
	box-sizing: border-box;
	width: ${({size:o})=>i[o??e].iconSize};
	height: ${({size:o})=>i[o??e].iconSize};
	position: absolute;
	left: 0.3rem;
	top: 50%;
	transform: translateY(-50%);
`,g=r.img`
  -webkit-user-drag: none;
  pointer-events: none;
	box-sizing: border-box;
	width: ${({size:o})=>i[o??e].iconSize};
	height: ${({size:o})=>i[o??e].iconSize};
	position: absolute;
	right: ${({size:o,lastIcon:t})=>{const d=t?1:0;return`calc(${i[o??e].iconSize} * ${d} + 1rem)`}};
	top: 50%;
	transform: translateY(-50%);`,$=r.img`
  -webkit-user-drag: none;
  pointer-events: none;
	box-sizing: border-box;
	width: ${({size:o})=>i[o??e].iconSize};
	height: ${({size:o})=>i[o??e].iconSize};
	position: absolute;
	right: 0.5rem;
	top: 50%;
	transform: translateY(-50%);
`,z=c.memo(function(t){return n.jsxs(u,{...t,children:[t.leftIcon&&n.jsx(b,{...t,src:t.leftIcon}),n.jsx(p,{disabled:t.disabled,...t}),t.rightIcon&&n.jsx(g,{...t,src:t.rightIcon}),t.lastIcon&&n.jsx($,{...t,src:t.lastIcon})]})});export{z as I,f as a};
