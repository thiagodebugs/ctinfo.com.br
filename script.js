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

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      $("#response").removeClass("d-none");
    }
  };

  let url = "/contact.php";
  xhttp.open("POST", url, true);
  xhttp.send;

  return true;
});

var SPMaskBehavior = function (val) {
    return val.replace(/\D/g, "").length === 11
      ? "(00) 00000-0000"
      : "(00) 0000-00009";
  },
  spOptions = {
    onKeyPress: function (val, e, field, options) {
      field.mask(SPMaskBehavior.apply({}, arguments), options);
    },
  };

$("[name=tel]").mask(SPMaskBehavior, spOptions);
