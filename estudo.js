//alert("")
//console.log("");
//document.write("");
       
        //var tabuada = 2;

        //function meChame(nome){
          //      document.write("<h1>Tabuada do " + tabuada + "</h1>");
           //     document.write(tabuada + " X 1 = " + (tabuada*1)+"<br>");
           //     document.write(tabuada + " X 2 = " + (tabuada*2)+"<br>");
           //     document.write(tabuada + " X 3 = " + (tabuada*3)+"<br>");
           //     document.write(tabuada + " X 4 = " + (tabuada*4)+"<br>");
           //     document.write(tabuada + " X 5 = " + (tabuada*5)+"<br>");
           //     document.write(tabuada + " X 6 = " + (tabuada*6)+"<br>");
           //     document.write(tabuada + " X 7 = " + (tabuada*7)+"<br>");
           //     document.write(tabuada + " X 8 = " + (tabuada*8)+"<br>");
           //     document.write(tabuada + " X 9 = " + (tabuada*9)+"<br>");
           //     document.write(tabuada + " X 10 = " + (tabuada*10)+"<br>"+"<br>");
           //     document.write("feita por " + nome);
           // }
            function escreva() {
                for(var i = 0; 1 < 20; i++){
                        document.write(tabuada + " x 10 = " + i + (tabuada*i) + "<br>")
                }
            } 
            function quadrado(){
                for(var i = 2; 1 < 21; i++){
                        document.write("O quadrado de " + i + " é " + (i*i)+"<br>")
                }
            }
            function moeda(atual){
                return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            }
            function total(){
                let valor = document.getElementById("val").value;
                let juros = document.getElementById("ju").value;
                let mes = document.getElementById("mes").value;
                if(!Number(valor)){
                        alert("O valor deve ser um número.");
                        document.getElementById("val").value = "";
                        document.getElementById("val").focus();

                        return
                } 
                if(!Number(juros)){
                        alert("O valor de juros deve ser um número.");
                        document.getElementById("ju").value = "";
                        document.getElementById("ju").focus();

                        return
                } 
                if(!Number(mes)){
                        alert("A quantidade de meses deve ser um número.");
                        document.getElementById("mes").value = "";
                        document.getElementById("mes").focus();

                        return
                } 
                let resultado = 0
                for(let i = 1; i <= mes; i++){
                        resultado = valor * (1+(juros/100));
                        valor = resultado;  
                }
                document.write("O Resultado é " + resultado);
        
                let resultado = 0
                for(let i = 1; i <= mes; i++){
                        resultado = valor * (1+(juros/100));
                        valor = resultado; 
                        document.write("Mês" + i + " valor: " + moeda(resultado) + "<br>"); 

                }
                document.write("O Resultado é " + moeda(resultado));
            }
       // function soma(){
       // let n1 = document.getElementById("n1").value;
       // let n2 = document.getElementById("n2").value;
       // let n3 = document.getElementById("n3").value;
       // let r = Number(n1) + Number(n2) + Number(n3);
       // document.getElementById("resultado").innerHTML = r;


       // }
       // function media(){
       //         let n1 = document.getElementById("n1").value;
       //         let n2 = document.getElementById("n2").value;
       //         let n3 = document.getElementById("n3").value;
       //         let r = (Number(n1) + Number(n2) + Number(n3)) / 3;
       //         document.getElementById("resultado").innerHTML = r;

       // }
       // function falta(){
       //         let n1 = document.getElementById("n1").value;
       //         let n2 = document.getElementById("n2").value;
       //         let n3 = document.getElementById("n3").value;
       //         let r = 180 - (Number(n1) + Number(n2) + Number(n3));
       //         document.getElementById("resultado").innerHTML = r;

       // }