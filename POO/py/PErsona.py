class Persona: 
    #Method --> Constructor 
    def __init__(self, nombre, edad, carrera):
        self.nombre = nombre 
        self.edad = edad
        self.carrera = carrera 
        
    #Method --> Saludar 
    def saludar(self): 
        print(f"Hola, mi nombre es {self.nombre} y tengo {self.edad} años.")
    
    def cumpleaños(self):
        self.edad += 1
        print(f"Feliz cumpleaños!!! ahora tengo {self.edad} AÑOS.")
        
    def estudiar(self):
        print(f"Estoy estudiando {self.carrera}")
        
#crear una instancia de la clase persona 

persona1 = Persona("Juan", 20, "Medicina")
persona2 = Persona("Max", 22000, "Fisica Nuclear")

#llamar a los metodos

persona1.saludar()
persona1.estudiar()
persona2.saludar()
persona2.estudiar()
persona2.cumpleaños()
        
    