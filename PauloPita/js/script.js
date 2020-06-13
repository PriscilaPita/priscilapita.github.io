
    // Get the current year for the copyright
    $('#year').text(new Date().getFullYear());

    //init scrollspy
    $('body').scrollspy({target: '#main-nav'});

    //smoth scrolling
    $("#main-nav a").on('click', function (event) {
      if (this.hash !== ""){
        event.preventDefault();

        const hash = this.hash;
      
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {
          window.location.hash = hash;
        });
      }
    });