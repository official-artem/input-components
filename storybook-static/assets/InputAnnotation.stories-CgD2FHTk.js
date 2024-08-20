import{d as h,j as i}from"./styled-components.browser.esm-BmQQ1SYj.js";import{r as T}from"./index-DJO9vBfz.js";const s={sm:{fontSize:"10px",padding:"4px 0"},md:{fontSize:"12px",padding:"6px 0"},lg:{fontSize:"14px",padding:"8px 0"},xl:{fontSize:"16px",padding:"10px 0"}},D=h.div`
	margin: 0;
	padding: 0;
`,A=h.p`
margin: 0;
padding: ${({size:t})=>s[t??"md"].padding};
font-size: ${({size:t})=>s[t??"md"].fontSize};
	color: ${({color:t,isError:o,isDisabled:E})=>E?"gray":o?"#D92D20":t??"black"};
	opacity: ${({isDisabled:t})=>{if(t)return .7}};
`,j=T.memo(function(o){return i.jsx(D,{...o,children:i.jsx(A,{...o,children:o.text})})}),C={component:j,title:"InputAnnotation",argTypes:{size:{control:"select",options:Object.keys(s)},isError:{control:"boolean"},isDisabled:{control:"boolean"},color:{control:"color"}}},r={args:{text:"This is a default annotation",size:"md"}},n={args:{text:"This is an error annotation",isError:!0,size:"md"}},e={args:{text:"This annotation is disabled",isDisabled:!0,size:"md"}},a={args:{text:"This is a custom colored annotation",color:"#1A73E8",size:"md"}};var d,c,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    text: 'This is a default annotation',
    size: 'md'
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,l,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: 'This is an error annotation',
    isError: true,
    size: 'md'
  }
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var x,g,f;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    text: 'This annotation is disabled',
    isDisabled: true,
    size: 'md'
  }
}`,...(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var z,S,b;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    text: 'This is a custom colored annotation',
    color: '#1A73E8',
    size: 'md'
  }
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const $=["Default","ErrorState","DisabledState","CustomColor"];export{a as CustomColor,r as Default,e as DisabledState,n as ErrorState,$ as __namedExportsOrder,C as default};
