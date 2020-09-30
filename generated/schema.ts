// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class GETHTransfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save GETHTransfer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save GETHTransfer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("GETHTransfer", id.toString(), this);
  }

  static load(id: string): GETHTransfer | null {
    return store.get("GETHTransfer", id) as GETHTransfer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class Balance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Balance entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Balance entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Balance", id.toString(), this);
  }

  static load(id: string): Balance | null {
    return store.get("Balance", id) as Balance | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class GringottsSummary extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save GringottsSummary entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save GringottsSummary entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("GringottsSummary", id.toString(), this);
  }

  static load(id: string): GringottsSummary | null {
    return store.get("GringottsSummary", id) as GringottsSummary | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get gETHSupply(): BigInt {
    let value = this.get("gETHSupply");
    return value.toBigInt();
  }

  set gETHSupply(value: BigInt) {
    this.set("gETHSupply", Value.fromBigInt(value));
  }

  get totalETH(): BigInt {
    let value = this.get("totalETH");
    return value.toBigInt();
  }

  set totalETH(value: BigInt) {
    this.set("totalETH", Value.fromBigInt(value));
  }
}

export class Position extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Position entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Position entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Position", id.toString(), this);
  }

  static load(id: string): Position | null {
    return store.get("Position", id) as Position | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get goblin(): Bytes {
    let value = this.get("goblin");
    return value.toBytes();
  }

  set goblin(value: Bytes) {
    this.set("goblin", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get debtShare(): BigInt {
    let value = this.get("debtShare");
    return value.toBigInt();
  }

  set debtShare(value: BigInt) {
    this.set("debtShare", Value.fromBigInt(value));
  }
}