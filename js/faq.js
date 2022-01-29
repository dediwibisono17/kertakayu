var action = 'click';

$(document).on(action, 'li.question', function() {
    $(this).next().slideToggle(200)
        .siblings("li.answer").slideUp();

    var img = $(this).children('i');

    $('i').not(img).removeClass('rotate').css("transition", "all .2s ease")
    img.toggleClass('rotate')
})

$.ajax({
    url: '/digitalmint/js/faq.json',
    type: 'GET',
    success: function(response) {
        console.log(response);
        var a;
        for (a = 0; a < response.length; a++) {
            var faq = response[a].title;
            var answer = response[a].answer;
            $(".faq").append(`
            <li class="question">
                <i class="fa fa-angle-down" style="transition: all 0.2s ease 0s;"></i>
                <span>${faq}</span>
            </li>
            <li class="answer" style="display: none;">
                ${answer}
            </li>
            `)


        }
    }
})

$(".hamburger").click(() => {
    $(".menu-menu").slideToggle()
})