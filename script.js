$(".slick-list").slick({
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1200,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".form-contato").submit(function () {
  var name = $("[name=name]");
  var email = $("[name=email]");
  var tel = $("[name=tel]");
  var message = $("[name=message]");

  var error = $(".alert");
  var field = $(".field-error");

  error.addClass("d-none");
  $(".is-invalid").removeClass("is-invalid");

  //VALIDATION NAME
  if (name.val() == "") {
    error.removeClass("d-none");
    field.html("Nome");
    name.focus();
    name.addClass("is-invalid");
    return false;
  }

  //VALIDATION EMAIL
  if (email.val() == "") {
    error.removeClass("d-none");
    field.html("E-mail");
    email.focus();
    email.addClass("is-invalid");
    return false;
  }

  //VALIDATION TEL
  if (tel.val() == "") {
    error.removeClass("d-none");
    field.html("Telefone");
    tel.focus();
    tel.addClass("is-invalid");
    return false;
  }

  //VALIDATION MESSAGE
  if (message.val() == "") {
    error.removeClass("d-none");
    field.html("Mensagem");
    message.focus();
    message.addClass("is-invalid");
    return false;
  }

  return true;
});
