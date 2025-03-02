import { Tree, formatFiles, generateFiles, readWorkspaceConfiguration, joinPathFragments } from '@nrwl/devkit';
import { RecipeGeneratorGeneratorSchema } from './schema';
import { getProjectConfig } from '../../utils';

export default async function (tree: Tree, schema: RecipeGeneratorGeneratorSchema) {
  const validatedSchema = validateSchema(tree, schema);

  const { recipesRoot, ...normalizedOptions } = normalizeOptions(tree, validatedSchema);

  generateFiles(tree, joinPathFragments(__dirname, 'files'), recipesRoot, normalizedOptions);

  await formatFiles(tree);
}

function normalizeOptions(tree: Tree, schema: RecipeGeneratorGeneratorSchema) {
  const workspaceConfig = readWorkspaceConfiguration(tree);
  const recipesProject = getProjectConfig(tree, {
    packageName: `@${workspaceConfig.npmScope}/recipes-react-components`,
  });

  const recipesRoot = joinPathFragments(recipesProject.paths.sourceRoot, 'recipes');

  const fileName = schema.recipeName.replace(' ', '');
  const packageName = schema.recipeName.toLowerCase().replace(' ', '-');

  if (tree.exists(joinPathFragments(recipesRoot, packageName))) {
    throw new Error(`The recipe ${schema.recipeName} already exists`);
  }

  return { ...schema, fileName, packageName, recipesRoot, tmpl: '' };
}

function validateSchema(tree: Tree, schema: RecipeGeneratorGeneratorSchema) {
  const newSchema = { ...schema };

  if (!newSchema.recipeName) {
    throw new Error(`Recipe name is required`);
  }

  if (
    !newSchema.recipeName.match(/^[A-Z][a-z]+$/) &&
    !newSchema.recipeName.match(/^([A-Z][a-z]+)([\ ][A-Z][a-z]+)+$/m)
  ) {
    throw new Error(`Must enter a Capitalized per word recipe name (ex: My Recipe Name)`);
  }

  return newSchema;
}
