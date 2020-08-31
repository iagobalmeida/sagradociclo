function draw_chart_humor(modelo, obj_diarios){
    var ctx = document.getElementById('chart_humor').getContext('2d');
    var data_placeholder = new Array(30).fill(1);
    var datasets = [];
    for(var i =0; i < modelo.perguntas.length; i++){
        datasets.unshift({
            data: data_placeholder,
            backgroundColor: obj_diarios.map(function(d){return d.get_color(i)}),
            borderColor: obj_diarios.map(function(d){return d.get_date_color()} ),
            borderWidth: 1,
            datalabels: {display: false}
        });
    }
    //data
    datasets.unshift({
        data: data_placeholder,
        borderColor: obj_diarios.map(function(d){return d.get_date_color()}),
        borderWidth: 1,
        datalabels: {formatter: function(v, c){ return obj_diarios[c.dataIndex].get_date_chart()}}
    });
    var chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: datasets,
        },
        options: {
            cutoutPercentage: ($(window).height() <= 700)?25:10,
            maintainAspectRatio: false,
            rotation: ($(window).height() <= 700)?(3/2 * Math.PI):0,
            circumference: ($(window).height() <= 700)?(1 * Math.PI):(2 * Math.PI),
            tooltips:{
                callbacks:{
                    label: function(tooltipItem){
                        var index = tooltipItem.index;
                        var d_index = tooltipItem.datasetIndex;
                        var diario = obj_diarios[index];
                        return diario.get_formated_resposta(diario.perguntas.length-d_index);
                    }
                }
            }
        }
    });
}