$.ajax({
    url: '/kertakayu/js/project.json',
    type: 'GET',
    success: function(response) {
        console.log(response);
        var a;
        var location = '/kertakayu/gallery.html';

        for (a = 0; a < response.length; a++) {
            $(".project").append(`
            <div class="col-md-4 col-6">
                <div class="card_">
                    <div class="card__circle">
                        <div class="image image-data" data-toggle="modal" data-target="#logo" data-help="${response[a].id - 1}">
                            <img src="${response[a].img}" alt="${response[a].title}" title="${response[a].title}" loading="lazy">
                            <div class="font-std">${response[a].title}</div>
                        </div>
                    </div>
                    
                </div>
            </div>
            `)

            $("#logo .modal-body").html("")
            $(".image-data[data-target='#logo']").on('click', function() {
                var data = $(this).attr("data-help");

                $("#logo .modal-content").html(`
                    <div class="modal-body">
                        <h3 class="title-purple font-medium text-center">${response[data].title}</h3>
                        <div class="image"><img src="${response[data].img}" alt="${response[data].title}" title="${response[data].title}" loading="lazy"></div>
                        <p class="mt-2 font-std">${response[data].desc}</p>
                        <button type="button" class="btn btn-light float-right" data-dismiss="modal">Close</button>
                    </div>
                `);



            })
        }
    }
})

$(".hamburger").click(() => {
    $(".menu-menu").slideToggle()
        // alert(1)
})
