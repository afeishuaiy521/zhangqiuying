   $(function(){
        var $tooltips = $('.js_tooltips');

        $('#showTooltips').on('click', function(){
            if ($tooltips.css('display') != 'none') return;
            var familyName = $('#familyName').val();
            var relation = $('#relation').val();
            var familySex = $('#familySex').val();
         
            if (familyName=='') {
                $tooltips.text('请输入家人姓名')
                // toptips的fixed, 如果有`animation`, `position: fixed`不生效
            $('.page.cell').removeClass('slideIn');

            $tooltips.css('display', 'block');
            setTimeout(function () {
                $tooltips.css('display', 'none');
            }, 2000);

            return;
            }

             if (relation=='') {
                $tooltips.text('请选择家人关系')
                // toptips的fixed, 如果有`animation`, `position: fixed`不生效
            $('.page.cell').removeClass('slideIn');

            $tooltips.css('display', 'block');
            setTimeout(function () {
                $tooltips.css('display', 'none');
            }, 2000);
            return;

            }
            if (familySex=='') {
                $tooltips.text('请选择家人性别')
              
                // toptips的fixed, 如果有`animation`, `position: fixed`不生效
            $('.page.cell').removeClass('slideIn');

            $tooltips.css('display', 'block');
            setTimeout(function () {
                $tooltips.css('display', 'none');
            }, 2000);
            return;

            }
           

            
            


        });
    });