document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('agenda');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',

      //cambiamos idioma al calendario
      locale:"es",

      //diferentes vistas
      headerToolbar:{
          left: 'prev,next,today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,listWeek'
      },
    });
    calendar.render();
  });