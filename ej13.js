const personas = [
    { nombre: "Ana", sexoBiologico: "F", edad: 25 },
    { nombre: "Juan", sexoBiologico: "M", edad: 30 },
    { nombre: "María", sexoBiologico: "F", edad: 40 },
    { nombre: "Pedro", sexoBiologico: "M", edad: 20 },
    { nombre: "Lucía", sexoBiologico: "F", edad: 35 }
  ];

  function calcularPromedioEdad(personas) {
    return personas.reduce((acum, persona) => acum + persona.edad, 0) / personas.length;
  }

  function obtenerMujerMayor(personas) {
    return personas
      .filter(persona => persona.sexoBiologico === "F")
      .reduce((mayor, persona) => (persona.edad > mayor.edad ? persona : mayor), { edad: 0 });
  }

  function obtenerHombreMenor(personas) {
    return personas
      .filter(persona => persona.sexoBiologico === "M")
      .reduce((menor, persona) => (persona.edad < menor.edad ? persona : menor), { edad: Infinity });
  }

  function calcularPromedioEdadMujeres(personas) {
    const m = personas.filter(persona => persona.sexoBiologico === "F");
    return m.reduce((acum, mujer) => acum + mujer.edad, 0) / m.length;
  }

  const proE = calcularPromedioEdad(personas);
  const mm = obtenerMujerMayor(personas);
  const hm = obtenerHombreMenor(personas);
  const pem = calcularPromedioEdadMujeres(personas);

  console.log("Promedio de edad:", proE.toFixed(2));
  console.log("Mujer con mayor edad:", mm.nombre);
  console.log("Hombre con menor edad:", hm.nombre);
  console.log("Promedio de edad de las mujeres:", pem.toFixed(2));