$(document).ready(function(){
  var tarih = new Date();
  var aylar = ['OCK','SBT', 'MRT', 'NSN', 'MYS', 'HZR', 'TMZ', 'AĞS', 'EYL', 'EKM', 'KSM', 'ARLK']
  var city = 'Paris'
  $('.searched-city').keydown(function(e){
    if (e.key == 'Enter'){
      city = $(this).val();
      getWeatherData(city);
    }
  })

  function getWeatherData(cityname){
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&units=metric&lang=tr&appid=c6fbcef60aef10c84cef90ea86309961"
      $.get(url, function(data) {
        $('.city-name .name').text(data.name);
        $('.city-name .name-2').text(data.sys.country);
        $('.information-degree .number').text(parseInt(data.main.temp_min));
        $('.information-degree .status').text(data.weather[0].description);
        $('.history .history-number ').text(tarih.getDate());
        $('.history .month').text(aylar[tarih.getMonth()])
        $('.weather-icon').html('<img src="http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png">');
      }).fail(function(){
        alert('Bulunamadı')
      });
  }
})
