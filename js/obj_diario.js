/*
0 - sangue/secreção (cor) -     #AD2831 / #800E13 / #38040E
1 - foco            (cor) -     #54478C / #8477BB / #B5AED6
2 - irritação       (cor) -     #2C699A / #408BC9 / #80B2DB
3 - extroversao     (cor) -     #048BA8 / #06B4DB / #38D6FA
4 - amorosidade     (cor) -     #0DB39E / #10D1B7 / #2DF0D6
5 - auto estima     (cor) -     #16DB93 / #33EBA7 / #6AF0BF

6 - energia sexual  (ícone) -   #B9E769 
7 - cólica          (ícone) -   #EFEA5A / #F4F190 / #F8F5B5
8 - tédio           (ícone) -   #F1C453 / #F5B87A / #F8CCA0

paleta de cores: https://coolors.co/54478c-2c699a-048ba8-0db39e-16db93-83e377-b9e769-efea5a-f1c453-f29e4c
tons de vermelho pra categoria sangue: https://coolors.co/250902-38040e-640d14-800e13-ad2831

*/
const COLORS={
  0: ['#AD2831', '#640D14', '#250902'],
  1: ['#84EBE9', '#52E3E1', '#1A9E9C'],
  2: ['#D0F292', '#A0E426', '#58800F'],
  3: ['#FEF79A', '#FDF148', '#CABD02'],
  4: ['#FFC247', '#FFAB00', '#B87A00'],
  5: ['#F77976', '#F4413E', '#F21B18'],
  6: ['#F47CC2', '#F050AE', '#D01180'],
  7: ['#E5ADFF', '#D883FF', '#9900E0'],
  8: ['#9336FD', '#7202F2', '#5602B6'],
}

class Diario{
    constructor(id, data, respostas){
      this.id = id;
      this.data = data;
      this.respostas = respostas;
      this.perguntas = [
        'Sangue / Secreção',
        'Foco',
        'Irritação',
        'Extroversão',
        'Amorosidade',
        'Autoestima',
        'Líbido',
        'Disposição',
        'Criatividade'
      ];
      this.cores = COLORS;
      this.icones = {
        0:'<i class="lni lni-close"></i>',
        1:'<i class="lni lni-close"></i>',
        2:'<i class="lni lni-close"></i>'
      };
    }
    get_color(index){
        if(index < Object.size(this.cores)){
            var resp = this.respostas[index];
            if(resp == 0){
                return '#ded';
            }else{
                resp -= 1;
                return this.cores[index][resp];
            }
        }else{
            return '#ded';
        }
    }
    get_date_color(){
      var today = new Date();
      return (today.getDate() == parseInt(this.data))?'black':'white';
    }
    get_date_chart(){
      var day = this.data.getDate();
      var month = this.data.getMonth();
      day = (day>9)?day:'0'+day;
      month = (month>9)?month:'0'+month;
      return day+'/'+month;
    }
    get_formated_resposta(index){
      var perg = this.perguntas[index];
      var resp = this.respostas[index];
      switch(resp){
        case 0:
            return perg + ' - [Nenhum]';
        case 1:
            return perg + ' - [Baixo]';
        case 2:
            return perg + ' - [Médio]';
        default:
            return 'Sem respostas';
      }
    }
}