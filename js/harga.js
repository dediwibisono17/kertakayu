$.ajax({
    url: '/digitalmint/js/harga.json',
    type: 'GET',
    success: function(response) {
        console.log(response);
        var a;
        for (a = 0; a < response.length; a++) {
            var benefit = response[a].list;
            var h = ""
            benefit.map((x, i) => { h += `<li class="font-std">${x}</li>` });
            $(".harga_list").append(`
            <div class="col-md-4">
                    <div class="harga_list--name">
                        <h2 class="font-medium text-center">${response[a].title}</h2>
                        <div class="font-large text-center">${response[a].harga}</div>
                        <ul>
                            ${h}
                        </ul>
                    </div>
                </div>
            `)


        }
    }
})

$(".hamburger").click(() => {
    $(".menu-menu").slideToggle()
})