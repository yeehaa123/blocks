import { pageLoader } from "catalog";

export default ({ name: collectionName, blocks, helpers }) => {
  const pageNames = Object.keys(blocks);
  return pageNames.map(blockName => ({
    imports: { ...blocks, ...helpers },
    path: `/${collectionName}/${blockName}`,
    title: `${blockName}`,
    content: pageLoader(() =>
      import(`./docs/${collectionName}/${blockName}.md`)
    )
  }));
};
