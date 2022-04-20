class HashTable {
    // 같은 구조의 객체를 여러 개 만들기 위해 생성자 함수 사용
    constructor(size) {
        this.table = new Array(size);
    }
    // 각각의 value에 대해 해시값 리턴 -> 인덱스가 됨
    hashFunction(value) {
        let hash = 0;
        for (let i = 0; i < value.length; i++) {
            hash = (hash + value.charCodeAt(i) * i) % this.table.length;
        }
        return hash;
    }

    // 해시 값을 이용하여 알맞은 인덱스에 값 저장
    set(key, value) {
        let memoryLocation = this.hashFunction(key);
        if (!this.table[memoryLocation]) {
            this.table[memoryLocation] = [];
        }
        this.table[memoryLocation].push([key, value]);
        return this.table;
    }

    // 해시 값을 이용하여 그 인덱스에 저장된 값 리턴
    getItems(key) {
        let memoryLocation = this.hashFunction(key);
        if (!this.table[memoryLocation]) return null;
        return this.table[memoryLocation].find((x) => x[0] === key)[1];
    }
}

const hashTable = new HashTable(4);
hashTable.set('Victor', 24);
console.log(hashTable.table);
console.log(hashTable.getItems('Victor'));