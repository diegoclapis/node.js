#!/usr/bin/env node

import chalk from 'chalk';
import fs from 'fs';
import pegaArquivoAsyncAwait from '../index.js';
import listaValidada from '../src/http-validacao.js';

const caminho = process.argv;

async function imprimeLista(valida, resultado, identificador = '') {
    if (valida)
    {
        console.log(
            chalk.yellow('lista validada: '), 
            chalk.black.bgGreen(identificador),     
            await listaValidada(resultado))
    } else {
        console.log(
            chalk.yellow('lista de links: '), 
            chalk.black.bgGreen(identificador),     
            resultado)
    }
}

async function processaTexto (argumentos) {
    const caminho = argumentos[2];
    const valida = argumentos[3] === 'valida';

    try {
        fs.lstatSync(caminho);
    } catch (erro) {
        if (erro.code === 'ENOENT'){
            console.log('Arquivo ou diretório não existe.');
            return;
        }
        if (erro.code === 'ERR_INVALID_ARG_TYPE'){
            console.log('Passe o caminho do arquivo ou pasta.');
            return;
        }
    }

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivoAsyncAwait(caminho);
        imprimeLista(valida, resultado);
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivoAsyncAwait(`${caminho}/${nomeDeArquivo}`)
            imprimeLista(valida, lista, `${nomeDeArquivo}`);
        });
    }

}

processaTexto(caminho);