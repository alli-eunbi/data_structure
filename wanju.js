class WanjuHash {
  constructor(size) {
    this.storage = {};
    this.size = size;
  }

  insert = (key) => {
    const index = this.hash(key);
    if (!this.storage[index]) {
      this.storage[index] = [key];
      return;
    }
    this.storage[index].push(key);
    return;
  };

  find(key) {
    const index = this.hash(key);
    // always false
    if (!this.storage[index]) {
      return false;
    }
    if (this.storage[index].includes(key)) {
      this.delete(key);
      return true;
    } else {
      return false;
    }
  }

  delete(key) {
    const index = this.hash(key);
    return this.storage[index].pop();
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash;
  }

  get() {
    return this.storage;
  }
}

function solution2(participant, completion) {
  const completes = new WanjuHash(completion.length);
  var answer = "";
  completion.map((name) => {
    completes.insert(name);
  });

  participant.map((n) => {
    if (completes.find(n) == false) {
      answer = n;
    }
  });
  return answer;
}

// console.log(solution2(["leo", "kiki", "eden"], ["eden", "kiki"]));

function solution(participant, completion) {
  var completers = new Map();

  let num = 0;
  participant.map((name) => {
    let num = 0;
    completers.set(name, num++);
  });

  //   completion.map((name) => {
  //     completers.set(name, ());
  //   });

  return completers;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
