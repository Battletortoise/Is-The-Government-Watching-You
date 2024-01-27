//javastuff
var HashTable = function (limit) {
  this._limit = limit || 8;
  this._storage = LimitedArray(this._limit);
};
//HashTable.prototype.functions
//getIndexBelowMaxForKey
HashTable.prototype.insert = function (k, v) {
  var index =getIndexBelowMaxForKey(key);
  var foundArray = this._storage.get(index);//gets array at storage[index]
  //if foundArray is undefined
  if (!foundArray) {
    this._storage.set(index, []);
    this._storage.get(index).push([k, v])
  } else {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index)[i][1] = v;
        return;
      }
    }
    this._storage.get(index).push([k, v])
  }
};

HashTable.prototype.remove = function (key) {
  var index = getIndexBelowMaxForKey(key);
  var deletionIndex = 0;
  if (Array.isArray(this._storage.get(index))) {
    for (var i = 0; i < this._storage.get(index); i ++) {
      if (this._storage.get(index)[i][0] === key) {
        deletionIndex = i;
      }
    }
    var leftHalf = this._storage.get(index).slice(0, deletionIndex);
    var rightHalf = this._storage.get(index).slice(deletionIndex+1);
    this._storage.get(index) = leftHalf.concat(rightHalf);
  }
}

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key);
  for (var i = 0; i < this._storage.get(index); i ++) {
    if (this._storage.get(index)[i][0] === key) {
      return this._storage.get(index)[i][1];
    }
  }
  return false;
};