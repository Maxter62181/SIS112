class Materia{
        constructor(nombreMateria, sigla, docente, horarios, aula, prerequisito, carrera, universidad, cantidadinscritos, modalidad, calificacionMinimaAprobacion, temas, ubicacionLatitudLongitud){
         this.nombreMateria = nombreMateria
         this.sigla = sigla
         this.docente = docente
         this.horarios = horarios
         this.aula = aula 
         this.prerequisito = prerequisito
         this.carrera = carrera
         this.universidad = universidad
         this.cantidadinscritos = cantidadinscritos 
         this.modalidad = modalidad
         this.calificacionMinimaAprobacion = calificacionMinimaAprobacion
         this.temas = temas
         this.ubicacionLatitudLongitud = ubicacionLatitudLongitud
        }
    //crearemos las funciones para las variables. 
          Nmateria(){
              return "Bienvenido a la materia de " + this.nombreMateria + ".";
         }

         Abreviatura(){
             return "La abreviatura para identificar la materia es: " + this.sigla + "." ;
         }

          DocenteAsignado(){
              return "El/la docente asignado para la materia es el/la " + this.docente + ".";
         }

         HorariosDeClase(){
             return "Los horarios asigandos para esta materia son: " + this.horarios ;
         }
  
         AulaAsignada(){
             return "El aula asiganda para la materia es el aula: " + this.aula ;
         }

          RequisiquitosPrevios(){
              return "los requisitos previos para cursar la materia son el haber cursado la materia de: " + this.prerequisito ;
         }

         Pertenece(){
              return "La materia de " + this.nombreMateria + " pertenece a la carrera de " + this.carrera + ".";
         }

         UniversidadDeOrigen(){
             return "La materia de " + this.nombreMateria + " de la carrera de " + this.carrera + " pertenece a la " + this.universidad + ".";
         }

         Inscritos(){
             return "La cantidad de inscritos en la materia de " + this.nombreMateria + " es de aproximadamente " + this.cantidadinscritos + " alumnos.";
         }

         Modalidad(){
            return "La modalidad de estudio de esta materia es: " + this.modalidad ;
         }

         CalificacionMinima(){
            return "La calificacion minima para aprobar la materia de " + this.nombreMateria + " es de mayor o igual a " + this.calificacionMinimaAprobacion ; 
         }

         TemasDeAvance(){
            return "los temas a avanzar dentro de la materia son: " + this.temas ;
          }
          Ubicacion(){
            return "La materia se imparte en la siguiente ubicación : " + this.ubicacionLatitudLongitud ; 
          }

         // Métodos de modificación
         modificarNombreMateria(){
            let nuevamateria;
            let MateriaValida = false; 
      
            while (!MateriaValida){
              nuevamateria = prompt("Ingrese el nombre de su materia porfavor.");
              if (!parseInt(nuevamateria) && nuevamateria.trim() !== "" && !/[^a-zA-Z0-9\s]/.test(nuevamateria)){
                MateriaValida = true; 
              }else{
                alert("Porfavor ingrese una materia valida.")
              }
            }
              this.nombreMateria = String(nuevamateria)
              return "Ahora la materia se llama: " + this.nombreMateria; 
          }
    
        modificarSigla() {
            let nuevasigla;
            let SiglaValida = false; 
      
            while (!SiglaValida){
              nuevasigla = prompt("Ingrese la nueva abreviatura para la materia con el siguiente formato: '[Abreviatura-numeracion]'");
              if (!parseInt(nuevasigla) && nuevasigla.trim() !== "" && !/[^a-zA-Z0-9\s\-\[\]]/.test(nuevasigla)){
                SiglaValida = true; 
              }else{
                alert("Porfavor ingrese una abreviatura aceptable.")
              }
            }
              this.sigla = String(nuevasigla)
              return "Ahora la nueva abreviatura de " + this.nombreMateria + " es: " + this.sigla; 
          }
    
        modificarDocente() {
            let nuevodocente;
            let DocenteValido = false; 
      
            while (!DocenteValido){
                nuevodocente = prompt("Ingrese el nuevo docente de la materia porfavor.");
              if (!parseInt(nuevodocente) && nuevodocente.trim() !== "" && !/[^a-zA-Z0-9\s]/.test(nuevodocente)){
                DocenteValido = true; 
              }else{
                alert("Porfavor ingrese un docente valido.")
              }
            }
              this.docente = String(nuevodocente)
              return "Ahora el nuevo docente de " + this.nombreMateria + " es: " + this.docente; 
          }
    
        modificarHorarios() {
            let nuevohorario;
            let HorarioValido = false; 
      
            while (!HorarioValido){
                nuevohorario = prompt("Ingrese sus nuevos horarios porfavor para " + this.nombreMateria + " Con el formato 'Dia(inicio - fin)'");
              if (!parseInt(nuevohorario) && nuevohorario.trim() !== "" && !/[^a-zA-Z0-9\s\-\(\)]/.test(nuevohorario)){
                HorarioValido = true; 
              }else{
                alert("Porfavor ingrese un horario valido.")
              }
            }
              this.horarios = String(nuevohorario)
              return "El nuevo horario para la materia de " + this.nombreMateria + " es: " + this.horarios; 
          }
    
        modificarAula() {
            let nuevaaula;
            let AulaValida = false; 
      
            while (!AulaValida){
                nuevaaula = prompt("Ingrese La nueva aula para la materia porfavor.");
              if (!parseInt(nuevaaula) && nuevaaula.trim() !== "" && !/[^a-zA-Z0-9\s\-]/.test(nuevaaula)){
                AulaValida = true; 
              }else{
                alert("Porfavor ingrese un aula Valida.")
              }
            }
              this.aula = String(nuevaaula)
              return "EL nuevo aula para cursar " + this.nombreMateria + " es: " + this.aula; 
          }
    
        modificarRequisito() {
            let nuevorequisito;
            let RequisitoValido = false; 
      
            while (!RequisitoValido){
                nuevorequisito = prompt("Ingrese el requisito para la materia porfavor.");
              if (!parseInt(nuevorequisito) && nuevorequisito.trim() !== "" && !/[^a-zA-Z0-9\s]/.test(nuevorequisito)){
                RequisitoValido = true; 
              }else{
                alert("Porfavor ingrese un requisito valido.")
              }
            }
              this.requisito = String(nuevorequisito)
              return "EXELENTE!!!, ahora la materia de " + this.nombreMateria + " tiene por requisito la materia de: " + this.requisito; 
          }
    
        modificarCarrera() {
            let nuevacarrera;
            let CarreraValida = false; 
      
            while (!CarreraValida){
                nuevacarrera = prompt("Ingrese la carrera a la que pertenezca la materia.");
              if (!parseInt(nuevacarrera) && nuevacarrera.trim() !== "" && !/[^a-zA-Z0-9\s]/.test(nuevacarrera)){
                CarreraValida = true; 
              }else{
                alert("Porfavor ingrese una carrera valida.")
              }
            }
              this.carrera = String(nuevacarrera)
              return "Ahora la materia de " + this.nombreMateria + " pertenece a la carrera de " + this.carrera; 
          }
    
        modificarUniversidad() {
            let nuevauniversidad;
            let UniversidadValida = false; 
      
            while (!UniversidadValida){
                nuevauniversidad = prompt("Ingrese la carrera a la que pertenezca la materia.");
              if (!parseInt(nuevauniversidad) && nuevauniversidad.trim() !== "" && !/[^a-zA-Z0-9\s]/.test(nuevauniversidad)){
                UniversidadValida = true; 
              }else{
                alert("Porfavor ingrese una carrera valida.")
              }
            }
              this.universidad = String(nuevauniversidad)
              return "Ahora la materia de " + this.nombreMateria + " pertenece a la carrera de " + this.carrera + " en la " + this.universidad; 
          }
    
        modificarCantidadInscritos(){
            let nuevacantidad;
            let esNumeroValido = false;
  
            while (!esNumeroValido) {
                nuevacantidad = prompt("Por favor, ingrese su nueva edad");
             if (!isNaN(nuevacantidad) && nuevacantidad.trim() !== "" && Number(nuevacantidad) > 0 && Number(nuevacantidad) <= 65 ) {
              esNumeroValido = true;
             } else {
              alert("Por favor, ingrese un número válido mayor que 0 y menor a 65 alumnos.");
             }
            }
           this.inscritos = Number(nuevacantidad);
           return "ahora la materia de " + this.nombreMateria + " tiene un total de " + this.inscritos + " estudiantes.";
  }
        modificarModalidad(){
            let nuevamodalidad; 
            let ModalidadValida = false ; 

            while(!ModalidadValida) { 
                nuevamodalidad = prompt("Porfavor ingrese la nueva modalidad de avance entre: 'online', 'presencial' e 'híbrida'.");
                if (nuevamodalidad === "online" || nuevamodalidad === "presencial" || nuevamodalidad === "híbrida" ){
                    ModalidadValida = true;
                }else{
                    alert("Porfavor ingrese una modalidad de estudio valida.");
                }

            }
            this.modalidad = String(nuevamodalidad);
            return "Ahora la nueva modalidad de avance para la materia de " + this.nombreMateria + " es " + this.modalidad 
        }

        modificarCalificacionMinima(){
            let nuevacalificacion;
            let esCalificacionValida = false;
  
            while (!esCalificacionValida) {
                nuevacalificacion = prompt("Por favor, ingrese su nueva nota minima de calificacion.");
             if (!isNaN(nuevacalificacion) && nuevacalificacion.trim() !== "" && Number(nuevacalificacion) > 0 && Number(nuevacalificacion) <= 100 ) {
                esCalificacionValida = true;
             } else {
              alert("Por favor, ingrese un valor de calificacion valido menor o igual a 100.");
             }
            }
           this.calificacionMinimaAprobacion = Number(nuevacalificacion);
           return "ahora la calificaci de aprobacion minima en la materia de " + this.nombreMateria + " es de: " + this.calificacionMinimaAprobacion + " puntos.";

        }

        modificartemas(){
            let nuevotema;
            let TemasValidos = false; 
      
            while (!TemasValidos){
                nuevotema = prompt("Porfavor ingrese la nueva rubrica detemas bajo el siguiente formato: ['tema1','tema2', temaN']");
              if (!parseInt(nuevotema) && nuevotema.trim() !== "" && !/^[a-zA-Z\[\]\-,.]+$/.test(nuevotema)){
                TemasValidos = true; 
              }else{
                alert("Porfavor ingrese temas validos para la materia.");
              }
            }
              this.temas = String(nuevotema);
              return "Los nuevos temas a avanzar dentro de la materia de " + this.nombreMateria + " son: " + this.temas; 
        }

        modificarUbicacion(){
            let nuevaubicacion;
            let UbicacionValida = false; 
      
            while (!UbicacionValida){
                nuevaubicacion = prompt("Porfavor ingrese la ubicacion para cursar la materia.");
              if (!parseInt(nuevaubicacion) && nuevaubicacion.trim() !== "" && !/^[a-zA-Z\[\]\-,.]+$/.test(nuevaubicacion)){
                UbicacionValida = true; 
              }else{
                alert("Porfavor ingrese una ubicacion valida");
              }
            }
              this.ubicacionLatitudLongitud = String(nuevaubicacion);
              return "La nueva ubicacion para cursar la materia de " + this.nombreMateria + " es en: " + this.ubicacionLatitudLongitud; 
        }
     
}

