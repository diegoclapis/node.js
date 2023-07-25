import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s#.].[^\s*]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    //console.log(capturas);

    const resultados = capturas.map(capturas => ({[capturas[1]]: [capturas[2]]}));
    return resultados.length !== 0 ? resultados : 'Não exites links no arquivo';
    //console.log(resultados);

}

function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'Não existe arquivo no diretório!'));
}

//Lendo arquivo async/await
async function pegaArquivoAsyncAwait(caminhoDoArquivo) {
    //console.log(chalk.yellow('Operação iniciada'));
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return extraiLinks(texto);
    } catch (erro) {
        trataErro(erro);
    } finally {
        //console.log(chalk.yellow('Operação concluída'));
    }
}

//Lendo arquivo promises com then()
function pegaArquivoPromisesThen(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.promises
        .readFile(caminhoDoArquivo, encoding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch(trataErro)
}

//Lendo arquivo metodo simples com retorno callback dento do readfile
function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro) {
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    })
}


export default pegaArquivoAsyncAwait;

//pegaArquivoAsyncAwait('./arquivos/texto.md');

//Expressão regular para pegar todas textos entre []
// \[[^[\]]*?\]

//Expressão regular para pegar todos link https ou http
// \(https?:\/\/[^\s#.].[^\s*]*\)

//Expressão regular para pegar todos os texto [] e link https ou http e separar em grupos
// \[([^[\]]*?)\]\((https?:\/\/[^\s#.].[^\s*]*)\)