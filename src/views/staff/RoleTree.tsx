import React, { useState } from 'react'
import { Tree } from 'antd'

const { TreeNode } = Tree

const treeData = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0' },
      { title: '0-1-0-1', key: '0-1-0-1' },
      { title: '0-1-0-2', key: '0-1-0-2' },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
]

const RoleTree = () => {
  const [expandedKeys, setExpandedKeys] = useState<string[]>(['0-0-0', '0-0-1'])
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true)
  const [checkedKeys, setCheckedKeys] = useState<string[]>(['0-0-0'])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  const onExpand = (expandedKeys: string[]) => {
    console.log('onExpand', expandedKeys)
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    setExpandedKeys(expandedKeys)
    setAutoExpandParent(false)
  }

  const onCheck = (checkedKeys: any) => {
    console.log('onCheck', checkedKeys)
    setCheckedKeys(checkedKeys)
  }

  const onSelect = (selectedKeys: string[], info: any) => {
    console.log('onSelect', info)
    setSelectedKeys(selectedKeys)
  }

  const renderTreeNodes = (data: any) =>
    data.map((item: any) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {renderTreeNodes(item.children)}
          </TreeNode>
        )
      }
      return <TreeNode key={item.key} {...item} />
    })

  return (
    <Tree
      checkable
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
    >
      {renderTreeNodes(treeData)}
    </Tree>
  )
}

export default RoleTree
