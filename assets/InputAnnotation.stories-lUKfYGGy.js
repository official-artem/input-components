import{l as b,j as i,d as A}from"./styled-components.browser.esm-DZC3XYdC.js";import{r as h}from"./index-DJO9vBfz.js";const a={sm:{fontSize:"12px",padding:"2px 0"},md:{fontSize:"14px",padding:"4px 0"},lg:{fontSize:"16px",padding:"6px 0"},xl:{fontSize:"18px",padding:"8px 0"}},y=b`
	color: #D92D20;
`,I=b`
	color: gray;
	opacity: 0.7;
`,c="lg",$=A.div`
	margin: 0;
	padding: 0;
`,j=A.p`
	margin: 0;
	font-family: ${({fontFamily:t})=>t??"sans-serif"};
	padding: ${({size:t})=>a[t??c].padding};
	font-size: ${({size:t})=>a[t??c].fontSize};
		color: ${({color:t,isError:o,isDisabled:T})=>T?"gray":o?"#D92D20":t??"black"};
	${({isError:t})=>t&&y}
	${({isDisabled:t})=>t&&I}
`,C=h.memo(function(o){return i.jsx($,{...o,children:i.jsx(j,{...o,children:o.text})})}),O={component:C,title:"Components/InputAnnotation",argTypes:{size:{control:"select",options:Object.keys(a)},isError:{control:"boolean"},isDisabled:{control:"boolean"},color:{control:"color"}}},n={args:{text:"This is a default annotation",size:"md"}},r={args:{text:"This is an error annotation",isError:!0,size:"md"}},s={args:{text:"This annotation is disabled",isDisabled:!0,size:"md"}},e={args:{text:"This is a custom colored annotation",color:"#1A73E8",size:"md"}};var d,p,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    text: 'This is a default annotation',
    size: 'md'
  }
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,u,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: 'This is an error annotation',
    isError: true,
    size: 'md'
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,f,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    text: 'This annotation is disabled',
    isDisabled: true,
    size: 'md'
  }
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var z,D,E;e.parameters={...e.parameters,docs:{...(z=e.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    text: 'This is a custom colored annotation',
    color: '#1A73E8',
    size: 'md'
  }
}`,...(E=(D=e.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const v=["Default","ErrorState","DisabledState","CustomColor"];export{e as CustomColor,n as Default,s as DisabledState,r as ErrorState,v as __namedExportsOrder,O as default};
