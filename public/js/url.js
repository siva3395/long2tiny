$(document).ready(function() {
  $("#long_url_form").submit(function() {
    var input = $("#long_url_input").val()
    if(input == "" || input == undefined) {
      $("#no_input_error").text("Please provide long url")
      $("#no_input_error").show();
      $('#tiny_url_container').text('');
      return false;
    }
    $.ajax({
      url: '/api/urls?url=' + input,
      method: 'GET',
      dataType: 'json',
      beforeSend: function() {
        $("#no_input_error").hide();
        $("#loading_spinner").show();
        $('#tiny_url_container').text('');
      },
      success: function(data) {
        var tiny_url_text = "<h3>Tiny Url: <span style=color:red;>" + data['tiny_url'] + "</span></h3>";
        $('#tiny_url_container').html(tiny_url_text);
        $("#loading_spinner").hide();
      },
      complete: function(data) {
        $("#loading_spinner").hide();
      }
    });
    return false;
  });
});