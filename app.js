<!DOCTYPE html>
<html>
<head>
  <title>Web Proxy</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>

<body>

<form id="proxyForm">
  <label for="url">URL:</label><br>
  <input type="text" id="url" name="url"><br>
  <input type="submit" value ="Go">
</form>

<div id="content"></div>

<script>
$(document).ready(function() {
  $('#proxyForm').on('submit', function(e) {
    e.preventDefault();

    var url = $('#url').val();

     $.ajax({
       url: 'http://localhost:3000/proxy',
       method: 'POST',
       data: JSON.stringify({ url: url }),
       contentType: 'application/json',
       success: function(response) {
         $('#content').html(response);
       },
       error: function(error) {
         console.error(error);
         alert('An error occurred.');
       }
     });
   });
});
</script>

</body></html>