const Calculo1 = new Materia("Calculo I", "[MAT-132]", "Ing.M.Sc.ALEMÁN RAMIREZ TOMAS WILSON", "Lunes y Miercoles(14:05 - 15:45)", "12 AULA A-N4", "Matemática Basica", "Ingeniería industrial", "UCB", 21, "presencial", 60 , '["Límites y Continuidad", "Derivadas", "Aplicaciones de la Derivada", "Integrales Definidas e Indefinidas", "Aplicaciones de la Integral", "Teorema Fundamental del Cálculo", "Técnicas de Integración", "Funciones Trascendentes", "Límites Indeterminados y Regla de L Hôpital", "Series y Sucesiones"]', "-17.695191,-63.1514697");
const Antropologia_Y_Valores = new Materia("Antropologia y valores", "[FHC-101]" , "DE LA BARRA BARRA EXALTA GABRIELA", "Martes y Jueves(09:10 - 10:40)" , " Martes: 4 AULA A-N3, Jueves: B 2-1", "Ninguno", "Ingenieria Industrial", "UCB", 62, "presencial", 60 , '["Concepto de Antropología", "Antropología Filosófica", "La Persona Humana", "Cultura y Sociedad", "Ética y Valores Humanos", "Diversidad Cultural", "Derechos Humanos y Dignidad", "Identidad y Globalización", "Valores en la Familia y la Sociedad", "Responsabilidad Social y Ciudadana"]', "-17.695191,-63.1514697");
const Fisica1 = new Materia("Fisica I", "[FIS-111]", " LOBO LIMPIAS VICTOR HUGO", "Lunes y Miercoles(09:10 - 10:40)", "E 2-5", "Ninguno", "Ingenieria Industrial", "UCB", 45, "presencial", 60, '["Cinemática", "Dinámica", "Leyes de Newton", "Trabajo y Energía", "Conservación de la Energía", "Cantidad de Movimiento y Colisiones", "Rotación de Cuerpos Rígidos", "Gravitación", "Equilibrio y Elasticidad", "Fluidos"]', "-17.695191,-63.1514697");
const LabFisica = new Materia("Fisica I y Laboratorio", "[FIS-111]", "ALVAREZ CABALLERO ROBERTO CARLOS", "Miercoles(10:50 - 12:20)", "F 1-2 (LAB. PROCESOS)", "Ninguno", "Ingenieria Industrial", "UCB", 15, "presencial", 60 , '["Cinemática", "Dinámica", "Leyes de Newton", "Trabajo y Energía", "Conservación de la Energía", "Cantidad de Movimiento y Colisiones", "Rotación de Cuerpos Rígidos", "Gravitación", "Equilibrio y Elasticidad", "Fluidos"]' , "-17.695191,-63.1514697");
const Manufactura = new Materia("Manufactura y Mecanizado", "[IND-112]", "SALVATIERRA ARANCIBIA JORGE ENRIQUE", "Martes, Jueves y Viernes(07:30 - 09:00", "Martes: 12 AULA A-N4, Jueves y Viernes: F 1-2 (LAB. PROCESOS)", "Introduccion al diseño industrial", "Ingenieria industrial", "UCB", 14, "presencial", 60 , '["Procesos de Manufactura", "Fundición", "Formado de Metales", "Mecanizado", "Máquinas Herramienta", "Torneado", "Fresado", "Rectificado", "CNC y Automatización", "Procesos de Soldadura", "Control de Calidad en Manufactura"]', "-17.695191,-63.1514697");
const Estadistica = new Materia("Probabilidad y Estadistica I", "[MAT-142]", "BARCA MAGARZO CARMEN SILVIA", "Martes y Jueves(10:50 - 12:20)", "D 2-1 (LAB. CÓMPUTO 2)", "Ninguno", "Ingenieria Industrial", "UCB", 33, "presencial", 60, '["Introducción a la Probabilidad", "Espacios Muestrales y Eventos", "Reglas de Probabilidad", "Probabilidad Condicional e Independencia", "Variables Aleatorias Discretas", "Distribuciones de Probabilidad Discretas", "Variables Aleatorias Continuas", "Distribuciones de Probabilidad Continuas", "Distribución Normal", "Estimación y Teoría del Muestreo"]', "-17.695191,-63.1514697");
const Programacion = new Materia("Programación I", "[SIS-112]", "ESCALANTE USTARIZ EDDY", "Lunes(10:50 - 12:20) y Viernes(09:10 - 11:35)", "C 2-2 (LAB. CÓMPUTO 5)", "Introducción a la programacion", "Ingenieria Industrial", "UCB", 15, "presencial", 60 , '["Introducción a la Programación", "Tipos de Datos y Variables", "Estructuras de Control de Flujo", "Funciones y Procedimientos", "Arreglos y Matrices", "Cadenas de Caracteres", "Punteros y Referencias", "Estructuras de Datos Básicas", "Manejo de Archivos", "Depuración y Pruebas de Código"]', "-17.695191,-63.1514697")


