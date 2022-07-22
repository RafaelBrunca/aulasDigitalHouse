const db = require("./database/models");
const { QueryTypes } = require('sequelize');
const { sequelize } = require("./database/models");
const Query = require("mysql2/typings/mysql/lib/protocol/sequences/Query");

async function main(){
    const alunos = await db.Aluno.findAll();
    alunos.map((aluno) => {
        console.log(aluno.dataValues);
    })

    const alunos2019 = await db.Aluno.findAll({ where: { ano_matricula: "2019" } });
    alunos2019.map((aluno) => {
        console.log(aluno.dataValues);
    });
        //1.
    db.Aluno.create({
        nome: "Aluno1",
        sobrenome: "de Teste",
        ano_matricula: 2019
    }).then(() => {
        console.log("Aluno criado com sucesso!");
    }).catch(() => {
        console.log("Erro na criação do aluno");
    });

    db.Aluno.create({
        nome: "Aluno2",
        sobrenome: "de Teste 2",
        ano_matricula: 2019
    }).then(() => {
        console.log("Aluno criado com sucesso!");
    }).catch(() => {
        console.log("Erro na criação do aluno");
    });

    db.Aluno.create({
        nome: "Aluno3",
        sobrenome: "de Teste 3",
        ano_matricula: 2019
    }).then(() => {
        console.log("Aluno criado com sucesso!");
    }).catch(() => {
        console.log("Erro na criação do aluno");
    });

        //2.
    db.Aluno.update({
        nome: "Alteração"
    },{
        where: {id : 4}
    }).then(() => {
        console.log("Aluno alterado com sucesso!");
    }).catch(() => {
        console.log("Erro na alteração do aluno");
    });

        //3.
    await db.Curso.create({
        nome: "Programação Java",
        area_id: 1
    });
    await db.Curso.create({
        nome: "Programação Pyton",
        area_id: 1
    });
    await db.Curso.create({
        nome: "Programação C++",
        area_id: 1
    });

        //4.
    await db.Aluno.destroy({
        where: {id: "12"}
    });

        //5.
    await db.Turma.create({
        duracao: 5,
        ano_inicio: 2019,
        semestre: 2,
        curso_id: 4,
        professor_id: 15
    });

    db.Turma.create({
        duracao: 5,
        ano_inicio: 2019,
        semestre: 2,
        curso_id: 4,
        professor_id: 15
    })

    db.Turma.create({
        duracao: 5,
        ano_inicio: 2019,
        semestre: 2,
        curso_id: 4,
        professor_id: 15
    })

    db.Turma.create({
        duracao: 5,
        ano_inicio: 2019,
        semestre: 2,
        curso_id: 4,
        professor_id: 15
    })


    db.Turma.create({
        duracao: 5,
        ano_inicio: 2019,
        semestre: 2,
        curso_id: 4,
        professor_id: 15
    })


    const professor = await db.Professor.findByPk(15, {
        include: [
            {assosiation: 'turmas'}
        ]
    });
    professor.turmas.forEach((turma) => {
        console.log(turma.dataValues);
    });


    const turmas = await db.Turma.findByPk(15, {
        include: [
            {assosiation: 'professor'}
        ]
    });
    console.log(turmas.dataValues.professor.dataValues);


    const turma = await db.Turma.findByPk(15, {
        include: [
            {assosiation: 'alunos'}
        ]
    });
    console.log(turma);


    async function main(){
        const exercicio1a = await sequelize.query(
            "SELECT * FROM alunos WHERE nome LIKE ?",
            {
                replacements: ['%e%'],
                type: QueryTypes.Select
            }
        );

        const exercicio1b = await sequelize.query(
            "SELECT * FROM alunos WHERE nome LIKE ?",
            {
                replacements: ['%tr%'],
                type: QueryTypes.Select
            }
        );

        const exercicio1c = await sequelize.query(
            "SELECT * FROM alunos WHERE ano_matricula = ?",
            {
                replacements: ['2019'],
                type: QueryTypes.Select
            }
        );

        const exercicio1d = await sequelize.query(
            "SELECT * FROM INNER JOIN alunos_has_turmas ON alunos.id = alunos_has_turmas.aluno_id WHERE numero_faltas > ?",
            {
                replacements: [6],
                type: QueryTypes.Select
            }
        );

        const exercicio2 = await sequelize.query(
            'SELECT * FROM cursos INNER JOIN areas ON cursos.area_id = areas.id WHERE areas.tipo = $1',
            {
                bind: [ 'programação' ],
                type: QueryTypes.SELECT
            }
        );

        const exercicio3a = await sequelize.query(
            'SELECT * FROM turmas ON cursos.id = turmas.curso_id WHERE cursos.nome = $1',
            {
                bind: ['Marketing Digital'],
                type: QueryTypes.SELECT
            }
        );

        const exercicio3b = await sequelize.query(
            'SELECT * FROM turmas INNER JOIN alunos_has_turmas ON turmas.id = alunos_has_turmas.turma_id HAVING COUNT(*) < ?',
            {
                replacements: ['5'],
                type: QueryTypes.SELECT
            }
        );

        const exercicio3c = await sequelize.query(
            'SELECT * FROM turmas WHERE ano_inicio = ? AND semestre = ?',
            {
                bind: ['2020', '1'],
                type: QueryTypes.SELECT
            }
        )

        console.log( "1A", exercicio1a);
        console.log("1B", exercicio1b);
        console.log("1C", exercicio1c);
        console.log("1D", exercicio1d);
        console.log("2", exercicio2);
        console.log("3A", exercicio3a);
        console.log("3B", exercicio3b);
        console.log("3C", exercicio3c);
    };
};
main();