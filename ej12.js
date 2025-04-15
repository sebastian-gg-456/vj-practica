const personas = [
    { nombre: "Ana", sexoBiologico: "F", edad: 25 },
    { nombre: "Juan", sexoBiologico: "M", edad: 30 },
    { nombre: "María", sexoBiologico: "F", edad: 40 },
    { nombre: "Pedro", sexoBiologico: "M", edad: 20 },
    { nombre: "Lucía", sexoBiologico: "F", edad: 35 }
  ];

  const promedioEdad = personas.reduce((acum, persona) => acum + persona.edad, 0) / personas.length;

  const mujerMayor = personas
    .filter(persona => persona.sexoBiologico === "F")
    .reduce((mayor, persona) => (persona.edad > mayor.edad ? persona : mayor), { edad: 0 });

  const hombreMenor = personas
    .filter(persona => persona.sexoBiologico === "M")
    .reduce((menor, persona) => (persona.edad < menor.edad ? persona : menor), { edad: Infinity });


  const mujeres = personas.filter(persona => persona.sexoBiologico === "F");
  const promedioEdadMujeres = mujeres.reduce((acum, mujer) => acum + mujer.edad, 0) / mujeres.length;


  console.log("Promedio de edad:", promedioEdad.toFixed(2));
  console.log("Mujer con mayor edad:", mujerMayor.nombre);
  console.log("Hombre con menor edad:", hombreMenor.nombre);
  console.log("Promedio de edad de las mujeres:", promedioEdadMujeres.toFixed(2));