const materia = document.getElementById('materia');
const sigla = document.getElementById("sigla");
const docente = document.getElementById("docente");
const horario = document.getElementById("horario");
const aula = document.getElementById("aula");
const requisito = document.getElementById("requisito");
const carrera = document.getElementById("carrera");
const universidad = document.getElementById("universidad");
const inscritos = document.getElementById("inscritos");
const modalidad = document.getElementById("modalidad");
const calificacionminima = document.getElementById("calificacionminima"); 
const temas = document.getElementById("temas"); 
const ubicacion = document.getElementById("ubicacion"); 


function botonMateriaCalculo(){
    materia.textContent = Calculo1.Nmateria(); 
}

function botonMateriaAntropologia(){
    materia.textContent = Antropologia_Y_Valores.Nmateria(); 
}
function botonMateriaFisica(){
    materia.textContent = Fisica1.Nmateria(); 
}

function botonMateriaLabFisica(){
    materia.textContent = LabFisica.Nmateria(); 
}

function botonMateriaManufactura(){
    materia.textContent = Manufactura.Nmateria(); 
}

function botonMateriaEstadistica(){
    materia.textContent = Estadistica.Nmateria(); 
}

function botonMateriaProgramacion(){
    materia.textContent = Programacion.Nmateria(); 
}

