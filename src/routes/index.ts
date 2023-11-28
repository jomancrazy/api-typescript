import { Router } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTES = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift();
    return file;
}

readdirSync(PATH_ROUTES).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
if (cleanName !== 'index') {
    import(`./${cleanName}`)
        .then((moduleRouter) => {
            console.log(`Se esta cargando la ruta.... ${cleanName}`);
            if (moduleRouter && moduleRouter.router) {
                router.use(`/${cleanName}`, moduleRouter.router);
            } else {
                console.error(`El módulo ${cleanName} no exporta un router`);
            }
        })
        .catch((error) => {
            console.error(`Error al importar el módulo ${cleanName}:`, error);
        });
}
}) 

export { router };