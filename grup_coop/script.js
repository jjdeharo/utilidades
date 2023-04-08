function parseAlumnos(input) {
    return input.split(/[\n,]+/).map(alumno => alumno.trim()).filter(alumno => alumno.length > 0);
  }
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
    

  function generarGrupos() {
    const grupoA = parseAlumnos(document.getElementById("grupoA").value);
    const grupoB = parseAlumnos(document.getElementById("grupoB").value);
    const grupoC = parseAlumnos(document.getElementById("grupoC").value);
    const numAlumnos = parseInt(document.getElementById("numAlumnos").value);
    const tipoGrupo = document.querySelector('input[name="tipoGrupo"]:checked').value;
    const sobrantes = document.querySelector('input[name="sobrantes"]:checked').value;
    const resultados = document.getElementById("resultados");
  
    // Mezclar los alumnos en cada grupo para que sean aleatorios
    shuffleArray(grupoA);
    shuffleArray(grupoB);
    shuffleArray(grupoC);
  
    let grupos = [];
    let indiceA = 0, indiceB = 0, indiceC = 0;
  
    if (tipoGrupo === "homogeneos") {
      // Crear grupos homogéneos
      while (indiceA < grupoA.length || indiceB < grupoB.length || indiceC < grupoC.length) {
        let nuevoGrupo = [];
        while (nuevoGrupo.length < numAlumnos && (indiceA < grupoA.length || indiceB < grupoB.length || indiceC < grupoC.length)) {
          if (indiceA < grupoA.length) nuevoGrupo.push("(A) " + grupoA[indiceA++]);
          else if (indiceB < grupoB.length) nuevoGrupo.push("(B) " + grupoB[indiceB++]);
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
    }
  
    // Tratar a los alumnos que sobran
    if (sobrantes === "grupoNuevo") {
        // Si hay alumnos que sobran, crear un grupo nuevo con ellos
  if (sobrantes === "grupoNuevo") {
    let grupoSobrantes = [];
    while (indiceA < grupoA.length) {
      grupoSobrantes.push("(A) " + grupoA[indiceA++]);
    }
    while (indiceB < grupoB.length) {
      grupoSobrantes.push("(B) " + grupoB[indiceB++]);
    }
    while (indiceC < grupoC.length) {
      grupoSobrantes.push("(C) " + grupoC[indiceC++]);
    }

    if (grupoSobrantes.length) grupos.push(grupoSobrantes);
  } else {
    // Si hay alumnos que sobran, agregarlos a otros grupos
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

  // Mostrar resultados
  resultados.innerHTML = "";
  grupos.forEach((grupo, index) => {
    const p = document.createElement("p");
    p.textContent = `Grupo ${index + 1}: ${grupo.join(", ")}`;
    resultados.appendChild(p);
  });
}

  
  

  // Mostrar resultados
  resultados.innerHTML = "";
  grupos.forEach((grupo, index) => {
    const p = document.createElement("p");
    p.textContent = `Grupo ${index + 1}: ${grupo.join(", ")}`;
    resultados.appendChild(p);
  });
}