function botonSiglaCalculo(){
    sigla.textContent = Calculo1.Abreviatura(); 
}

function botonSiglaAntropologia(){
    sigla.textContent = Antropologia_Y_Valores.Abreviatura(); 
}
function botonSiglaFisica(){
    sigla.textContent = Fisica1.Abreviatura(); 
}

function botonSiglaLabFisica(){
    sigla.textContent = LabFisica.Abreviatura(); 
}

function botonSiglaManufactura(){
    sigla.textContent = Manufactura.Abreviatura(); 
}

function botonSiglaEstadistica(){
    sigla.textContent = Estadistica.Abreviatura(); 
}

function botonSiglaProgramacion(){
    sigla.textContent = Programacion.Abreviatura(); 
}

function botonDocenteCalculo(){
    docente.textContent = Calculo1.DocenteAsignado(); 
}

function botonDocenteAntropologia(){
    docente.textContent = Antropologia_Y_Valores.DocenteAsignado(); 
}
function botonDocenteFisica(){
    docente.textContent = Fisica1.DocenteAsignado(); 
}

function botonDocenteLabFisica(){
    docente.textContent = LabFisica.DocenteAsignado(); 
}

function botonDocenteManufactura(){
    docente.textContent = Manufactura.DocenteAsignado(); 
}

function botonDocenteEstadistica(){
    docente.textContent = Estadistica.DocenteAsignado(); 
}

function botonDocenteProgramacion(){
    docente.textContent = Programacion.DocenteAsignado(); 
}

function botonAulaCalculo(){
    aula.textContent = Calculo1.AulaAsignada(); 
}

function botonAulaAntropologia(){
    aula.textContent = Antropologia_Y_Valores.AulaAsignada(); 
}
function botonAulaFisica(){
    aula.textContent = Fisica1.AulaAsignada(); 
}

function botonAulaLabFisica(){
    aula.textContent = LabFisica.AulaAsignada(); 
}

function botonAulaManufactura(){
    aula.textContent = Manufactura.AulaAsignada(); 
}

function botonAulaEstadistica(){
    aula.textContent = Estadistica.AulaAsignada(); 
}

function botonAulaProgramacion(){
    aula.textContent = Programacion.AulaAsignada(); 
}

function botonHorarioCalculo(){
    horario.textContent = Calculo1.HorariosDeClase(); 
}

function botonHorarioAntropologia(){
    horario.textContent = Antropologia_Y_Valores.HorariosDeClase(); 
}
function botonHorarioFisica(){
    horario.textContent = Fisica1.HorariosDeClase(); 
}

function botonHorarioLabFisica(){
    horario.textContent = LabFisica.HorariosDeClase(); 
}

function botonHorarioManufactura(){
    horario.textContent = Manufactura.HorariosDeClase(); 
}

function botonHorarioEstadistica(){
    horario.textContent = Estadistica.HorariosDeClase(); 
}

function botonHorarioProgramacion(){
    horario.textContent = Programacion.HorariosDeClase(); 
}

function botonRequisitoCalculo(){
    requisito.textContent = Calculo1.RequisiquitosPrevios(); 
}

