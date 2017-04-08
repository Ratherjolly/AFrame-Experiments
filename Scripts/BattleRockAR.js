AFRAME.registerComponent('click-listener', {
		  init: function () {
			  
		var el = this.el;
	    	const mdl = document.querySelector('#ModelId');
		const txt = document.querySelector('#ModelTxt');
                const sTxt = document.querySelector('#StartTxt');
		const _mdlCnt = 3;
			  
		window.addEventListener('click', function () {
			var MI = document.getElementById('ModelIndex');
                    	sTxt.setAttribute('text-geometry', 'value: TAP!');
			
			    var i = 0;
			    i += parseFloat(MI.innerHTML);
				i += 1;
			    if (i > _mdlCnt)
				i = 1;
			    MI.innerHTML = i;
			    if (i==1) {
				mdl.setAttribute('obj-model', 'obj: #bear-obj;');//'obj:Objects/LancerBear.obj');
				mdl.setAttribute('scale', '0.01 0.01 0.01');
				mdl.setAttribute('position', '0 0 0');
				txt.setAttribute('text-geometry', 'value: Bear Lancer');
				txt.setAttribute('position', '-1.5 0 1.5');
			    	mdl.innerHTML = "<a-entity position='0 0 0' particle-system='preset: rain; color: #EF0000,#44CC00'></a-entity>";
			    }
			    else if (i==2) {
				mdl.setAttribute('obj-model', 'obj: #brawler-obj;');
				mdl.setAttribute('scale', '0.25 0.25 0.25');
				mdl.setAttribute('position', '0 0 0');
				txt.setAttribute('text-geometry', 'value: The Brawler');
				txt.setAttribute('position', '-1.8 0 1.5');
			    	mdl.innerHTML = "<a-entity position='0 0 0' particle-system='preset: rain; color: #EF0000,#44CC00'></a-entity>";
			    }
			    else if (i==3) {
				mdl.setAttribute('obj-model', 'obj: #cube-obj; mtl: #cube-mtl;');
				mdl.setAttribute('scale', '0.05 0.05 0.05');
				//mdl.setAttribute('position', '0 0 -2.5');
				txt.setAttribute('text-geometry', 'value: BATTLEROCK STUDIOS');
				txt.setAttribute('position', '-2.0 0 1.5');
			    	mdl.innerHTML = "<a-entity position='0 0 0' particle-system='preset: rain; color: #EF0000,#44CC00'></a-entity><a-entity position='0 0 0' particle-system='color: #EF0000,#44CC00'></a-entity>";
			    }
		    });
		  }
		});
