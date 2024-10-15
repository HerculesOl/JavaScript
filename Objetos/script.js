let aluno = {
    nome: 'Chico',
    cidade: 'Conquista',
    olhos: ['preto', 'verde'],
    caracteristicas: {
    peso: 80,
    altura: 1.72
    },
    oi(){
    return 'Estuda no SENAI';
    }
    }
    let frase = `${aluno.nome} mora em ${aluno.cidade} tem olhos ${aluno.olhos[0]} com peso de ${aluno.caracteristicas.peso} kg e ${aluno.oi()}`
    document.write(frase)