function botonRequisitoAntropologia(){
    requisito.textContent = Antropologia_Y_Valores.RequisiquitosPrevios(); 
}
function botonRequisitoFisica(){
    requisito.textContent = Fisica1.RequisiquitosPrevios(); 
}

function botonRequisitoLabFisica(){
    requisito.textContent = LabFisica.RequisiquitosPrevios(); 
}

function botonRequisitoManufactura(){
    requisito.textContent = Manufactura.RequisiquitosPrevios(); 
}

function botonRequisitoEstadistica(){
    requisito.textContent = Estadistica.RequisiquitosPrevios(); 
}

function botonRequisitoProgramacion(){
    requisito.textContent = Programacion.RequisiquitosPrevios(); 
}

function botonCarreraCalculo(){
    carrera.textContent = Calculo1.Pertenece(); 
}

function botonCarreraAntropologia(){
    carrera.textContent = Antropologia_Y_Valores.Pertenece(); 
}
function botonCarreraFisica(){
    carrera.textContent = Fisica1.Pertenece(); 
}

function botonCarreraLabFisica(){
    carrera.textContent = LabFisica.Pertenece(); 
}

function botonCarreraManufactura(){
    carrera.textContent = Manufactura.Pertenece(); 
}

function botonCarreraEstadistica(){
    carrera.textContent = Estadistica.Pertenece(); 
}

function botonCarreraProgramacion(){
    carrera.textContent = Programacion.Pertenece(); 
}

function botonUniversidadCalculo(){
    universidad.textContent = Calculo1.UniversidadDeOrigen(); 
}

function botonUniversidadAntropologia(){
    universidad.textContent = Antropologia_Y_Valores.UniversidadDeOrigen(); 
}
function botonUniversidadFisica(){
    universidad.textContent = Fisica1.UniversidadDeOrigen(); 
}

function botonUniversidadLabFisica(){
    universidad.textContent = LabFisica.UniversidadDeOrigen(); 
}

function botonUniversidadManufactura(){
    universidad.textContent = Manufactura.UniversidadDeOrigen(); 
}

function botonUniversidadEstadistica(){
    universidad.textContent = Estadistica.UniversidadDeOrigen(); 
}

function botonUniversidadProgramacion(){
    universidad.textContent = Programacion.UniversidadDeOrigen(); 
}

function botonInscritosCalculo(){
    inscritos.textContent = Calculo1.Inscritos(); 
}

function botonInscritosAntropologia(){
    inscritos.textContent = Antropologia_Y_Valores.Inscritos(); 
}
function botonInscritosFisica(){
    inscritos.textContent = Fisica1.Inscritos(); 
}

function botonInscritosLabFisica(){
    inscritos.textContent = LabFisica.Inscritos(); 
}

function botonInscritosManufactura(){
    inscritos.textContent = Manufactura.Inscritos(); 
}

function botonInscritosEstadistica(){
    inscritos.textContent = Estadistica.Inscritos(); 
}

function botonInscritosProgramacion(){
    inscritos.textContent = Programacion.Inscritos(); 
}

//Funcion boton Modalidad
function botonModalidadCalculo(){
    modalidad.textContent = Calculo1.Modalidad(); 
}

function botonModalidadAntropologia(){
    modalidad.textContent = Antropologia_Y_Valores.Modalidad(); 
}
function botonModalidadFisica(){
    modalidad.textContent = Fisica1.Modalidad(); 
}

function botonModalidadLabFisica(){
    modalidad.textContent = LabFisica.Modalidad(); 
}

function botonModalidadManufactura(){
    modalidad.textContent = Manufactura.Modalidad(); 
}

function botonModalidadEstadistica(){
    modalidad.textContent = Estadistica.Modalidad(); 
}

function botonModalidadProgramacion(){
    modalidad.textContent = Programacion.Modalidad(); 
}

//funcion boton de calificacionminima
function botonCalificacionMinimaCalculo(){
    calificacionminima.textContent = Calculo1.CalificacionMinima(); 
}

function botonCalificacionMinimaAntropologia(){
    calificacionminima.textContent = Antropologia_Y_Valores.CalificacionMinima(); 
}
function botonCalificacionMinimaFisica(){
    calificacionminima.textContent = Fisica1.CalificacionMinima(); 
}

function botonCalificacionMinimaLabFisica(){
    calificacionminima.textContent = LabFisica.CalificacionMinima(); 
}

function botonCalificacionMinimaManufactura(){
    calificacionminima.textContent = Manufactura.CalificacionMinima(); 
}

function botonCalificacionMinimaEstadistica(){
    calificacionminima.textContent = Estadistica.CalificacionMinima(); 
}

function botonCalificacionMinimaProgramacion(){
    calificacionminima.textContent = Programacion.CalificacionMinima(); 
}

//funcion boton de temas 

function botonTemasDeAvanceCalculo(){
    temas.textContent = Calculo1.TemasDeAvance(); 
}

function botonTemasDeAvanceAntropologia(){
    temas.textContent = Antropologia_Y_Valores.TemasDeAvance(); 
}
function botonTemasDeAvanceFisica(){
    temas.textContent = Fisica1.TemasDeAvance(); 
}

function botonTemasDeAvanceLabFisica(){
    temas.textContent = LabFisica.TemasDeAvance(); 
}

function botonTemasDeAvanceManufactura(){
    temas.textContent = Manufactura.TemasDeAvance(); 
}

