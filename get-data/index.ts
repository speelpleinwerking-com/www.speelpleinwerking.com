import { IPlayground } from '@speelpleinwerking.com/protobufs';
import { playgrounds } from '@speelpleinwerking.com/example-data';
import { writeFile } from 'fs';
import { promisify } from 'util';

const writeFilePromise = promisify(writeFile);

const getPlaygrounds = async (): Promise<ReadonlyArray<IPlayground>> => {
  return Promise.resolve(playgrounds);
};

const createMarkdownFile = (frontMatter: Object, content = '') => {
  return JSON.stringify(frontMatter) + '\n\n' + content;
};

getPlaygrounds().then(all => {
  return Promise.all(all.map(playground => {

    const frontMatter = {
      //"date": "2017-04-09T10:58:08-04:00",
      description: playground.details.name,
      organisatoren: playground.generalInformation.organizedBy ? [ playground.generalInformation.organizedBy ] : [],
      steden: ["Stad"], // TODO
      gemeentes: ["Gemeente"], // TODO
      postcodes: [ playground.details.zipCode.toString() ],
      title: playground.details.name,
      data: playground,
      summary: 'summary', // TODO
    };

    const path = `../content/speelplein/${playground.details.canonicalName}.md`;

    return writeFilePromise(path, createMarkdownFile(frontMatter));
    }));
}).then(_ => console.log('Success')).catch(err => {
  console.error(err);  
});



