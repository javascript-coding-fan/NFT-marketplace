// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class ERC1155NFTCreated extends ethereum.Event {
  get params(): ERC1155NFTCreated__Params {
    return new ERC1155NFTCreated__Params(this);
  }
}

export class ERC1155NFTCreated__Params {
  _event: ERC1155NFTCreated;

  constructor(event: ERC1155NFTCreated) {
    this._event = event;
  }

  get tokenID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amountMinted(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get contractAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokenMetadataUri(): string {
    return this._event.parameters[3].value.toString();
  }

  get creator(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get publicAllowed(): boolean {
    return this._event.parameters[5].value.toBoolean();
  }
}

export class ERC1155NFTMinted extends ethereum.Event {
  get params(): ERC1155NFTMinted__Params {
    return new ERC1155NFTMinted__Params(this);
  }
}

export class ERC1155NFTMinted__Params {
  _event: ERC1155NFTMinted;

  constructor(event: ERC1155NFTMinted) {
    this._event = event;
  }

  get tokenID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amountMinted(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get contractAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokenMetadataUri(): string {
    return this._event.parameters[3].value.toString();
  }

  get creator(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class TransferBatch extends ethereum.Event {
  get params(): TransferBatch__Params {
    return new TransferBatch__Params(this);
  }
}

export class TransferBatch__Params {
  _event: TransferBatch;

  constructor(event: TransferBatch) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class TransferSingle extends ethereum.Event {
  get params(): TransferSingle__Params {
    return new TransferSingle__Params(this);
  }
}

export class TransferSingle__Params {
  _event: TransferSingle;

  constructor(event: TransferSingle) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class URI extends ethereum.Event {
  get params(): URI__Params {
    return new URI__Params(this);
  }
}

export class URI__Params {
  _event: URI;

  constructor(event: URI) {
    this._event = event;
  }

  get value(): string {
    return this._event.parameters[0].value.toString();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Erc1155Contract extends ethereum.SmartContract {
  static bind(address: Address): Erc1155Contract {
    return new Erc1155Contract("Erc1155Contract", address);
  }

  create(
    _type: i32,
    _initialOwner: Address,
    _initialSupply: BigInt,
    _data: Bytes
  ): BigInt {
    let result = super.call(
      "create",
      "create(uint8,address,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_type)),
        ethereum.Value.fromAddress(_initialOwner),
        ethereum.Value.fromUnsignedBigInt(_initialSupply),
        ethereum.Value.fromBytes(_data)
      ]
    );

    return result[0].toBigInt();
  }

  try_create(
    _type: i32,
    _initialOwner: Address,
    _initialSupply: BigInt,
    _data: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "create",
      "create(uint8,address,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_type)),
        ethereum.Value.fromAddress(_initialOwner),
        ethereum.Value.fromUnsignedBigInt(_initialSupply),
        ethereum.Value.fromBytes(_data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _gameTokenId(): BigInt {
    let result = super.call("_gameTokenId", "_gameTokenId():(uint256)", []);

    return result[0].toBigInt();
  }

  try__gameTokenId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_gameTokenId", "_gameTokenId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _goldTokenId(): BigInt {
    let result = super.call("_goldTokenId", "_goldTokenId():(uint256)", []);

    return result[0].toBigInt();
  }

  try__goldTokenId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("_goldTokenId", "_goldTokenId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _legendaryTokenId(): BigInt {
    let result = super.call(
      "_legendaryTokenId",
      "_legendaryTokenId():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__legendaryTokenId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_legendaryTokenId",
      "_legendaryTokenId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _platinumTokenId(): BigInt {
    let result = super.call(
      "_platinumTokenId",
      "_platinumTokenId():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try__platinumTokenId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_platinumTokenId",
      "_platinumTokenId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _silverTokenId(): BigInt {
    let result = super.call("_silverTokenId", "_silverTokenId():(uint256)", []);

    return result[0].toBigInt();
  }

  try__silverTokenId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_silverTokenId",
      "_silverTokenId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(account: Address, id: BigInt): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address, id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfBatch(accounts: Array<Address>, ids: Array<BigInt>): Array<BigInt> {
    let result = super.call(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_balanceOfBatch(
    accounts: Array<Address>,
    ids: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  baseUri(): string {
    let result = super.call("baseUri", "baseUri():(string)", []);

    return result[0].toString();
  }

  try_baseUri(): ethereum.CallResult<string> {
    let result = super.tryCall("baseUri", "baseUri():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  CREATOR_ROLE(): Bytes {
    let result = super.call("CREATOR_ROLE", "CREATOR_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_CREATOR_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("CREATOR_ROLE", "CREATOR_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  creators(param0: BigInt): Address {
    let result = super.call("creators", "creators(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_creators(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("creators", "creators(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  GAME_LIMIT(): BigInt {
    let result = super.call("GAME_LIMIT", "GAME_LIMIT():(uint256)", []);

    return result[0].toBigInt();
  }

  try_GAME_LIMIT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("GAME_LIMIT", "GAME_LIMIT():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  GOLD_LIMIT(): BigInt {
    let result = super.call("GOLD_LIMIT", "GOLD_LIMIT():(uint256)", []);

    return result[0].toBigInt();
  }

  try_GOLD_LIMIT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("GOLD_LIMIT", "GOLD_LIMIT():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isApprovedForAll(account: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    account: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  LEGENDARY_LIMIT(): BigInt {
    let result = super.call(
      "LEGENDARY_LIMIT",
      "LEGENDARY_LIMIT():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_LEGENDARY_LIMIT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "LEGENDARY_LIMIT",
      "LEGENDARY_LIMIT():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MINTER_ROLE(): Bytes {
    let result = super.call("MINTER_ROLE", "MINTER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_MINTER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("MINTER_ROLE", "MINTER_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  PLATINUM_LIMIT(): BigInt {
    let result = super.call("PLATINUM_LIMIT", "PLATINUM_LIMIT():(uint256)", []);

    return result[0].toBigInt();
  }

  try_PLATINUM_LIMIT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "PLATINUM_LIMIT",
      "PLATINUM_LIMIT():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  SILVER_LIMIT(): BigInt {
    let result = super.call("SILVER_LIMIT", "SILVER_LIMIT():(uint256)", []);

    return result[0].toBigInt();
  }

  try_SILVER_LIMIT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("SILVER_LIMIT", "SILVER_LIMIT():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  tokenSupply(param0: BigInt): BigInt {
    let result = super.call("tokenSupply", "tokenSupply(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_tokenSupply(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenSupply",
      "tokenSupply(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply(_id: BigInt): BigInt {
    let result = super.call("totalSupply", "totalSupply(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_id)
    ]);

    return result[0].toBigInt();
  }

  try_totalSupply(_id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalSupply",
      "totalSupply(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  uri(_id: BigInt): string {
    let result = super.call("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_id)
    ]);

    return result[0].toString();
  }

  try_uri(_id: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get value(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }
}

export class BurnBatchCall extends ethereum.Call {
  get inputs(): BurnBatchCall__Inputs {
    return new BurnBatchCall__Inputs(this);
  }

  get outputs(): BurnBatchCall__Outputs {
    return new BurnBatchCall__Outputs(this);
  }
}

export class BurnBatchCall__Inputs {
  _call: BurnBatchCall;

  constructor(call: BurnBatchCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class BurnBatchCall__Outputs {
  _call: BurnBatchCall;

  constructor(call: BurnBatchCall) {
    this._call = call;
  }
}

export class CreateCall extends ethereum.Call {
  get inputs(): CreateCall__Inputs {
    return new CreateCall__Inputs(this);
  }

  get outputs(): CreateCall__Outputs {
    return new CreateCall__Outputs(this);
  }
}

export class CreateCall__Inputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get _type(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get _initialOwner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _initialSupply(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class CreateCall__Outputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class MintBatchCall extends ethereum.Call {
  get inputs(): MintBatchCall__Inputs {
    return new MintBatchCall__Inputs(this);
  }

  get outputs(): MintBatchCall__Outputs {
    return new MintBatchCall__Outputs(this);
  }
}

export class MintBatchCall__Inputs {
  _call: MintBatchCall;

  constructor(call: MintBatchCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class MintBatchCall__Outputs {
  _call: MintBatchCall;

  constructor(call: MintBatchCall) {
    this._call = call;
  }
}

export class PublicMintCall extends ethereum.Call {
  get inputs(): PublicMintCall__Inputs {
    return new PublicMintCall__Inputs(this);
  }

  get outputs(): PublicMintCall__Outputs {
    return new PublicMintCall__Outputs(this);
  }
}

export class PublicMintCall__Inputs {
  _call: PublicMintCall;

  constructor(call: PublicMintCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class PublicMintCall__Outputs {
  _call: PublicMintCall;

  constructor(call: PublicMintCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class SafeBatchTransferFromCall extends ethereum.Call {
  get inputs(): SafeBatchTransferFromCall__Inputs {
    return new SafeBatchTransferFromCall__Inputs(this);
  }

  get outputs(): SafeBatchTransferFromCall__Outputs {
    return new SafeBatchTransferFromCall__Outputs(this);
  }
}

export class SafeBatchTransferFromCall__Inputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeBatchTransferFromCall__Outputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetCreatorCall extends ethereum.Call {
  get inputs(): SetCreatorCall__Inputs {
    return new SetCreatorCall__Inputs(this);
  }

  get outputs(): SetCreatorCall__Outputs {
    return new SetCreatorCall__Outputs(this);
  }
}

export class SetCreatorCall__Inputs {
  _call: SetCreatorCall;

  constructor(call: SetCreatorCall) {
    this._call = call;
  }

  get _to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _ids(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class SetCreatorCall__Outputs {
  _call: SetCreatorCall;

  constructor(call: SetCreatorCall) {
    this._call = call;
  }
}

export class SetURICall extends ethereum.Call {
  get inputs(): SetURICall__Inputs {
    return new SetURICall__Inputs(this);
  }

  get outputs(): SetURICall__Outputs {
    return new SetURICall__Outputs(this);
  }
}

export class SetURICall__Inputs {
  _call: SetURICall;

  constructor(call: SetURICall) {
    this._call = call;
  }

  get newUri(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetURICall__Outputs {
  _call: SetURICall;

  constructor(call: SetURICall) {
    this._call = call;
  }
}
