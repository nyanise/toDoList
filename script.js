$(document).ready(()=>{
    $(".input").on("keydown",(func)=>{
        if(func.which===13){
            let val=$('input').val();
            $('#ul').append(`<li class="li"><input type="checkbox" name="check1" > ${val} <i class="far fa-star i"></i></li>`);
            $('input').val("");

        }

    })

    $('i').on("click",()=>{
        $(this).css('background:goldenrod')
       
    })
})
