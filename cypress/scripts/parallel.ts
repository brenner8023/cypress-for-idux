import cypress from 'cypress';
import cyConfig from '../cypress.config';
import glob from 'fast-glob';

async function main () {
  process.env.CY_PARALLEL = 'true';
  const runOptions = await cypress.cli.parseRunArguments(process.argv.slice(2));
  const isComponentTest = !!(runOptions as any).component;
  const specPattern = isComponentTest ? cyConfig.component?.specPattern : cyConfig.e2e?.specPattern;
  const specArr = await glob(specPattern!, {
    ignore: ['**/node_modules/**'],
  });

  const threads = runParallel(specArr, 4);
  console.info('分配完毕：', threads);

  const start = new Date();

  const runResults = await Promise.all(threads.map(async specs => {
    return cypress.run({
      ...runOptions,
      spec: specs.join(','),
    });
  }));

  const end = new Date();

  const duration = ((end.getTime() - start.getTime()) / 1000 / 60).toFixed(2);
  console.info('测试执行完毕，共耗时：', `${duration} 分`);
}

function runParallel (specArr: string[], threadCount: number) {
  const threads: string[][] = Array.from({ length: threadCount }).map(() => []);
  specArr.forEach((spec, index) => {
    threads[index % threadCount].push(spec);
  });
  return threads;
}

main();
