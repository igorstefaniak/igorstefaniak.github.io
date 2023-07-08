window.addEventListener('offline', (e) => {
    $('#networkstatus').removeClass('_vanish');
    $('#networkstatus').text("🔴 Rozłączono z internetem");
    setTimeout(() => {
        $('#networkstatus').addClass('_vanish');
      }, 5000)
});

window.addEventListener('online', (e) => {
    $('#networkstatus').removeClass('_vanish');
    $('#networkstatus').text("🟢 Połączenie przywrócone");
    setTimeout(() => {
        $('#networkstatus').addClass('_vanish');
      }, 5000)
});