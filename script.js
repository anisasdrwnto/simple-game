   $(document).ready(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > $('#page-kedua').offset().top) {
                    $('#btnScrollUp').fadeIn();
                } else {
                    $('#btnScrollUp').fadeOut();
                }
            });

            // Ketika tombol "Get Started" diklik
            $("#btnGetStarted").click(function () {
                // Gulir ke bagian berikutnya
                $("#page-kedua").get(0).scrollIntoView({
                    behavior: 'smooth' // Gulir secara halus
                });
            });

            // Ketika tombol "Scroll Up" di klik
            $("#btnScrollUp").click(function () {
                // Gulir kembali ke bagian awal
                $("html, body").animate({
                    scrollTop: 0 // Gulir ke posisi awal halaman
                }, "smooth");
            });

            $("#btnResult").click(function () {
                var angka1 = parseInt($('#inputke-1').val());
                var angka2 = parseInt($('#inputke-2').val());

                if (!isNaN(angka1) && !isNaN(angka2)) {
                    var hasil = angka1 + angka2;
                    $('#teksHasil').html("<p>Hasil pertambahan : " + hasil + "</p>");
                } else {
                    $('#teksHasil').html("<p id='errorText'> Silahkan input ulang kedua angka dengan benar!" + "</p>");
                }
            });

            $('#btnClear').click(function () {
                $('#inputke-1').val("");
                $('#inputke-2').val("");

                $('#teksHasil').html("");
            });
        });