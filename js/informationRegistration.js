function getVcode(me){
	var $this = $(me)
	$this .attr('disabled','disabled');
	$this .css('background','#ccc');
	var time = 60;
		$this.text('重新发送('+(time--)+')');

	var val =  setInterval(function(){
		$this.text('重新发送('+(time--)+')');
			if(time==0){
		$this .css('background','#0066ff');
		$this.text('获取验证码');

				clearInterval(val);
			}
	},1000)
}
