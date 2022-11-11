export const generateRandomBoard = (boardSize) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  var randomBoard = [];
  for (var i = 0; i < boardSize; i++) {
    randomBoard.push([]);
  }

  for (var i = 0; i < boardSize; i++) {
    for (var j = 0; j < boardSize; j++) {
      randomBoard[i][j] = letters.charAt(
        Math.floor(Math.random() * letters.length)
      );
    }
  }

  return randomBoard;
};

export const generatePossibleWords = (board, words) => {
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  let res = [];

  const buildTrie = () => {
    const root = {};
    for (const w of words) {
      let node = root;
      for (const c of w) {
        if (node[c] == null) node[c] = {};
        node = node[c];
      }
      node.word = w;
    }
    return root;
  };

  const search = (node, x, y) => {
    if (node.word != null) {
      res.push(node.word);
      node.word = null; // make sure only print one time for each word
    }

    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) return;
    if (node[board[x][y]] == null) return;

    const c = board[x][y];
    board[x][y] = '#'; // Mark visited
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      search(node[c], i, j);
    }
    board[x][y] = c; // Reset
  };

  const root = buildTrie();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      search(root, i, j);
    }
  }
  
  var finalResult = []

  for (let i = 0; i < res.length; i++) {
    if (res[i].length > 2) {
      finalResult.push(res[i])
    }
  }
  return finalResult;
};