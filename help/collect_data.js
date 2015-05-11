var out = [];

$('.info-box').each(function(i, el){
    var el = $(el);
    var p = el.find('p');
    var title = el.find('h2').html();
    var legend = p.html();
    legend = legend.replace('Lugar:', '');
    legend = legend.trim();
    var number = NaN;
    if(legend.indexOf(',')){
        number = legend.split(',')[1];
        number = parseInt(number.replace(/\./, '').replace(/\?/, ''));
        legend = legend.split(',')[0];
    }

    out.push({
        title: title,
        place: legend,
        number : number
    });
})
JSON.stringify(out, null, 4);