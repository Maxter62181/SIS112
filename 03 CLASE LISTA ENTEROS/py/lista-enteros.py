class ListaEnteros:
    def __init__(self):
        self.lista = []
        
    def agregar(self, valor):
        self.lista.append(valor)
    
    def eliminar_por_indice(self, indice):
        if 0 <= indice < len(self.lista):
            del self.lista[indice]
        else:
            print("Índice fuera de rango.")
    
    def mostrar_lista(self):
        print(f"Lista actual: {self.lista}")

# Función para mostrar el menú y realizar acciones según la opción elegida
def menu():
    mi_lista = ListaEnteros()
    
    while True:
        print("\nMenú:")
        print("1. Agregar valor a la lista")
        print("2. Eliminar valor por índice")
        print("3. Mostrar lista")
        print("4. Salir")
        
        opcion = input("Elige una opción: ")
        
        if opcion == '1':
            valor = input("Introduce un valor para agregar a la lista: ")
            if valor.isdigit():
                mi_lista.agregar(int(valor))
                print(f"Valor {valor} agregado a la lista.")
            else:
                print("Por favor, introduce un número entero válido.")
        
        elif opcion == '2':
            mi_lista.mostrar_lista()
            indice = input("Introduce el índice del valor a eliminar: ")
            if indice.isdigit():
                mi_lista.eliminar_por_indice(int(indice))
            else:
                print("Por favor, introduce un índice válido.")
        
        elif opcion == '3':
            mi_lista.mostrar_lista()
        
        elif opcion == '4':
            print("Saliendo del programa...")
            break
        
        else:
            print("Opción no válida, intenta de nuevo.")

# Ejecutar el menú
menu()
