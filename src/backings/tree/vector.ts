import {Node, TreeBacking, subtreeFillToLength, zeroNode} from "@chainsafe/merkle-tree";

import {BasicVectorType, CompositeVectorType} from "../../types";
import {BasicArrayTreeHandler, CompositeArrayTreeHandler} from "./array";

export class BasicVectorTreeHandler<T extends ArrayLike<any>> extends BasicArrayTreeHandler<T> {
  _type: BasicVectorType<T>;
  _defaultNode: Node;
  defaultNode(): Node {
    if (!this._defaultNode) {
      this._defaultNode = subtreeFillToLength(
        zeroNode(0),
        this.depth(),
        this._type.chunkCount()
      );
    }
    return this._defaultNode;
  }
  getLength(target: TreeBacking): number {
    return this._type.length;
  }
}
export class CompositeVectorTreeHandler<T extends ArrayLike<any>> extends CompositeArrayTreeHandler<T> {
  _type: CompositeVectorType<T>;
  _defaultNode: Node;
  defaultNode(): Node {
    if (!this._defaultNode) {
      this._defaultNode = subtreeFillToLength(
        this._type.elementType.tree.defaultNode(),
        this.depth(),
        this._type.length
      );
    }
    return this._defaultNode;
  }
  getLength(target: TreeBacking): number {
    return this._type.length;
  }
}
