
// Importação 
// Track : Olhando se a variavel mudou ( bindar )
import { LightningElement, track } from "lwc";

// Exporto 
// App      > Nome do nosso LWC ( Classe que controla o LWC )
// Extends  > Extendo as funcionalidades com coisas do Lightning Element
export default class App extends LightningElement {
  
  // Qualquer alteração que rolar no num1, num2 eu to de olho.
  @track num1;
  @track num2;
  resultado;

  // Evento ele pega todas as informações sobre quem disparou ele
  mudouN1(event){
    this.num1 = Number(event.target.value);
  }

  mudouN2(event){
    this.num2 = Number(event.target.value);
  }

  // this ( proximas )
  soma(){
    this.resultado = this.num1 + this.num2;
  }

  sub(){
    this.resultado = this.num1 - this.num2;
  }

  div(){
    this.resultado = this.num1 / this.num2;
  }

  mult(){
    this.resultado = this.num1 * this.num2;
  }
}
