document.getElementById('proxyForm').addEventListener('submit', function(event) {
	event.preventDefault();

	var url = document.getElementById('url').value;
	window.location.href = '/proxy?url=' + encodeURIComponent(url);
});
