//PRACTICA ARQUITECTURA 1
//hecha por : ALICIA FALCON IBAÑEZ

//********************************************* */
//APARTADO 1
type Superviviente={
    lugorigen?:string,
    nombre?:string,
    altura:number,
    edad:number,
    peso:number,
    infectado:boolean
}
//APARTADO 2
interface DatosNave  {
    peso:number,
    dimensiones:number[],
    velocidadCurvatura:number,
    listadoSupervivientes:Superviviente[]
}
//APARTADO 3
//usamos CONST porque NO queremos que LOS DATOS sea modificable
const s1={
    lugorigen:"Galicia",
    nombre:"JorgeCandia",
    altura:170,
    edad:18,
    peso:72,
    infectado:true
}
const s2={
    lugorigen:"Navarra",
    nombre:"Maribel",
    altura:160,
    edad:21,
    peso:57,
    infectado:false
}
const s3={
    nombre:"Elena",
    altura:153,
    edad:20,
    peso:50,
    infectado:true
}
const s4={
    lugorigen:"Barcelona",
    altura:182,
    edad:18,
    peso:72,
    infectado:false
}
const s5={
    lugorigen:"Huesca",
    nombre:"Ivan",
    altura:182,
    edad:18,
    peso:72,
    infectado:true
}
//usamos LET porque queremos que LA NAVE sea modificable
let enterprise={
    peso:4858936,
    dimensiones:[3636,848,929],
    velocidadCurvatura:73834,
    listadoSupervivientes:[s1,s2,s3,s4,s5]
}
//APARTADO 4
const a=enterprise.listadoSupervivientes.filter(f=>Object.keys(f).includes("nombre"))
                                .forEach(f=>console.log(Object.values(f)))

//THIS SIDE OF PARADISE
//1
enterprise.listadoSupervivientes.forEach((elem:Superviviente)=>(!elem.infectado) &&console.log(elem.nombre))


//2
const alguno=enterprise.listadoSupervivientes.some((p)=>p.infectado)
console.log(`Alguno Infectado: ${alguno}\n`)
const toda=enterprise.listadoSupervivientes.every((p)=>!p.infectado)
console.log(`Todos Infectados: ${toda}\n`)
const next=enterprise.listadoSupervivientes.find((p)=>p.infectado)
console.log(next instanceof Object && 'nombre' in next ? //primero verificamos si next es objeto (si no da ERROR)
`Proximo Infectado: ${next.nombre}` :
 "No se encontró un próximo infectado con nombre definido.")

 //THE CITY ON THE EDGE OF FOREVER
 //1
const fechas: (number | string)[] = [2314, 343.4, 23234, 323, 'jd23', 'aaa3']
const fReales:number[]=fechas.filter((f) => typeof f === 'number'||Number.isInteger(f))
                            .map(Number)
console.log(fReales)

//2
function getRandomInt(max:number) {//fuente:https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    const min = 1
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const fCompleta=fReales.map((elem:number)=>{
    return "Hora: "+getRandomInt(23)+
    "Minuto: "+getRandomInt(59)+
    "Segundo: "+getRandomInt(59)+
    "Dia: "+getRandomInt(30)+
    "Mes: "+getRandomInt(12)+
    "Año: "+elem     
})
console.log(fCompleta)

//THE TROUBLE WITH TRIBBLES
//1
type turboConducto={
    imperfecto:string,
    tribbles: number,
    danos: number
}
const tc1:turboConducto={
    imperfecto:"filtracion",
    tribbles: 33,
    danos:23
}
const tc2:turboConducto={
    imperfecto:"fuga",
    tribbles: 62,
    danos:34
}
const tc3:turboConducto={
    imperfecto:"desgaste",
    tribbles: 12,
    danos:3
}
const tc4:turboConducto={
    imperfecto:"corrosion",
    tribbles: 21,
    danos:34
}
const tc5:turboConducto={
    imperfecto:"sellado",
    tribbles: 3,
    danos:89
}
const listadoTurboconductos:turboConducto[]= [tc1,tc2,tc3,tc4,tc5]

const masDanos = listadoTurboconductos.reduce((acc, tb) => 
                        tb.danos > 20 ? acc + tb.tribbles : acc, 0);

console.log(masDanos);

const senalNivel = listadoTurboconductos.flatMap((turboconducto) =>
                        [turboconducto.danos, turboconducto.tribbles]);
console.log(senalNivel)

const estado = (turboconducto: { tribbles: number, danos: number }) => 
        turboconducto.tribbles > turboconducto.danos * 1.5 ? 
        "peligro" : "no peligro";



const peligro = listadoTurboconductos.map((turboconducto) => ({
    imperfecto: turboconducto.imperfecto,
    estado: estado(turboconducto)
}));
  
console.log(peligro);
  

  







 

