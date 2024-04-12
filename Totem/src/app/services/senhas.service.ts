import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {

  constructor() { }
  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;

somaGeral() { this.senhasGeral++; this.senhasTotal++; };
somaPrior() { this.senhasPrior++; this.senhasTotal++; };
somaExame() { this.senhasExame++; this.senhasTotal++; };


  VetorAlunos =[
    {
      'avatar': 'name=circle-sharp',
      'senha': '',
      
    }
    /*
    {
      'nome': 'O rei da cacimbinha',
      'nota': 10
    },
    {
      'nome': 'vitor',
      'nota': 5
    },
    {
      'nome': 'corimba',
      'nota': 19
    }
*/
  ];

  adicionarAluno(){
    if{

      this.somaGeral(); // Generate a new password
      this.VetorAlunos.push({
        'avatar': 'name=circle-sharp',
        'senha': "Senha Geral "+ this.senhasGeral.toString(),
        
        
      });
      
    }
  }


};