function botonTemasDeAvanceEstadistica(){
    temas.textContent = Estadistica.TemasDeAvance(); 
}

function botonTemasDeAvanceProgramacion(){
    temas.textContent = Programacion.TemasDeAvance(); 
}

//funcion de boton de ubicacion

function botonUbicacionCalculo(){
    ubicacion.textContent = Calculo1.Ubicacion(); 
}

function botonUbicacionAntropologia(){
    ubicacion.textContent = Antropologia_Y_Valores.Ubicacion(); 
}
function botonUbicacionFisica(){
    ubicacion.textContent = Fisica1.Ubicacion(); 
}

function botonUbicacionLabFisica(){
    ubicacion.textContent = LabFisica.Ubicacion(); 
}

function botonUbicacionManufactura(){
    ubicacion.textContent = Manufactura.Ubicacion(); 
}

function botonUbicacionEstadistica(){
    ubicacion.textContent = Estadistica.Ubicacion(); 
}

function botonUbicacionProgramacion(){
    ubicacion.textContent = Programacion.Ubicacion(); 
}

// botones para Modificar datos 
function botonModificarMateriaCalculo(){
    materia.textContent = Calculo1.modificarNombreMateria(); 
}

function botonModificarMateriaAntropologia(){
    materia.textContent = Antropologia_Y_Valores.modificarNombreMateria(); 
}
function botonModificarMateriaFisica(){
    materia.textContent = Fisica1.modificarNombreMateria(); 
}

function botonModificarMateriaLabFisica(){
    materia.textContent = LabFisica.modificarNombreMateria(); 
}

function botonModificarMateriaManufactura(){
    materia.textContent = Manufactura.modificarNombreMateria(); 
}

function botonModificarMateriaEstadistica(){
    materia.textContent = Estadistica.modificarNombreMateria(); 
}

function botonModificarMateriaProgramacion(){
    materia.textContent = Programacion.modificarNombreMateria(); 
}

function botonModificarSiglaCalculo(){
    sigla.textContent = Calculo1.modificarSigla(); 
}

function botonModificarSiglaAntropologia(){
    sigla.textContent = Antropologia_Y_Valores.modificarSigla(); 
}
function botonModificarSiglaFisica(){
    sigla.textContent = Fisica1.modificarSigla(); 
}

function botonModificarSiglaLabFisica(){
    sigla.textContent = LabFisica.modificarSigla(); 
}

function botonModificarSiglaManufactura(){
    sigla.textContent = Manufactura.modificarSigla(); 
}

function botonModificarSiglaEstadistica(){
    sigla.textContent = Estadistica.modificarSigla(); 
}

function botonModificarSiglaProgramacion(){
    sigla.textContent = Programacion.modificarSigla(); 
}

function botonModificarDocenteCalculo(){
    docente.textContent = Calculo1.modificarDocente(); 
}

function botonModificarDocenteAntropologia(){
    docente.textContent = Antropologia_Y_Valores.modificarDocente(); 
}
function botonModificarDocenteFisica(){
    docente.textContent = Fisica1.modificarDocente(); 
}

function botonModificarDocenteLabFisica(){
    docente.textContent = LabFisica.modificarDocente(); 
}

function botonModificarDocenteManufactura(){
    docente.textContent = Manufactura.modificarDocente(); 
}

function botonModificarDocenteEstadistica(){
    docente.textContent = Estadistica.modificarDocente(); 
}

function botonModificarDocenteProgramacion(){
    docente.textContent = Programacion.modificarDocente(); 
}

function botonModificarAulaCalculo(){
    aula.textContent = Calculo1.modificarAula(); 
}

function botonModificarAulaAntropologia(){
    aula.textContent = Antropologia_Y_Valores.modificarAula(); 
}
function botonModificarAulaFisica(){
    aula.textContent = Fisica1.modificarAula(); 
}

function botonModificarAulaLabFisica(){
    aula.textContent = LabFisica.modificarAula(); 
}

function botonModificarAulaManufactura(){
    aula.textContent = Manufactura.modificarAula(); 
}

function botonModificarAulaEstadistica(){
    aula.textContent = Estadistica.modificarAula(); 
}

function botonModificarAulaProgramacion(){
    aula.textContent = Programacion.modificarAula(); 
}

function botonModificarHorarioCalculo(){
    horario.textContent = Calculo1.modificarHorarios(); 
}

function botonModificarHorarioAntropologia(){
    horario.textContent = Antropologia_Y_Valores.modificarHorarios(); 
}
function botonModificarHorarioFisica(){
    horario.textContent = Fisica1.modificarHorarios(); 
}

function botonModificarHorarioLabFisica(){
    horario.textContent = LabFisica.modificarHorarios(); 
}

function botonModificarHorarioManufactura(){
    horario.textContent = Manufactura.modificarHorarios(); 
}

function botonModificarHorarioEstadistica(){
    horario.textContent = Estadistica.modificarHorarios(); 
}

function botonModificarHorarioProgramacion(){
    horario.textContent = Programacion.modificarHorarios(); 
}

function botonModificarRequisitoCalculo(){
    requisito.textContent = Calculo1.modificarRequisito(); 
}

