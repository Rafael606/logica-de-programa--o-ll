let curso = {
    nomealuno: 'amanda',
    nomecurso: 'fullstack',
    valorCurso: 65,
    infoCurso: [["manha", "tarde", "noite"],
                ['ead', 'on-line', 'hibrido'],
                ['bolsa intregal', 'bolsa parcial']],

    cursoConcluido: [
        { nomeCurso: 'curso1', anoDeConclusao: '2019' },
        { nomeCurso: 'biologia', anoDeConclusao: '2020' },
        { nomeCurso: 'gestão', anoDeConclusao: '2021' },
        { nomeCurso: 'eletrica', anoDeConclusao: '2022' }
    ],

    historicoAluno: {
        ensinoMedio: 'concluido',
        ensinoSuperior: 'em andamento',
        hardSkills: 'diversos',
        idiomas: {
            ingles: 'medio',
            espanhol: 'basico',
            russo: 'avançado',
            frances: 'medio'
        }
    }
};

cursoProfissional.historicoAluno.idioma
['frances']= 'avançado';


curso.infoCurso[0][0] = 'matutino';
curso.infoCurso[0][1] = 'vespertino';
curso.infoCurso[0][2] = 'noturno';
curso.infoCurso.push('integral');

cursoProfissional.cursoConcluido[1][1].anoDeConclusao = '2028';
cursoProfissional. cursoConcluido.anoDeConclusao = '2028';

console.log(curso.cursoConcluido[3].anoDeConclusao);

