class LightSwitch extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({mode: 'open'});

		const bulb=document.createElement('div');
		bulb.setAttribute('class','light-bulb');
		shadow.appendChild(bulb);

		const button=document.createElement('button');
		button.setAttribute('class','switch');
		button.innerText='Turn on/off';
		shadow.appendChild(button);

		this.isActive=false;

		button.addEventListener('click',()=>{
			this.isActive=!this.isActive;
			this.setAttribute('style','background-color: '+(this.isActive?'yellow':'grey')+';');
		})
	}
}

customElements.define('light-switch', LightSwitch);