alert("Oi, eu sou um alerta")
        console.log("https://www.youtube.com/watch?v=N9777WExvCc");
        document.write("Aula de Pens. Comp.");
       
        var tabuada = 2;

        function meChame(nome){
                document.write("<h1>Tabuada do " + tabuada + "</h1>");
                document.write(tabuada + " X 1 = " + (tabuada*1)+"<br>");
                document.write(tabuada + " X 2 = " + (tabuada*2)+"<br>");
                document.write(tabuada + " X 3 = " + (tabuada*3)+"<br>");
                document.write(tabuada + " X 4 = " + (tabuada*4)+"<br>");
                document.write(tabuada + " X 5 = " + (tabuada*5)+"<br>");
                document.write(tabuada + " X 6 = " + (tabuada*6)+"<br>");
                document.write(tabuada + " X 7 = " + (tabuada*7)+"<br>");
                document.write(tabuada + " X 8 = " + (tabuada*8)+"<br>");
                document.write(tabuada + " X 9 = " + (tabuada*9)+"<br>");
                document.write(tabuada + " X 10 = " + (tabuada*10)+"<br>"+"<br>");
                document.write("feita por " + nome);
            }
            function escreva() {
                for(var i = 0; 1 < 20; i++){
                        document.write(tabuada + " x 10 = " + i + (tabuada*i) + "<br>")
                }
            } 
            function quadrado(){
                for(var i = 2; 1 < 21; i++){
                        document.write("O quadrado de " + i + " é " + (i*i)+"<br>")
            }
            function total(){
                let valor = document.getElementById("val").value;
                let juros = document.getElementById("ju").value;
                let mes = document.getElementById("mes").value;
                let resultado = 0
                for(let i = 1; i <= mes; i++){
                        resultado += valor * (1+(juros/100));    
                }
                let resultado = valor * (1+(juros/100));
                document.write("O Resultado é" + resultado);
            }