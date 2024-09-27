class ListaEnteros:
    def __init__(self):
        self.lista = []
        
    def agregar(self, valor):
        if isinstance(valor, (int, float)):  # Aceptar enteros y flotantes
            self.lista.append(valor)
        else:
            print("Solo se pueden agregar números reales.")
    
    def eliminar_por_indice(self):
        while True:
            indice = solicitar_numero("Introduce el índice del valor a eliminar: ")
            if 0 <= indice < len(self.lista):
                del self.lista[indice]
                print(f"Valor en el índice {indice} eliminado.")
                break
            else:
                print("Índice fuera de rango. Intenta de nuevo.")

    def mostrar_lista(self):
        if self.lista:
            print(f"Lista actual: {self.lista}")
        else:
            print("La lista está vacía.")
    
    def buscar_dato(self):
        while True:
            valor_buscado = solicitar_numero("Introduce el número que deseas buscar: ")
            if valor_buscado in self.lista:
                posicion = self.lista.index(valor_buscado)
                print(f"El valor {valor_buscado} fue encontrado en la posición {posicion}.")
                break
            else:
                print("Error: El valor no existe en la lista. Inténtalo de nuevo.")

# Función para solicitar un número entero o flotante positivo
def solicitar_numero(mensaje):
    while True:
        valor = input(mensaje)
        if valor.isdigit() and int(valor) >= 0:  # Verifica que sea un entero positivo
            return int(valor)
        try:
            num = float(valor)  # Intenta convertir a float
            if num >= 0:
                return num  # Devuelve el número si es positivo
        except ValueError:
            pass  # No es un número, se ignorará
        
        print("Por favor, introduce un número entero o decimal positivo válido.")

# Función para mostrar el menú y realizar acciones según la opción elegida
def menu():
    mi_lista = ListaEnteros()
    
    while True:
        print("\nMenú:")
        print("1. Agregar valor a la lista")
        print("2. Eliminar valor por índice")
        print("3. Mostrar lista")
        print("4. Buscar dato en la lista")
        print("5. Salir")
        
        opcion = input("Elige una opción: ")
        
        if opcion == '1':
            valor = solicitar_numero("Introduce un valor para agregar a la lista: ")
            mi_lista.agregar(valor)
            print(f"Valor {valor} agregado a la lista.")
        
        elif opcion == '2':
            if mi_lista.lista:
                mi_lista.mostrar_lista()
                mi_lista.eliminar_por_indice()
            else:
                print("La lista está vacía. No hay elementos para eliminar.")
        
        elif opcion == '3':
            mi_lista.mostrar_lista()
        
        elif opcion == '4':
            if mi_lista.lista:
                mi_lista.buscar_dato()
            else:
                print("La lista está vacía. No hay elementos para buscar.")
        
        elif opcion == '5':
            print("Saliendo del programa...")
            break
        
        else:
            print("Opción no válida, intenta de nuevo.")

# Ejecutar el menú
menu()
