
        $(document).ready(function(){
           
            $('.list').click(function(){
             value = $(this).attr('data-filter');


                if (value == 'recientes'){
                    
                    $('.itemBox').not('.'+value).hide('1000');
                    $('.itemBox').filter('.'+value).show('1000');  
                    $('#rec').addClass('active').siblings().removeClass('active');
                    
                    }else{
                        $('.itemBox').not('.'+value).hide('1000');
                        $('.itemBox').filter('.'+value).show('1000'); 
                        $('#rec').removeClass('active')
                    }
            })

            $('.button').click(function(){
                value = $(this).attr('data-filter');

                if (value == 'all'){
                    $('.itemBox').not('.'+value).hide('1000');
                    $('.itemBox').filter('.'+value).show('1000');  
                    
                    }else{
                        $('.itemBox').not('.'+value).hide('1000');
                        $('.itemBox').filter('.'+value).show('1000');
                            
                    }
                })

    
        $('.list').click(function(){
            $(this).siblings().removeClass('active');
            value = $(this).attr('data-filter');
            valor = value;

            if(valor == 'albañileria'){
                $('#alb').addClass('active').siblings().removeClass('active');
            }else if(valor == 'estructuras'){
                $('#est').addClass('active').siblings().removeClass('active');
            }else if(valor == 'gypsum'){
                $('#gyp').addClass('active').siblings().removeClass('active');
            }else if(valor == 'pintura'){
                $('#pin').addClass('active').siblings().removeClass('active');
            }else if(valor == 'pinturaDec'){
                $('#dec').addClass('active').siblings().removeClass('active');
            }else if(valor == 'recientes'){
                $('#rec').addClass('active').siblings().removeClass('active');
            }else{
                $('#todo').addClass('active').siblings().removeClass('active');

            }
            
        })

        $('.button').click(function(){
            value = $(this).attr('data-filter');
            valor = value;
            if(valor == 'albañileria'){
                $('#alb').addClass('active').siblings().removeClass('active');
            }else if(valor == 'estructuras'){
                $('#est').addClass('active').siblings().removeClass('active');
            }else if(valor == 'gypsum'){
                $('#gyp').addClass('active').siblings().removeClass('active');
            }else if(valor == 'pintura'){
                $('#pin').addClass('active').siblings().removeClass('active');
            }else if(valor == 'pinturaDec'){
                $('#dec').addClass('active').siblings().removeClass('active');
            }else if(valor == 'recientes'){
                $('#rec').addClass('active').siblings().removeClass('active');
            }else{
                $('#todo').addClass('active').siblings().removeClass('active');

            }
            
            
        })
    })