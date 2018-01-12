$(function() {
  var c = 0;
  var ruby = 0;
  var php = 0;
  var java = 0;
  var css = 0;

  $("#calf").change(function(event) {
    var calf = $("input:radio[name=calf]:checked").val();
    event.preventDefault();
    $("#calfDiv").fadeOut(900, "swing", "complete");
    $("#jarDiv").delay(910).fadeIn(900, "swing");
    console.log(calf);

    if (calf = "a") {
      c += .5, ruby += 1.0, php += 0.0, java += .75, css += .25;
    } else if (calf = "b") {
      c += 1, ruby += 0, php += 1, java += .5, css += .5;
    } else if (calf = "c") {
      c += 0, ruby += 1, php += .5, java += .25, css += 1;
    }
    console.log(c, ruby, php, java, css);

  });

  $("#jar").change(function(event) {
    var jar = $("input:radio[name=jar]:checked").val();
    event.preventDefault();
    $("#jarDiv").fadeOut(900, "swing", "complete");
    $("#waspDiv").delay(910).fadeIn(900, "swing");
    console.log(jar);

    if (jar = "a") {
      c += .5, ruby += 1.0, php += 0.0, java += .75, css += .25;
    } else if (jar = "b") {
      c += 1, ruby += 0, php += 1, java += .5, css += .5;
    } else if (jar = "c") {
      c += 0, ruby += 1, php += .5, java += .25, css += 1;
    }
    console.log(c, ruby, php, java, css);
  });

  $("#wasp").change(function(event) {
    var wasp = $("input:radio[name=wasp]:checked").val();
    event.preventDefault();
    $("#waspDiv").fadeOut(900, "swing", "complete");
    $("#dogDiv").delay(910).fadeIn(900, "swing");
    console.log(wasp);

    if (wasp = "a") {
      c += .5, ruby += 1.0, php += 0.0, java += .75, css += .25;
    } else if (wasp = "b") {
      c += 1, ruby += 0, php += 1, java += .5, css += .5;
    } else if (wasp = "c") {
      c += 0, ruby += 1, php += .5, java += .25, css += 1;
    }
    console.log(c, ruby, php, java, css);
  });

  $("#dog").change(function(event) {
    var dog = $("input:radio[name=dog]:checked").val();
    event.preventDefault();
    $("#dogDiv").fadeOut(900, "swing", "complete");
    $("#tortDiv").delay(910).fadeIn(900, "swing");
    console.log(dog);

    if (dog = "a") {
      c += .5, ruby += 1.0, php += 0.0, java += .75, css += .25;
    } else if (dog = "b") {
      c += 1, ruby += 0, php += 1, java += .5, css += .5;
    } else if (dog = "c") {
      c += 0, ruby += 1, php += .5, java += .25, css += 1;
    }
    console.log(c, ruby, php, java, css);
  });

  $("#tortoise").change(function(event) {
    var tort = $("input:radio[name=tortoise]:checked").val();
    event.preventDefault();
    $("#tortDiv").fadeOut(900, "swing", "complete");
    $("#resultDiv").delay(910).fadeIn(900, "swing");
    console.log(tort);

    if (tort = "a") {
      c += .5, ruby += 1.0, php += 0.0, java += .75, css += .25;
    } else if (tort = "b") {
      c += 1, ruby += 0, php += 1, java += .5, css += .5;
    } else if (tort = "c") {
      c += 0, ruby += 1, php += .5, java += .25, css += 1;
    }
    console.log(c, ruby, php, java, css);
  });


});
