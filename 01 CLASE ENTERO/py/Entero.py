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
            print("10. Salir")
            
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
                print("¡Hasta luego!")
                break 
            else: 
                print("Opción inválida, intente nuevamente") 
            
#Crear un objeto de la clase entero

numero = Entero(10)

#Iniciar menu 

numero.menu()