var url = 'https://restcountries.eu/rest/v1/name/'
var countriesList = $('#countries')

$('#search').click(searchCountries)

function searchCountries () {
 	var countryName = $('#country-name').val()
    var countryCapital = $('#country-capital').val()

    if (!countryName.length) countryName = 'Poland'
    $.ajax({
    url: url + countryName,
    method: 'GET',
    success: showCountriesList
  })
    } // searchCountries() finished here

function showCountriesList (resp) {
  countriesList.empty()
  
    resp.forEach(function (item) {
    var ulCountry = $('#countries')
        var smallApha2code = item.alpha2Code.toLowerCase()
        var img_url = '<img src="http://flags.fmcdn.net/data/flags/w580/' + smallApha2code + '.png" alt="Flag: ' + item.name + '">'

        $('<li class="country">').appendTo(countriesList)
      .append($('<ul>')
        .append($('<li>').text('Country / Kraj : ' + item.name))
        .append($('<li>').text('Capital / Stolica : ' + item.capital))
        .append($('<li>').text('Aplha 2 Code / Kod Kraju 2zn : ' + item.alpha2Code))
        .append($('<li>' + img_url))
      )
    $('</li>').appendTo(countriesList)
  })  // forEach finished here

}
