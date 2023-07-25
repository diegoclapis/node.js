import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s#.].[^\s*]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];

    const resultados = capturas.map(capturas => ({[capturas[1]]: [capturas[2]]}));
    return resultados.length !== 0 ? resultados : 'Não exites links no arquivo';
}

//Enviva erro caso não exista arquivo
function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'Não existe arquivo no diretório!'));
}

//Lendo arquivo
async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return extraiLinks(texto);
    } catch (erro) {
        trataErro(erro);
    }
}

export default pegaArquivo;