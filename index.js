// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];

// implementação
console.log("-------- Bem Vindo ao Sistema Escolar -----------")

// Cadastrar novo aluno
let alunosCadastrados = [];
function adicionarAluno(nome){
    if(typeof nome == "string"){
    let novoAluno = {
        nome,
        notas:[],
        cursos:[],
        faltas:0
    }
    alunosCadastrados.push(novoAluno)
    console.log("O(A) aluno(a) " + nome + " foi adicionado(a) com sucesso!")}
    else{console.log("Erro no cadastro, você precisar digitar um nome (entre aspas)")}
    }

// Listar Alunos
let todosAlunos = [...alunosDaEscola, ...alunosCadastrados];
function listarAlunos(){
    console.log("Estes são nossos alunos cadastrados:")
    for(aluno of todosAlunos) {
            console.log("Nome: "+aluno.nome)
            console.log("Notas: "+aluno.notas)
            console.log("Faltas: "+aluno.faltas)
            if(aluno.cursos[0] == undefined) {console.log("Nenhum curso cadastrado")}
            else {console.log("Curso: "+aluno.cursos[0].nomeDoCurso) & console.log("Matricula: "+aluno.cursos[0].dataMatricula)}
            console.log("--------------------------")
        }
       }
// Buscar Aluno
function buscarAluno(nome){
    let encontrados = [];
    for(aluno of todosAlunos){
    if(aluno.nome === nome) {
        console.log("O aluno "+ aluno.nome+" foi encontrado!")
        console.log("Notas: "+aluno.notas)
        console.log("Faltas: "+aluno.faltas)
        if(aluno.cursos[0] == undefined) {console.log("Nenhum curso cadastrado")}
        else {console.log("Curso: "+aluno.cursos[0].nomeDoCurso)};
    encontrados.push(aluno.nome)
}
    }
    if (encontrados.length == 0) {console.log("Aluno não listado")}
}
// Matricular Aluno
    function matricularAluno(nome, curso){
        for(i=0; i < todosAlunos.length; i++){
            if(todosAlunos[i].nome == nome) {
                todosAlunos[i].cursos.push({
                    nomeDoCurso: curso,
                    dataMatricula: new Date
                })
            console.log("Aluno matriculado com sucesso!")
            }
    }
    buscarAluno(nome)
    }

// Aplicar Falta
function aplicarFalta(nome){
    for(aluno of todosAlunos){
        if(aluno.nome === nome) {
            aluno.faltas = aluno.faltas + 1
            console.log("Falta aplicada!")
        }
    }
buscarAluno(nome)
}

// Aplicar Nota
function aplicarNota(nome, nota){
    for(aluno of todosAlunos){
        if(aluno.nome === nome) {
            aluno.notas.push(nota)
            console.log("Nota aplicada!")
        }
    }
buscarAluno(nome)    
}

// Aprovar Aluno
function aprovarAluno(nome){
    let aprovados = [];
for (let i in todosAlunos){      
    if ( todosAlunos[i].nome === nome){
    let media = todosAlunos[i].notas.reduce(somar, 0)/todosAlunos[i].notas.length
    function somar(t, n) {return t + n} 
    if (todosAlunos[i].faltas <= 3 && media > 7 && todosAlunos[i].cursos[0] !== undefined) {
        aprovados.push(todosAlunos[i].nome)
        console.log(`O aluno ${todosAlunos[i].nome} está aprovado!`)}}
}
if (aprovados.length == 0) {console.log("O aluno não cumpre os requisitos para ser aprovado.")}
buscarAluno(nome)
}
    aprovarAluno("Guilherme")

