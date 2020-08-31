function form_pergunta_change(sel){
  var id = 'color_label_'+sel.id;
  console.log(id);
  console.log(sel.selectedIndex);
  $('#'+id).css('background-color',$(sel.options[sel.selectedIndex]).attr('data-color'));
}

//VUE App
var app = new Vue({
    el: '#app',
    data:{
        obj_diarios: [],
        modelo: new Diario(),
        view_show_chart: true,
        view_show_table: true,
    },
    methods:{
        //Desenha o chart de humor
        draw_chart(){
            draw_chart_humor(this.modelo, this.obj_diarios);
        },
        //Adiciona um diario
        add_diario(random = false){
          var id = this.obj_diarios.length;
          var data = new Date(+(new Date()) - Math.floor(Math.random()*365));
          if(random){
            var respostas = [
              Math.floor(Math.random() * 3),
              Math.floor(Math.random() * 3),
              Math.floor(Math.random() * 3),
              Math.floor(Math.random() * 3),
              Math.floor(Math.random() * 3),
              Math.floor(Math.random() * 3),
              Math.floor(Math.random() * 3),
              Math.floor(Math.random() * 3),
              Math.floor(Math.random() * 3),
            ];
          }else{
            var respostas = [];
            $("[id^='form_pergunta_']").each(function(){
              respostas.push(this.selectedIndex);
              this.selectedIndex = 0;
              $(this).change();
            });
            data = $("#form_fixed_pergunta_data").val();
          };
          var temp = new Diario(id, data, respostas);
          this.obj_diarios.push(temp);
          this.obj_diarios.sort(function(a, b){
            return (a.data < b.data)?1:((b.data < a.data)?-1:0);
          });
        },
        //Verifica a quanto tempo está preenchendo
        get_tempo_usando(){
          var primeiro = this.obj_diarios[this.obj_diarios.length - 1];
          var ultimo = this.obj_diarios[0];
          return Math.ceil(Math.abs(ultimo.data - primeiro.data));
        }
    },
    watch:{

    },
    mounted:function(){
      $(function () {
        $("[data-toggle='tooltip']").tooltip();
      });
    },
});

for(var i = 0;i < 30; i++){
    app.add_diario(true);
}

app.draw_chart();