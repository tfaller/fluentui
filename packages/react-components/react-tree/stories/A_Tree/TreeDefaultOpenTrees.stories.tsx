import * as React from 'react';
import { Tree, TreeItem, TreeItemLayout } from '@fluentui/react-tree';
import story from './TreeDefaultOpenTrees.md';

export const DefaultOpenTrees = () => {
  const defaultOpenTrees = ['default-subtree-1', 'default-subtree-2', 'default-subtree-2-1'];

  return (
    <Tree aria-label="Tree" defaultOpenItems={defaultOpenTrees}>
      <TreeItem itemType="branch" value="default-subtree-1">
        <TreeItemLayout>level 1, item 1</TreeItemLayout>
        <Tree>
          <TreeItem itemType="leaf">
            <TreeItemLayout>level 2, item 1</TreeItemLayout>
          </TreeItem>
          <TreeItem itemType="leaf">
            <TreeItemLayout>level 2, item 2</TreeItemLayout>
          </TreeItem>
          <TreeItem itemType="leaf">
            <TreeItemLayout>level 2, item 3</TreeItemLayout>
          </TreeItem>
        </Tree>
      </TreeItem>
      <TreeItem itemType="branch" value="default-subtree-2">
        <TreeItemLayout>level 1, item 2</TreeItemLayout>
        <Tree>
          <TreeItem itemType="branch" value="default-subtree-2-1">
            <TreeItemLayout>level 2, item 1</TreeItemLayout>
            <Tree>
              <TreeItem itemType="leaf">
                <TreeItemLayout>level 3, item 1</TreeItemLayout>
              </TreeItem>
              <TreeItem itemType="leaf">
                <TreeItemLayout>level 3, item 2</TreeItemLayout>
              </TreeItem>
              <TreeItem itemType="leaf">
                <TreeItemLayout>level 3, item 3</TreeItemLayout>
              </TreeItem>
            </Tree>
          </TreeItem>
        </Tree>
      </TreeItem>
    </Tree>
  );
};

DefaultOpenTrees.parameters = {
  docs: {
    description: {
      story,
    },
  },
};
