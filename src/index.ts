//ts를 쓰는데 js를 쓰는 모듈일 때가 있는데 개발자들이 github의 DefinielyTyped에서 ts로 정의해놓음
//npm i -D @types/node (여기서 끝날수도 있음) -> npm i -D @types/원하는모듈명

//암호화를 해주는 모듈
import crypto from "crypto";

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  //static 함수 불러주기 : 클래스 인스턴스가 없어도 부를 수 있는 함수
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock);
  }
  public getBlocks() {
    //그냥 this.blocks;를 할 경우 외부에서 접근이 가능해지기 때문에 보안을 생각한다면 새로운 배열을 리턴한다.
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");
blockchain.addBlock("Fourth one");

console.log(blockchain.getBlocks());
