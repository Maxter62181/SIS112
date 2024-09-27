class Entero: 
    
    def __init__(self, Numero):
        self.Num = Numero
        
    def setNum(self):
        input_value = input("ingrese un numero: ")
        self.Num = int(input_value)
    
    def getNum(self): 
        return self.Num
    
    def showNum(self): 
        print(self.getNum())
    
    def showResultado(self, respuesta):
        print(respuesta)
    
    def incrementarNum(self): 
        print(self.Num + 1)
    
    def DecrementarNum(self):
        print(self.Num - 1)
        
    
    def esParImpar(self): 
        return (self.Num % 2 == 0)
    
    
    def esNumeroPerfecto(self):
        suma = 0
        for i in range(1, self.Num):
            if self.Num % i == 0:
                suma += i
        return suma == self.Num
    
    def esNumeroPrimo(self):
        if self.Num < 2:
            return False
        for i in range(2, int(self.Num ** 0.5) + 1):
            if self.Num % i == 0:
                return False
        return True
    
    def fibonacci(self):
        a, b = 0, 1
        while a <= self.Num:
            if a == self.Num:
                return True
            a, b = b, a + b
        return False
    
    def Pillarfibonacci(self):
        serie = [0, 1]
        while len(serie) < self.Num:
            serie.append(serie[-1] + serie[-2])
        return serie[:self.Num]
    
    def esArmstrong(self):
        num_str = str(self.Num)
        num_digits = len(num_str)
        suma = sum(int(digit) ** num_digits for digit in num_str)
        return suma == self.Num
    
    def esPerfectoGeneralizado(self, k):
        suma = 0
        for i in range(1, self.Num):
            if self.Num % i == 0:
                suma += i ** k
        return suma == self.Num
    
    def calcularFilaPascal(self):
        fila = []
        for k in range(self.Num + 1):
            fila.append(self.factorial(self.Num) // (self.factorial(k) * self.factorial(self.Num - k)))
        return fila

    # Método auxiliar para calcular el factorial
    def factorial(self, n):
        if n == 0 or n == 1:
            return 1
        resultado = 1
        for i in range(2, n + 1):
            resultado *= i
        return resultado
    
    def cifrarCesar(self, desplazamiento):
        num_str = str(self.Num)  # Convertir el número a string
        resultado = ""

        for digito in num_str:
            nuevo_digito = (int(digito) + desplazamiento) % 10  # Desplazar dentro del rango 0-9
            resultado += str(nuevo_digito)

        return resultado
    
    def tienePrimoGemelo(self):
        if not self.esNumeroPrimo():
            return False

        def es_primo(n):
            if n < 2:
                return False
            for i in range(2, int(n ** 0.5) + 1):
                if n % i == 0:
                    return False
            return True

        return es_primo(self.Num - 2) or es_primo(self.Num + 2)

    def descomponerEnFactoresPrimos(self):
        n = self.Num
        factores = {}
        divisor = 2

        while n > 1:
            potencia = 0
            while n % divisor == 0:
                n //= divisor
                potencia += 1
            if potencia > 0:
                factores[divisor] = potencia
            divisor += 1

        return factores

    def calcularCatalan(self):
        def factorial(n):
            return 1 if n == 0 else n * factorial(n - 1)

        catalan = factorial(2 * self.Num) // (factorial(self.Num + 1) * factorial(self.Num))
        return catalan

    def esMersenne(self):
        import math
        log2p1 = math.log2(self.Num + 1)
        return log2p1.is_integer() and self.esNumeroPrimo(int(log2p1))
    
    def menu(self): 
        while True: 
            print("\nMenú:")
            print("1. Establecer un nuevo número")
            print("2. Mostrar el numero actual")
            print("3. Incrementar el numero")
            print("4. Decrementar el numero")
            print("5. Verificar si es par o impar")
            print("6. Verificar si es un número perfecto")
            print("7. Verificar si es un número primo")
            print("8. Buscar en la serie de Fibonacci")
            print("9. Generar la serie de Fibonacci")
            print("10. Verificar si es un número Armstrong")
            print("11. Verificar si es un número perfecto generalizado")
            print("12. Calcular la fila N del triángulo de Pascal")
            print("13. Cifrar el número usando el cifrado César")
            print("14. Verificar si tiene primo gemelo")
            print("15. Descomponer en factores primos")
            print("16. Calcular el número de Catalan")
            print("17. Verificar si es un número de Mersenne")
            print("18. Salir")
            
            opcion = input("Ingrese una opcion: ")
            
            if opcion == "1": 
                self.setNum()
            elif opcion == "2": 
                self.showNum()
            elif opcion == "3": 
                self.incrementarNum()
            elif opcion == "4": 
                self.DecrementarNum()
            elif opcion == "5":
                if self.esParImpar(): 
                    print("El numero es par")
                else:
                    print("El numero es impar")
            elif opcion == "6":
                if self.esNumeroPerfecto():
                    print("El número es perfecto")
                else:
                    print("El número no es perfecto")
            elif opcion == "7":
                if self.esNumeroPrimo():
                    print("El número es primo")
                else:
                    print("El número no es primo")
            elif opcion == "8":
                if self.fibonacci():
                    print(f"El número {self.Num} pertenece a la serie de Fibonacci.")
                else:
                    print(f"Error: El número {self.Num} no pertenece a la serie de Fibonacci.")
            elif opcion == "9":
                print("Serie de Fibonacci hasta", self.Num, "elementos:", self.Pillarfibonacci())
            elif opcion == "10":
                if self.esArmstrong():
                    print(f"El número {self.Num} es un número de Armstrong.")
                else:
                    print(f"El número {self.Num} no es un número de Armstrong.")
            elif opcion == "11":
                k = int(input("Ingrese el valor de k: "))
                if self.esPerfectoGeneralizado(k):
                    print(f"El número {self.Num} es un número perfecto generalizado con respecto a k={k}.")
                else:
                    print(f"El número {self.Num} no es un número perfecto generalizado con respecto a k={k}.")
            elif opcion == "12":
                fila_pascal = self.calcularFilaPascal()
                print(f"Fila {self.Num} del triángulo de Pascal: {fila_pascal}")
            elif opcion == "13":
                desplazamiento = int(input("Ingrese el valor del desplazamiento: "))
                resultado_cifrado = self.cifrarCesar(desplazamiento)
                print(f"Número cifrado con desplazamiento {desplazamiento}: {resultado_cifrado}") 
            elif opcion == "14":
                if self.tienePrimoGemelo():
                    print(f"El número {self.Num} tiene un primo gemelo.")
                else:
                    print(f"El número {self.Num} no tiene un primo gemelo.")
            elif opcion == "15":
                factores = self.descomponerEnFactoresPrimos()
                print(f"Descomposición en factores primos: {factores}")
            elif opcion == "16":
                catalan = self.calcularCatalan()
                print(f"El número de Catalan para {self.Num} es: {catalan}")
            elif opcion == "17":
                if self.esMersenne():
                    print(f"El número {self.Num} es un número de Mersenne.")
                else:
                    print(f"El número {self.Num} no es un número de Mersenne.")
            elif opcion == "18":
                print("¡Hasta luego!")
                break 
            else: 
                print("Opción inválida, intente nuevamente")  
            
#Crear un objeto de la clase entero

numero = Entero(10)

#Iniciar menu 

numero.menu()