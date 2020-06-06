console.log('hello world')

const arvore = {}


function insert(tree, value) {
  if (tree.value) {
    if (value > tree.value) {
      insert(tree.right, value)
    } else {
      insert(tree.left, value)

    }

  } else {
    tree.value = value
    tree.right = {}
    tree.left = {}
  }
}

insert(arvore, 10)
insert(arvore, 9)
insert(arvore, 7)
insert(arvore, 8)
insert(arvore, 6)




insert(arvore, 12)
insert(arvore, 13)
insert(arvore, 15)
insert(arvore, 16)
insert(arvore, 17)
insert(arvore, 18)
















// console.log(arvore)

function search(tree, value) {
  if (!tree.value || tree.value === value) {
    return tree.value
    // "not found"
  }
  if (value < tree.value) {
    return search(tree.left, value)
  }
  return search(tree.right, value)

}



function preOrder(tree) {
  if (!tree.value) {
    return "not found"

  }
  console.log(tree.value)
  tree.left && preOrder(tree.left)
  tree.right && preOrder(tree.right)


}
// console.log('pre order **************************************')

// preOrder(arvore)



function inOrder(tree) {
  if (!tree.value) {
    return "not found"

  }
  tree.left && inOrder(tree.left)
  console.log(tree.value)

  tree.right && inOrder(tree.right)


}
// console.log('in order **************************************')
// inOrder(arvore)




function height(tree) {
  if (!tree.value) {
    return "not found"

  }
  hLeft = [],
    hRigth = []


  function hRigthfnc() {
    if (tree.right) {
      height(tree.right),
        hRigth++
    }

    if (hRigth > hLeft) {
      return hRigth - 1
    }
  }


  function hLeftfnc() {
    if (tree.left) {
      height(tree.left),
        hLeft++
    }

    if (hLeft > hRigth) {
      return hLeft - 1
    }
  }
  return " melhor percorrimento pela direita: " + hRigthfnc() + " melhor percorrimento pela esquerda: " + hLeftfnc()
  // if (hRigthfnc() > hLeftfnc()) {
  //   return hRigthfnc() + " Rota pela direita"
  // }
  // else {
  //   return hLeftfnc() + " Rota pela Esquerda"
  // }
}


// return hLeft + 1, console.log('..>', hLeft + 1)

console.log(`altura do Nó raíz: `, height(arvore))