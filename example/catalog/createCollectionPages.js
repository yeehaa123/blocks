import { pageLoader } from "catalog";

export default ({ name: collectionName, blocks }) => {
  const pageNames = Object.keys(blocks);
  return pageNames.map(blockName => ({
    imports: { ...blocks },
    path: `/${collectionName}/${blockName}`,
    title: `${blockName}`,
    content: pageLoader(() =>
      import(`./docs/${collectionName}/${blockName}.md`)
    )
  }));
};