function botonModificarRequisitoAntropologia(){
    requisito.textContent = Antropologia_Y_Valores.modificarRequisito(); 
}
function botonModificarRequisitoFisica(){
    requisito.textContent = Fisica1.modificarRequisito(); 
}

function botonModificarRequisitoLabFisica(){
    requisito.textContent = LabFisica.modificarRequisito(); 
}

function botonModificarRequisitoManufactura(){
    requisito.textContent = Manufactura.modificarRequisito(); 
}

function botonModificarRequisitoEstadistica(){
    requisito.textContent = Estadistica.modificarRequisito(); 
}

function botonModificarRequisitoProgramacion(){
    requisito.textContent = Programacion.modificarRequisito(); 
}

function botonModificarCarreraCalculo(){
    carrera.textContent = Calculo1.modificarCarrera(); 
}

function botonModificarCarreraAntropologia(){
    carrera.textContent = Antropologia_Y_Valores.modificarCarrera(); 
}
function botonModificarCarreraFisica(){
    carrera.textContent = Fisica1.modificarCarrera(); 
}

function botonModificarCarreraLabFisica(){
    carrera.textContent = LabFisica.modificarCarrera(); 
}

function botonModificarCarreraManufactura(){
    carrera.textContent = Manufactura.modificarCarrera(); 
}

function botonModificarCarreraEstadistica(){
    carrera.textContent = Estadistica.modificarCarrera(); 
}

function botonModificarCarreraProgramacion(){
    carrera.textContent = Programacion.modificarCarrera(); 
}

function botonModificarUniversidadCalculo(){
    universidad.textContent = Calculo1.modificarUniversidad(); 
}

function botonModificarUniversidadAntropologia(){
    universidad.textContent = Antropologia_Y_Valores.modificarUniversidad(); 
}
function botonModificarUniversidadFisica(){
    universidad.textContent = Fisica1.modificarUniversidad(); 
}

function botonModificarUniversidadLabFisica(){
    universidad.textContent = LabFisica.modificarUniversidad(); 
}

function botonModificarUniversidadManufactura(){
    universidad.textContent = Manufactura.modificarUniversidad(); 
}

function botonModificarUniversidadEstadistica(){
    universidad.textContent = Estadistica.modificarUniversidad(); 
}

function botonModificarUniversidadProgramacion(){
    universidad.textContent = Programacion.modificarUniversidad(); 
}

function botonModificarInscritosCalculo(){
    inscritos.textContent = Calculo1.modificarCantidadInscritos(); 
}

function botonModificarInscritosAntropologia(){
    inscritos.textContent = Antropologia_Y_Valores.modificarCantidadInscritos(); 
}
function botonModificarInscritosFisica(){
    inscritos.textContent = Fisica1.modificarCantidadInscritos(); 
}

function botonModificarInscritosLabFisica(){
    inscritos.textContent = LabFisica.modificarCantidadInscritos(); 
}

function botonModificarInscritosManufactura(){
    inscritos.textContent = Manufactura.modificarCantidadInscritos(); 
}

function botonModificarInscritosEstadistica(){
    inscritos.textContent = Estadistica.modificarCantidadInscritos(); 
}

function botonModificarInscritosProgramacion(){
    inscritos.textContent = Programacion.modificarCantidadInscritos(); 
}

//funcion modificar modalidad de calculo

function botonModificarModalidadCalculo(){
    modalidad.textContent = Calculo1.modificarModalidad(); 
}

function botonModificarModalidadAntropologia(){
    modalidad.textContent = Antropologia_Y_Valores.modificarModalidad(); 
}
function botonModificarModalidadFisica(){
    modalidad.textContent = Fisica1.modificarModalidad(); 
}

function botonModificarModalidadLabFisica(){
    modalidad.textContent = LabFisica.modificarModalidad(); 
}

function botonModificarModalidadManufactura(){
    modalidad.textContent = Manufactura.modificarModalidad(); 
}

function botonModificarModalidadEstadistica(){
    modalidad.textContent = Estadistica.modificarModalidad(); 
}

function botonModificarModalidadProgramacion(){
    modalidad.textContent = Programacion.modificarModalidad(); 
}

//funcion boton de modificar calificacion minima
function botonModificarCalificacionMinimaCalculo(){
    calificacionminima.textContent = Calculo1.modificarCalificacionMinima(); 
}

function botonModificarCalificacionMinimaAntropologia(){
    calificacionminima.textContent = Antropologia_Y_Valores.modificarCalificacionMinima(); 
}
function botonModificarCalificacionMinimaFisica(){
    calificacionminima.textContent = Fisica1.modificarCalificacionMinima(); 
}

function botonModificarCalificacionMinimaLabFisica(){
    calificacionminima.textContent = LabFisica.modificarCalificacionMinima(); 
}

function botonModificarCalificacionMinimaManufactura(){
    calificacionminima.textContent = Manufactura.modificarCalificacionMinima(); 
}

function botonModificarCalificacionMinimaEstadistica(){
    calificacionminima.textContent = Estadistica.modificarCalificacionMinima(); 
}

function botonModificarCalificacionMinimaProgramacion(){
    calificacionminima.textContent = Programacion.modificarCalificacionMinima(); 
}

//funcion boton modificar temas 

function botonModificarTemasDeAvanceCalculo(){
    temas.textContent = Calculo1.modificartemas(); 
}

