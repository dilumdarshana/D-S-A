// Trie (Prefix Tree) — tree structure for efficient string prefix operations.

class TrieNode {
  children: Map<string, TrieNode> = new Map();
  isEnd = false;
}

class Trie {
  private root = new TrieNode();

  insert(word: string): void {
    let node = this.root;
    for (const ch of word) {
      if (!node.children.has(ch)) node.children.set(ch, new TrieNode());
      node = node.children.get(ch)!;
    }
    node.isEnd = true;
  }

  search(word: string): boolean {
    const node = this._traverse(word);
    return node !== null && node.isEnd;
  }

  startsWith(prefix: string): boolean {
    return this._traverse(prefix) !== null;
  }

  private _traverse(s: string): TrieNode | null {
    let node: TrieNode | null = this.root;
    for (const ch of s) {
      if (!node) return null;
      node = node.children.get(ch) ?? null;
    }
    return node;
  }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("app");

console.log(trie.search("apple"));   // true
console.log(trie.search("app"));     // true
console.log(trie.search("appl"));    // false
console.log(trie.startsWith("ap"));  // true
console.log(trie.startsWith("cra")); // false
