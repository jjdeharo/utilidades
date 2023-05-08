function calcularBootstrap() {
    const grupo1 = document.getElementById('grupo1').value.split(/[\s,]+/).map(Number);
    const grupo2 = document.getElementById('grupo2').value.split(/[\s,]+/).map(Number);
    const numSamples = parseInt(document.getElementById('numSamples').value) || 1000; // Si el valor es inválido, se utilizará 1000 por defecto.
  
    const meanDiff = mean(grupo1) - mean(grupo2);
    const combined = grupo1.concat(grupo2);
    let numGreaterThanMeanDiff = 0;
  
    for (let i = 0; i < numSamples; i++) {
      const resampled = resample(combined, grupo1.length + grupo2.length);
      const resampledGrupo1 = resampled.slice(0, grupo1.length);
      const resampledGrupo2 = resampled.slice(grupo1.length);
      const resampledMeanDiff = mean(resampledGrupo1) - mean(resampledGrupo2);
  
      if (Math.abs(resampledMeanDiff) >= Math.abs(meanDiff)) {
        numGreaterThanMeanDiff++;
      }
    }
  
    const pValue = numGreaterThanMeanDiff / numSamples;
    const resultado = document.getElementById('resultado');
    resultado.innerText = `p-valor: ${pValue.toFixed(4)} (${pValue < 0.05 ? 'Diferencia significativa' : 'No hay diferencia significativa'})`;
  }
  
  function mean(arr) {
    return arr.reduce((sum, val) => sum + val, 0) / arr.length;
  }
  
  function resample(arr, size) {
    const resampled = [];
    for (let i = 0; i < size; i++) {
      resampled.push(arr[Math.floor(Math.random() * arr.length)]);
    }
    return resampled;
  }
  