function botonModificarTemasDeAvanceAntropologia(){
    temas.textContent = Antropologia_Y_Valores.modificartemas(); 
}
function botonModificarTemasDeAvanceFisica(){
    temas.textContent = Fisica1.modificartemas(); 
}

function botonModificarTemasDeAvanceLabFisica(){
    temas.textContent = LabFisica.modificartemas(); 
}

function botonModificarTemasDeAvanceManufactura(){
    temas.textContent = Manufactura.modificartemas(); 
}

function botonModificarTemasDeAvanceEstadistica(){
    temas.textContent = Estadistica.modificartemas(); 
}

function botonModificarTemasDeAvanceProgramacion(){
    temas.textContent = Programacion.modificartemas(); 
}

//funcion de boton modificar ubicacion

function botonModificarUbicacionCalculo(){
    Ubicacion.textContent = Calculo1.modificarUbicacion(); 
}

function botonModificarUbicacionAntropologia(){
    ubicacion.textContent = Antropologia_Y_Valores.modificarUbicacion(); 
}
function botonModificarUbicacionFisica(){
    ubicacion.textContent = Fisica1.modificarUbicacion(); 
}

function botonModificarUbicacionLabFisica(){
    ubicacion.textContent = LabFisica.modificarUbicacion(); 
}

function botonModificarUbicacionManufactura(){
    ubicacion.textContent = Manufactura.modificarUbicacion(); 
}

function botonModificarUbicacionEstadistica(){
    ubicacion.textContent = Estadistica.modificarUbicacion(); 
}

function botonModificarUbicacionProgramacion(){
    ubicacion.textContent = Programacion.modificarUbicacion(); 
}

//Funciones para eliminar los datos 


//Eliminar nombre de la materia 
function botonEliminarMateria() {
    if (materia.textContent !== "") {
        materia.textContent = "";
        alert("La materia fue eliminada exitosamente"); 
    } else {
        alert("No hay una materia asignada para eliminar.");
    }
}

// Botones para eliminar Siglas
function botonEliminarSigla() {
    if (sigla.textContent !== "") {
        sigla.textContent = "";
        alert("La sigla ha sido eliminada");
    } else {
        alert("No hay una abreviatura disponible para eliminar.");
    }
}

//Eliminar al docente 
function botonEliminarDocente() {
    if (docente.textContent !== "") {
        docente.textContent = "";
        alert("El docente fue eliminado exitosamente.");
    } else {
        alert("No hay un docente asignado para eliminar.");
    }
}

// Eliminar los horarios 
function botonEliminarHorario() {
    if (horario.textContent !== "") {
        horario.textContent = "";
        alert("Los horarios fueron removidos con exito.");
    } else {
        alert("No hay un horario asigando para eliminar.");
    }
}

// Botones para eliminar Aula
function botonEliminarAula() {
    if (aula.textContent !== "") {
        aula.textContent = "";
        alert("El aula fue retirada exitorsamente.");
    } else {
        alert("No hay una aula asiganda para eliminar.");
    }
}

// Botones para eliminar Requisito
function botonEliminarRequisito() {
    if (requisito.textContent !== "") {
        requisito.textContent = "";
        alert("Los requisitos se retiraron exitosamente.");
    } else {
        alert("No hay requisitos para eliminar.");
    }
}

// Botones para eliminar Carrera
function botonEliminarCarrera() {
    if (carrera.textContent !== "") {
        carrera.textContent = "";
        alert("La carrera fue retirada con exito");
    } else {
        alert("No hay carrera para eliminar");
    }
}

// Botones para eliminar Universidad
function botonEliminarUniversidad() {
    if (universidad.textContent !== "") {
        universidad.textContent = "";
        alert("La universidad de elimino con exito.");
    } else {
        alert("No hay universidad para eliminar");
    }
}

// Botones para eliminar Inscritos
function botonEliminarInscritos() {
    if (inscritos.textContent !== "") {
        inscritos.textContent = "";
        alert("Los inscritos fueron retirados con exito.");
    } else {
        alert("No hay inscritos para eliminar");
    }
}

//Botones para eliminar modalidad 
function botonEliminarModalidad() {
    if (modalidad.textContent !== "") {
        modalidad.textContent = "";
        alert("La modalidad fue eliminada con exito.");
    } else {
        alert("No hay modalidad registrada para eliminar.");
    }
}

//Botones para eliminar calificacion minima de aprobacion 
function botonEliminarCalificacionMinima() {
    if (calificacionminima.textContent !== "") {
        calificacionminima.textContent = "";
        alert("La calificacion minima ha sido eliminada");
    } else {
        alert("No hay una calificacion minima asignada para eliminar.");
    }
}

//Botones para eliminar los temas de avance
function botonEliminarTemas() {
    if (temas.textContent !== "") {
        temas.textContent = "";
        alert("Los temas fueron eliminados con exito.");
    } else {
        alert("No hay temas para eliminar");
    }
}

//Botones para eliminar la ubicacion 
function botonEliminarUbicacion() {
    if (ubicacion.textContent !== "") {
        ubicacion.textContent = "";
        alert("La ubicacion fue eliminada con exito.");
    } else {
        alert("No hay ubicacion para eliminar");
    }
}
