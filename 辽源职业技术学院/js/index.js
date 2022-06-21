window.addEventListener('load', function() {
	// 获取盒子以及左右按钮 及其盒子宽度
	var box = document.querySelector('.box');
	var zuo = box.querySelector('.zuo');
	var you = box.querySelector('.you');
	var boxWidth = box.offsetWidth;
	// 开始时清除动画
	clearInterval(timer);
	// 绑定事件鼠标经过显示按钮离开关闭
	box.addEventListener('mousemove', function() {
		zuo.style.display = 'block';
		you.style.display = 'block';
		// 经过暂停动画
		clearInterval(timer);
	})
	box.addEventListener('mouseout', function() {
		zuo.style.display = 'none';
		you.style.display = 'none';
		// 离开执行动画
		setInterval(function() {
			// 时间到了点击右按钮
			you.click();
		}, 2000);
	});
	// 获取ul ol
	var ul = box.querySelector('ul');
	var ol = box.querySelector('ol');
	// 循环创建小li添加索引号放到ol里面
	for (var i = 0 ; i < ul.children.length; i++) {
		var li = document.createElement('li');
		// li.setAttribute('index', i);
		ol.appendChild(li);
		// 给ol里面的小li添加点击事件
		li.addEventListener('click', function() {
			// 循环小ol里面的li
			for (var i = 0; i < ol.children.length; i++) {
				// 清除ol里面所有li的样式
				ol.children[i].className = '';
			}
			// 当前点击的li添加current属性
			this.className = 'current';
			// 获取当前点击小Li的索引号
			var index = this.getAttribute('index');
			// 防止三者不协调
			index = num = cirle;
			// 调用动画
			animate(ul, -index * boxWidth);
		})
	};
	// 让ol第一个li默认带有current属性
	ol.children[0].className = 'current';	
	// 克隆第一张图片放到ul最后面实现无缝轮播
	var first = ul.children[0].cloneNode(true);
	ul.appendChild(first);
	// 控制左右点击按钮
	var num = 0;
	// 控制小圆圈点击
	var cirle = 0;
	// 绑定左右点击事件
	you.addEventListener('click', function() {
		// 判断如果如果到了最后一张回到第一张
		if (num == ul.children.length - 1) {
			num = 0;
			ul.style.left = 0;
		}
		// num自增
		num++;
		// 调用动画
		animate(ul, -num * boxWidth);
		// scrle自增
		cirle++;
		// 小圆圈跟着左右按钮的点击二变化
		// 判断如果到了最后一个小圆圈回到第一个
		if (cirle == ol.children.length) {
			cirle = 0;
		}
		change();
	})
	// 左点击事件
	zuo.addEventListener('click', function() {
		// 判断如果如果到了最后一张回到第一张
		if (num == 0) {
			num = ul.children.length - 1;
			ul.style.left = -num * boxWidth + 'px';
		}
		// num自增
		num--;
		// 调用动画
		animate(ul, -num * boxWidth);
		// scrle自增
		cirle--;
		// 小圆圈跟着左右按钮的点击二变化
		// 判断如果到了最后一个小圆圈回到第一个
		if (cirle < 0) {
			cirle = ol.children.length - 1;
		}
		change();
	})
	// 重复过多封装函数
	function change() {
		for (var i = 0; i < ol.children.length; i++) {
			ol.children[i].className = '';
		}
		ol.children[cirle].className = 'current';
	}
	
	// 自动播放
	var timer = setInterval(function() {
		// 时间到了点击右按钮
		you.click();
	}, 2000);
})