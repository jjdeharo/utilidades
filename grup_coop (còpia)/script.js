function parseAlumnos(input) {
    return input.split(/[\n,]+/).map(alumno => alumno.trim()).filter(alumno => alumno.length > 0);
  }
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
    
  function balancearGrupos(grupos) {
    // Balancear alumnos A
    for (let i = 0; i < grupos.length - 1; i++) {
      const grupoActual = grupos[i];
      const numAlumnosAActual = grupoActual.filter(alumno => alumno.startsWith("(A)")).length;
  
      if (numAlumnosAActual >= 2) {
        for (let j = i + 1; j < grupos.length; j++) {
          const grupoSiguiente = grupos[j];
          const numAlumnosASiguiente = grupoSiguiente.filter(alumno => alumno.startsWith("(A)")).length;
  
          if (numAlumnosASiguiente === 0) {
            const indiceAlumnoA = grupoActual.findIndex(alumno => alumno.startsWith("(A)"));
            const alumnoA = grupoActual[indiceAlumnoA];
            grupoActual.splice(indiceAlumnoA, 1);
  
            const indiceAlumnoNoA = grupoSiguiente.findIndex(alumno => !alumno.startsWith("(A)"));
            const alumnoNoA = grupoSiguiente[indiceAlumnoNoA];
            grupoSiguiente.splice(indiceAlumnoNoA, 1);
  
            grupoActual.push(alumnoNoA);
            grupoSiguiente.push(alumnoA);
  
            // Salir del bucle interno ya que se ha realizado el intercambio
            break;
          }
        }
      }
    }
  
    // Balancear alumnos C
    for (let i = 0; i < grupos.length - 1; i++) {
      const grupoActual = grupos[i];
      const numAlumnosCActual = grupoActual.filter(alumno => alumno.startsWith("(C)")).length;
  
      if (numAlumnosCActual >= 2) {
        for (let j = i + 1; j < grupos.length; j++) {
          const grupoSiguiente = grupos[j];
          const numAlumnosCSiguiente = grupoSiguiente.filter(alumno => alumno.startsWith("(C)")).length;
  
          if (numAlumnosCSiguiente === 0) {
            const indiceAlumnoC = grupoActual.findIndex(alumno => alumno.startsWith("(C)"));
            const alumnoC = grupoActual[indiceAlumnoC];
            grupoActual.splice(indiceAlumnoC, 1);
  
            const indiceAlumnoB = grupoSiguiente.findIndex(alumno => alumno.startsWith("(B)"));
            if (indiceAlumnoB !== -1) {
              const alumnoB = grupoSiguiente[indiceAlumnoB];
              grupoSiguiente.splice(indiceAlumnoB, 1);
  
              grupoActual.push(alumnoB);
              grupoSiguiente.push(alumnoC);
  
              // Salir del bucle interno ya que se ha realizado el intercambio
              break;
            }
          }
        }
      }
    }
  }
  
  

  function generarGrupos() {
    let grupoA = parseAlumnos(document.getElementById("grupoA").value);
    let grupoB = parseAlumnos(document.getElementById("grupoB").value);
    let grupoC = parseAlumnos(document.getElementById("grupoC").value);
    const numAlumnos = parseInt(document.getElementById("numAlumnos").value);
    const tipoGrupo = document.querySelector('input[name="tipoGrupo"]:checked').value;
    const sobrantes = document.querySelector('input[name="sobrantes"]:checked').value;
    const resultados = document.getElementById("resultados");

    if (tipoGrupo === "esporadicos") {
        grupoA.push(...grupoB, ...grupoC);
        grupoB = [];
        grupoC = [];
    }
    
    // Mezclar los alumnos en cada grupo para que sean aleatorios
    shuffleArray(grupoA);
    shuffleArray(grupoB);
    shuffleArray(grupoC);
  
    let grupos = [];
    let indiceA = 0, indiceB = 0, indiceC = 0;
  
    if (tipoGrupo === "homogeneos" || tipoGrupo === "esporadicos") {
      // Crear grupos homogéneos
      while (indiceA < grupoA.length || indiceB < grupoB.length || indiceC < grupoC.length) {
        let nuevoGrupo = [];
        while (nuevoGrupo.length < numAlumnos && (indiceA < grupoA.length || indiceB < grupoB.length || indiceC < grupoC.length)) {
          if (indiceA < grupoA.length) {
            if (tipoGrupo === "esporadicos") {
              nuevoGrupo.push(grupoA[indiceA++]);
            } else {
              nuevoGrupo.push("(A) " + grupoA[indiceA++]);
            }
          } else if (indiceB < grupoB.length) nuevoGrupo.push("(B) " + grupoB[indiceB++]);
          else if (indiceC < grupoC.length) nuevoGrupo.push("(C) " + grupoC[indiceC++]);
        }
        grupos.push(nuevoGrupo);
      }
    } else {
      // Crear grupos heterogéneos
      while (indiceA < grupoA.length || indiceB < grupoB.length || indiceC < grupoC.length) {
        let nuevoGrupo = [];
        let turnos = ['A', 'B', 'C'];
        
        while (nuevoGrupo.length < numAlumnos && (indiceA < grupoA.length || indiceB < grupoB.length || indiceC < grupoC.length)) {
          let turnoActual = turnos.shift();

          if (turnoActual === 'A' && indiceA < grupoA.length) {
            nuevoGrupo.push("(A) " + grupoA[indiceA++]);
          } else if (turnoActual === 'B' && indiceB < grupoB.length) {
            nuevoGrupo.push("(B) " + grupoB[indiceB++]);
          } else if (turnoActual === 'C' && indiceC < grupoC.length) {
            nuevoGrupo.push("(C) " + grupoC[indiceC++]);
          }

          if (turnoActual) {
            turnos.push(turnoActual);
          }
        }
        grupos.push(nuevoGrupo);
      }
      balancearGrupos(grupos);
    }
  
    // Tratar a los alumnos que sobran
  if (sobrantes === "grupoNuevo") {
    // El código existente se mantiene igual
  } else {
    // Si hay alumnos que sobran, eliminar el último grupo y redistribuir los alumnos
    const ultimoGrupo = grupos.pop();
    let indiceUltimoGrupo = 0;

    // Distribuir alumnos del último grupo entre otros grupos
    while (indiceUltimoGrupo < ultimoGrupo.length) {
      grupos[indiceUltimoGrupo % grupos.length].push(ultimoGrupo[indiceUltimoGrupo]);
      indiceUltimoGrupo++;
    }

    // Distribuir los alumnos sobrantes de los grupos A, B y C entre los grupos restantes
    let indiceGrupoA = 0;
    let indiceGrupoB = 0;
    let indiceGrupoC = 0;

    while (indiceA < grupoA.length) {
      grupos[indiceGrupoA % grupos.length].push("(A) " + grupoA[indiceA++]);
      indiceGrupoA++;
    }
    while (indiceB < grupoB.length) {
      grupos[indiceGrupoB % grupos.length].push("(B) " + grupoB[indiceB++]);
      indiceGrupoB++;
    }
    while (indiceC < grupoC.length) {
      grupos[indiceGrupoC % grupos.length].push("(C) " + grupoC[indiceC++]);
      indiceGrupoC++;
    }
  }

  // Ordenar cada grupo alfabéticamente, incluyendo las letras A, B o C
  grupos.forEach(grupo => {
    grupo.sort((a, b) => {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
  });

  // Mostrar resultados
  resultados.innerHTML = "";
  grupos.forEach((grupo, index) => {
    const p = document.createElement("p");
    p.textContent = `Grupo ${index + 1}: ${grupo.join(", ")}`;
    resultados.appendChild(p);
  });
  
}



  function actualizarInfoGrupos() {
    const grupoA = parseAlumnos(document.getElementById("grupoA").value);
    const grupoB = parseAlumnos(document.getElementById("grupoB").value);
    const grupoC = parseAlumnos(document.getElementById("grupoC").value);
    const numAlumnos = parseInt(document.getElementById("numAlumnos").value);
  
    const totalAlumnos = grupoA.length + grupoB.length + grupoC.length;
    const numGrupos = Math.floor(totalAlumnos / numAlumnos);
    const sobrantes = totalAlumnos % numAlumnos;
  
    const infoGrupos = document.getElementById("infoGrupos");
    infoGrupos.textContent = `Hay ${totalAlumnos} alumnos/as, se formarán ${numGrupos} equipos y sobran ${sobrantes} alumnos/as.`;
  }
  
  document.getElementById("grupoA").addEventListener("input", actualizarInfoGrupos);
  document.getElementById("grupoB").addEventListener("input", actualizarInfoGrupos);
  document.getElementById("grupoC").addEventListener("input", actualizarInfoGrupos);
  document.getElementById("numAlumnos").addEventListener("input", actualizarInfoGrupos);
  
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generarGrupos").addEventListener("click", generarGrupos);
    actualizarInfoGrupos();
  });