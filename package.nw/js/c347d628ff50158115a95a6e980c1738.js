'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('react'),b=require('./d8460cd7eec9b5ac3077a1c3fc6a50d2.js'),c=require('./6893c66b236a52295ea5c35a8052630d.js'),d=require('./48ed383395967d737f11ebc42820b913.js'),e=require('./41c99b908d0cb118c2a6fcf3c306663c.js'),f=require('./3708d3f281e2f2a71c7feda26168f3dc.js'),g=require('./aa1f2a2e68329a3bbaa996a52b5ea65b.js'),h=require('./ff946754202ecf377034d29daac7c8d9.js'),i=require('./ca9102c5efe003cb9f99bcd8df78f429.js'),j=require('./c754d906e04f71224e14d49a89769678.js'),k=require('./8e89d5836133cac25c6aa23d785c63d9.js'),l=require('./e12e47cfa49959a6d49ea1936dc19380.js'),m=require('./10279410b7cf7ea9409d42a7eb37225c.js'),n=require('./b6dd6ba0b853899c69527eaf93a58f7b.js'),o=require('./413e1df0d2a135fa20cefc4c23f8e8e1.js'),p=require('./d03a90fbd796428c64e8c47eef5f4e71.js'),q=require('./8e7fed729e9f11f30d63365586719bf0.js'),r=require('./504ae46dc4a72502ee836b22913fbe81.js'),s=require('./9a1630c7db7597f338c9319bfc8571c5.js'),t=require('./a1b9e6fb17fda6e4b961ef97ab1371f8.js'),u=require('./6fc2d18cec70b19ca4d1e2defbdf43cd.js'),v=require('./72653d4b93cdd7443296229431a7aa9a.js'),w=require('./3bfffbe88b3d923921f851c0697974fe.js'),x=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),y=require('./1ca0b7713664710bff99ca9c6d29c43c.js'),z=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),A=require('./84eac15ddafa077aa832c98b6c2290bd.js'),B=require('./f094f1d16fffcac4d74949e4fc6b09ac.js'),C=require('./ea653f45dc25181ca4f1b108175009b7.js'),D=require('./dc4889188702c881b1432b490a2a4850.js'),E=require('./03f56b6c971ec6f7813234d685a2fa8c.js'),F=require('classnames'),G=require('./d3fc1d4b6cfd440a6300e62456252a06.js'),H=require('./137588fc97010af6b33c2be1d533447b.js'),I=require('./b6a2a0af8ea41ee5132948d45a0a6677.js'),J=require('./a03c8e76d4fe0178cd6a28a2fbc16ddd.js'),K=require('./195285e5284f78e12cb71042e95b9566.js'),L=require('./245e991bfa34036d0454bd1d61b4a3b2.js'),M=require('./b86cb96a5caed2b5ae72ef2e6a5d13ef.js'),N=require('./0cecfd7c413f06c788a4d6b7972cdf96.js'),O=require('./e452f0d072800b8203d233682d37d71a.js');class P extends a.Component{constructor(a){super(a),this.onResizeStop=(a,b)=>{this.props.windowActions.setSimulator({width:b})},this.state={simulatorStyle:{}}}componentDidMount(){chrome.fontSettings.setMinimumFontSize({pixelSize:1})}componentWillUnmount(){}componentWillReceiveProps(a){a.vibrate!=this.props.vibrate&&('short'==a.vibrate?this.vibrateAnimation(1):'long'==a.vibrate&&this.vibrateAnimation(3))}async vibrateAnimation(a){if(0>=a)return void this.props.simulatorActions.setVibrate('none');var b=[`translate(1%,5px) scale(${this.props.deviceScale})`,`translate(-1%,5px) scale(${this.props.deviceScale})`];const c=async(a)=>{return 0>=a.length?void this.setState({simulatorStyle:{}}):(this.setState({simulatorStyle:{transition:'all linear 0.05s',transform:a[0]}}),a.splice(0,1),new Promise((b,d)=>{setTimeout(()=>{c(a).then(()=>{b()}).catch((a)=>{d(a)})},50)}))};await c(b),await this.vibrateAnimation(--a)}reLaunch(){}getOptionsComponents(){let b=this.props,c=[];return b.switch.selectorPickerShow&&c.push(a.createElement(p,{key:'selectorpicker'})),b.switch.datePickerShow&&c.push(a.createElement(m,{key:'datepicker'})),b.switch.timePickerShow&&c.push(a.createElement(n,{key:'timepicker'})),b.switch.multiPickerShow&&c.push(a.createElement(o,{key:'multipicker'})),b.switch.paymentShow&&c.push(a.createElement(g,{key:'payment'})),b.switch.confirmShow&&c.push(a.createElement(t,{key:'confirm'})),b.switch.authorizeShow&&c.push(a.createElement(A,{key:'authorize'})),c}getWindowComponents(){let b=this.props,c=[];return b.window.groupShow&&c.push(a.createElement(r,{key:'grouplist'})),b.window.settingShow&&c.push(a.createElement(s,{key:'setting'})),b.window.addCardShow&&c.push(a.createElement(D,{key:'addcard'})),b.window.viewCardShow&&c.push(a.createElement(E,{key:'viewcard'})),b.window.h5AddCardShow&&c.push(a.createElement(M,{key:'h5addcard'})),b.window.h5ViewCardShow&&c.push(a.createElement(N,{key:'h5viewcard'})),b.window.h5ChooseCardShow&&c.push(a.createElement(O,{key:'h5choosecard'})),b.window.locationShow&&c.push(a.createElement(B,{key:'location'})),b.window.addPhoneContactShow&&c.push(a.createElement(I,{key:'addPhoneContact'})),b.window.chooseAddressShow&&c.push(a.createElement(J,{key:'chooseAddress'})),b.window.chooseInvoiceTitleShow&&c.push(a.createElement(K,{key:'chooseInvoiceTitle'})),c}render(){let g,h,m=this.props,n={width:m.width},o=F('simulator-container',{"ui-invisible":!m.show}),p=[];const r=this.props.enableFullScreen||this.props.libVersion&&170<=parseInt(this.props.libVersion.replace(/\./g,''))&&'custom'===this.props.navigationStyle;for(let b in r?(g=m.screenHeight,h=0):(g=m.screenHeight-m.navigationbarHeight-m.statusbarHeight,h=m.navigationbarHeight+m.statusbarHeight),m.webviewInfos){let c=m.webviewInfos[b],e=g,f=h;m.tabbarShow&&-1!=c.tabbarIndex&&('top'==m.tabbarPosition?(e-=m.tabbarHeight,f+=m.tabbarHeight):e-=m.tabbarHeight),p.push(a.createElement(d,{key:b,show:m.currentWebviewID==b,info:c,top:f,height:e}))}let s=a.createElement(b,null);if(m.anyHtmlWebviewInfo){const c=m.anyHtmlWebviewInfo;p.push(a.createElement(e,{webviewID:c.webviewID,nosupport:!0,url:c.url||'',cangoback:!0,width:m.screenWidth,height:g,left:0,top:h})),s=a.createElement(b,{showLeftBtn:!0,onLeftBtnClick:()=>{m.simulatorActions.setAnyHtmlWebview()}})}m.standbyWebview&&p.push(a.createElement(d,{key:m.standbyWebview.id,show:!1,info:m.standbyWebview,top:h,height:g,type:'standby'})),0>=p.length&&p.push(a.createElement(d,{key:-1,show:!0,info:{},top:h,height:g,type:'tip'}));let t=_extends({width:m.screenWidth,height:m.screenHeight,transform:`scale(${m.deviceScale})`,transformOrigin:'50% 0',marginLeft:-m.screenWidth/2},this.state.simulatorStyle);return a.createElement(C,{width:m.width,height:'100%',className:o,style:{minWidth:m.shellMinWidth},leftResizable:m.workbenchShow&&'right'===m.position,rightResizable:m.workbenchShow&&'left'===m.position,onResizeStop:this.onResizeStop},a.createElement(y,null),a.createElement('div',{className:'simulator-shell'},a.createElement('div',{className:'simulator',style:t},a.createElement(G,null),a.createElement(L,null),s,p,a.createElement(c,null),a.createElement(f,null),a.createElement(i,null),a.createElement(j,null),a.createElement(k,null),a.createElement(l,null),this.getOptionsComponents(),a.createElement(q,null)),this.getWindowComponents()),a.createElement(u,null),a.createElement(H,null),a.createElement('div',{className:'ui-divider-vertical',style:{pointerEvents:'none'}}))}}module.exports=P}(require('lazyload'),require);