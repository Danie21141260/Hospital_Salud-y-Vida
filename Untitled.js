// JavaScript Document
var datos = {};
var misdatos = info => {
    console.log(info);
    datos.usuarios = info;
    var html = "";
    html +="<h2>Pacientes</h2>";
    html += "<table border='1'>";
    html += "<tr><th>ID Paciente</th><th>Nombre</th><th>Enfermedad</th><th>Edad</th><th>Estado</th></tr>";
    datos.usuarios.map(paciente => {
        html += "<tr>";
        html += "<td>" + paciente.id + "</td>";
        html += "<td>" + paciente.nombre + "</td>";
        html += "<td>" + paciente.enfermedad + "</td>";
        html += "<td>" + paciente.edad + "</td>";
        html += "<td>" + paciente.estado + "</td>";
        html += "</tr>";
    });
    html += "</table>";
    document.getElementById("resultados").innerHTML = html;
};