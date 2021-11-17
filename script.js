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

$("[name=name]").blur(function () {
  var name = $("[name=name]");
  if (name.val() == "") {
    name.addClass("is-invalid");
  } else {
    name.removeClass("is-invalid");
  }
});

$("[name=email]").blur(function () {
  var email = $("[name=email]");
  if (email.val() == "") {
    email.addClass("is-invalid");
  } else {
    email.removeClass("is-invalid");
  }
});

$("[name=tel]").blur(function () {
  var tel = $("[name=tel]");
  if (tel.val() == "") {
    tel.addClass("is-invalid");
  } else {
    tel.removeClass("is-invalid");
  }
});

$("[name=message]").blur(function () {
  var message = $("[name=message]");
  if (message.val() == "") {
    message.addClass("is-invalid");
  } else {
    message.removeClass("is-invalid");
  }
});

$(".form-contato").submit(function () {
  var name = $("[name=name]");
  var email = $("[name=email]");
  var tel = $("[name=tel]");
  var message = $("[name=message]");

  var error = $(".error");
  var field = $(".field-error");

  error.addClass("d-none");
  $(".is-invalid").removeClass("is-invalid");

  //VALIDATION NAME
  if (name.val() == "") {
    swal("Ops...", 'Deve preencha o campo "Nome" antes de enviar.', "warning");
    $(".swal-button").click(function () {
      name.focus();
    });
    name.addClass("is-invalid");
    return false;
  }

  //VALIDATION EMAIL
  if (email.val() == "") {
    swal(
      "Ops...",
      'Deve preencha o campo "E-mail" antes de enviar.',
      "warning"
    );
    $(".swal-button").click(function () {
      email.focus();
    });
    email.addClass("is-invalid");
    return false;
  }

  //VALIDATION TEL
  if (tel.val() == "") {
    swal(
      "Ops...",
      'Deve preencha o campo "Telefone" antes de enviar.',
      "warning"
    );
    $(".swal-button").click(function () {
      tel.focus();
    });
    tel.addClass("is-invalid");
    return false;
  }

  //VALIDATION MESSAGE
  if (message.val() == "") {
    swal(
      "Ops...",
      'Deve preencha o campo "Mensagem" antes de enviar.',
      "warning"
    );
    $(".swal-button").click(function () {
      message.focus();
    });
    message.addClass("is-invalid");
    return false;
  }

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      swal("Show!", "Solicitação de contato enviado com sucesso!", "success");
      name.val() = "";
      email.val() = "";
      tel.val() = "";
      message.val() = "";
    }
  };

  let url = "/contact.php";
  xhttp.open("POST", url, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(
    "name=" +
      name.val() +
      "&email=" +
      email.val() +
      "&tel=" +
      tel.val() +
      "&message=" +
      message.val()
  );

  swal(
    "Vixi!",
    "Tivemos um problema em processar sua solicitação de contato, estamos trabalhando para resolver isso o quanto antes!",
    "error"
  );

  return false;
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
