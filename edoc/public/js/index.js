var socket = io.connect('http://localhost:8080', {
    'forceNew': true
});
var working = false;
$('.login').on('submit', function(e) {
    e.preventDefault();
    if (working) return;
    working = true;
    var $this = $(this),
        $state = $this.find('button > .state');
    $this.addClass('loading');
    $state.html('Autentificando');
    var user=document.getElementById('user').value;
    var password=document.getElementById('password').value;
    console.log(user,password);
    var usuario = {
    user: document.getElementById('user').value,
    password: document.getElementById('password').value
  };
    socket.emit('usuario', usuario);
    setTimeout(function() {
        $this.addClass('ok');
        $state.html('Welcome back!');
        setTimeout(function() {
            $state.html('Log in');
            $this.removeClass('ok loading');
            working = false;
        }, 4000);
    }, 3000);
});
