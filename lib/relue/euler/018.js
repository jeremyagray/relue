// function rowAverages(triangle)
// {
//   let avgs = [];
//   for (let i = 0; i < triangle.length; i++)
//   {
//     let sum = 0;
//     let count = 0;
//     for (let j = 0; j < triangle[i].length; j++)
//     {
//       if (triangle[i][j] != 0)
//       {
//         sum += triangle[i][j];
//         count++;
//       }
//     }
//     avgs.push(sum / count);
//   }

//   return avgs;
// }

// function estimateGainRemaining(index, rowAverages)
// {
//   let gain = 0;
//   for (let i = index + 1; i < rowAverages.length; i++)
//   {
//     gain += rowAverages[i];
//   }
//   return gain;
// }

// function pathfinder(triangle)
// {
//   const avgs = rowAverages(triangle);
//   let paths = {};

//   // First level.
//   paths = { triangle[0][0].toString(): triangle[0][0]}

//   // Succeding levels.
  
// }
// function maximumPathSumI(triangle)
// {
//   return true;
// }

class Node
{
  constructor(value, left = null, right = null)
  {
    // Value of the node.
    this.value = value;
    // Children.
    this.left = left;
    this.right = right;
  }
}

class BTree
{
  constructor()
  {
    this.root = null;
  }

  add(value)
  {
    const node = this.root;

    if (node === null)
    {
      this.root = new Node(value);
      return;
    }
    else
    {
      const searchTree = (node) =>
            {
              // Search lesser tree.
              if (value < node.value)
              {
                if (node.left === null)
                {
                  node.left = new Node(value);
                  return;
                }
                else if (node.left !== null)
                {
                  return searchTree(node.left);
                }
              }
              // Search greater tree.
              else if (value > node.value)
              {
                if (node.right === null)
                {
                  node.right = new Node(value);
                  return;
                }
                else if (node.right !== null)
                {
                  return searchTree(node.right);
                }
              }
              // Equal to current node.
              else
              {
                return null;
              }
            };
      return searchTree(node);
    }
  }

  max()
  {
    let current = this.root;
    while (current.right !== null)
    {
      current = current.right;
    }

    return current.value;
  }

  min()
  {
    let current = this.root;
    while (current.left !== null)
    {
      current = current.left;
    }

    return current.value;
  }

  find(value)
  {
    let current = this.root;

    while (value != current.value)
    {
      // Keep searching greater side.
      if (value > current.value)
      {
        current = current.right;
      }
      // Keep searching lesser side.
      else if (value < current.value)
      {
        current = current.left;
      }
      // No match.
      else
      {
        return null;
      }
    }

    return current;
  }

  isPresent(value)
  {
    let current = this.root;

    while (current)
    {
      if (value === current.value)
      {
        return true;
      }
      else if (value < current.value)
      {
        current = current.left;
      }
      else if (value > current.value)
      {
        current = current.right;
      }
    }

    return false;
  }

  remove(value)
  {
    const removeNode = (node, value) =>
          {
            // Node does not exist (empty tree).
            if (node === null)
            {
              return null;
            }
            // Node matches value.  Fix the tree.
            else if (node.data == value)
            {
              // No children.  Tree stops.
              if (node.left === null
                  && node.right === null)
              {
                return null;
              }
              // No right child.  Move left up one level.
              else if (node.right === null)
              {
                console.log('no right');
                return node.left;
              }
              // No left child.  Move right up one level.
              else if (node.left === null)
              {
                console.log('no left');
                return node.right;
              }
              // Both children.  Reorder the tree.
              else
              {
                // Get the smallest larger value to replace the
                // removed node.
                let tmp = node.right;

                while (tmp.left !== null)
                {
                  tmp = tmp.left;
                }

                // Copy the value to the node being replaced.
                node.value = tmp.value;

                // Remove the node from the greater side that was moved.
                node.right = removeNode(node.right, tmp.value);
                return node;
              }
            }
            // Search the left side for the matching node.
            else if (value < node.value)
            {
              // Remove the node from the lesser side.
              node.left = removeNode(node.left, value);
              return node;
            }
            // Search the right side.
            else if (value > node.value)
            {
              node.right = removeNode(node.right, value);
              return node;
            }
          }

    this.root = removeNode(this.root, value);
  }
}

function maxPathBrute(triangle)
{
  // Find max from triangle[0][0] to triangle[n][m].
}

function maxPath(triangle)
{
  // Dijkstra?
  // Find max from triangle[0][0] to triangle[n][m].
}

const testTriangle = [[3, 0, 0, 0],
                      [7, 4, 0, 0],
                      [2, 4, 6, 0],
                      [8, 5, 9, 3]];

// maximumPathSumI(testTriangle);
// console.log(rowAverages(testTriangle));

const bst = new BTree();
bst.add(1);
bst.add(2);
bst.add(3);
bst.add(4);
console.log(bst.max());
console.log(bst.min());
console.log(bst.isPresent(5));
console.log(bst.isPresent(4));
console.log(bst.remove(4));
console.log(bst.min());
console.log(bst.max());
console.log(bst.isPresent(4));
