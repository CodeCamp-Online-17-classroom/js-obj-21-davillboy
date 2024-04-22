// write code here
<script>
        function Calculator() {
            this.read = function() {
              this.a = +prompt('Enter the first number:', 0);
              this.b = +prompt('Enter the second number:', 0);
            };
            
            this.sum = function() {
              return this.a + this.b;
            };
            
            this.mul = function() {
              return this.a * this.b;
            };
          }
          
          let calculator = new Calculator();
          calculator.read();
          alert(calculator.sum());
          alert(calculator.mul());
    </script>
