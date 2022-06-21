function animate(obj, target, callback) {
		clearInterval(obj.timer);
		obj.timer = setInterval(function() {
			//计算步长  算法：(目标值 — 现在位置) / 10 作为每次移动的步长
			var step = (target - obj.offsetLeft) / 10;
			step = step > 0 ? Math.ceil(step) : Math.floor(step);
			if (obj.offsetLeft == target) {
				clearInterval(obj.timer);			
				callback && callback();
			}
			// 每次加1
			obj.style.left = obj.offsetLeft + step + 'px';			
		}, 15);
	}