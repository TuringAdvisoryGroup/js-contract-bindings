/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface MembershipsImplInterface extends ethers.utils.Interface {
  functions: {
    "_computeReleasableAmount(bytes32)": FunctionFragment;
    "buy(address,address,bytes32,uint256)": FunctionFragment;
    "claim(address,bytes32)": FunctionFragment;
    "claimReferral(address,bytes32)": FunctionFragment;
    "claimRoll(address,address,bytes32)": FunctionFragment;
    "claimUnsoldTokens(address,bytes32)": FunctionFragment;
    "createMintingScheduleValidation((uint256,uint256,bytes32,uint256,address[],uint256[],uint256,(address,uint8),uint256,address,uint256))": FunctionFragment;
    "getReferral(bytes32)": FunctionFragment;
    "getSchedule(bytes32)": FunctionFragment;
    "revoke(bytes32)": FunctionFragment;
    "setAllowlist(bytes32,bytes32)": FunctionFragment;
    "setEternalStorage(address)": FunctionFragment;
    "setReferral(bytes32,(address,uint256))": FunctionFragment;
    "setSchedule(bytes32,(bool,bool,address,uint256,uint256,bytes32,uint256,uint256,address[],uint256[],(address,uint8),uint256,uint256))": FunctionFragment;
    "transferScheduleOwner(bytes32,address)": FunctionFragment;
    "updateReferral(bytes32,address)": FunctionFragment;
    "verifyMerkle(address,bytes32,bytes32[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_computeReleasableAmount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "buy",
    values: [string, string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claimReferral",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRoll",
    values: [string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claimUnsoldTokens",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createMintingScheduleValidation",
    values: [
      {
        start: BigNumberish;
        duration: BigNumberish;
        merkleRoot: BytesLike;
        amountTotal: BigNumberish;
        lotToken: string[];
        lotSize: BigNumberish[];
        pricePerLot: BigNumberish;
        paymentAsset: { token: string; assetType: BigNumberish };
        rollFee: BigNumberish;
        referral: string;
        referralFee: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getReferral",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSchedule",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "revoke", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "setAllowlist",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setEternalStorage",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setReferral",
    values: [BytesLike, { referral: string; referralFee: BigNumberish }]
  ): string;
  encodeFunctionData(
    functionFragment: "setSchedule",
    values: [
      BytesLike,
      {
        initialized: boolean;
        revoked: boolean;
        owner: string;
        start: BigNumberish;
        duration: BigNumberish;
        merkleRoot: BytesLike;
        amountTotal: BigNumberish;
        released: BigNumberish;
        lotToken: string[];
        lotSize: BigNumberish[];
        paymentAsset: { token: string; assetType: BigNumberish };
        pricePerLot: BigNumberish;
        rollFee: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferScheduleOwner",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateReferral",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyMerkle",
    values: [string, BytesLike, BytesLike[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "_computeReleasableAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimReferral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimRoll", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimUnsoldTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createMintingScheduleValidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReferral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSchedule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revoke", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAllowlist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEternalStorage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReferral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSchedule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferScheduleOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateReferral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyMerkle",
    data: BytesLike
  ): Result;

  events: {
    "EventClaim(address,bytes32,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EventClaim"): EventFragment;
}

export type EventClaimEvent = TypedEvent<
  [string, string, BigNumber] & {
    from: string;
    scheduleId: string;
    value: BigNumber;
  }
>;

export class MembershipsImpl extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MembershipsImplInterface;

  functions: {
    _computeReleasableAmount(
      scheduleId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    buy(
      memberships: string,
      caller: string,
      scheduleId: BytesLike,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claim(
      memberships: string,
      scheduleId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimReferral(
      memberships: string,
      scheduleId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimRoll(
      memberships: string,
      wallet: string,
      scheduleId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimUnsoldTokens(
      memberships: string,
      scheduleId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createMintingScheduleValidation(
      params: {
        start: BigNumberish;
        duration: BigNumberish;
        merkleRoot: BytesLike;
        amountTotal: BigNumberish;
        lotToken: string[];
        lotSize: BigNumberish[];
        pricePerLot: BigNumberish;
        paymentAsset: { token: string; assetType: BigNumberish };
        rollFee: BigNumberish;
        referral: string;
        referralFee: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<[void]>;

    getReferral(
      record: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [[string, BigNumber] & { referral: string; referralFee: BigNumber }]
    >;

    getSchedule(
      record: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          boolean,
          boolean,
          string,
          BigNumber,
          BigNumber,
          string,
          BigNumber,
          BigNumber,
          string[],
          BigNumber[],
          [string, number] & { token: string; assetType: number },
          BigNumber,
          BigNumber
        ] & {
          initialized: boolean;
          revoked: boolean;
          owner: string;
          start: BigNumber;
          duration: BigNumber;
          merkleRoot: string;
          amountTotal: BigNumber;
          released: BigNumber;
          lotToken: string[];
          lotSize: BigNumber[];
          paymentAsset: [string, number] & { token: string; assetType: number };
          pricePerLot: BigNumber;
          rollFee: BigNumber;
        }
      ]
    >;

    revoke(
      scheduleId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAllowlist(
      scheduleId: BytesLike,
      root: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setEternalStorage(
      _eternalStorage: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReferral(
      record: BytesLike,
      value: { referral: string; referralFee: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSchedule(
      record: BytesLike,
      value: {
        initialized: boolean;
        revoked: boolean;
        owner: string;
        start: BigNumberish;
        duration: BigNumberish;
        merkleRoot: BytesLike;
        amountTotal: BigNumberish;
        released: BigNumberish;
        lotToken: string[];
        lotSize: BigNumberish[];
        paymentAsset: { token: string; assetType: BigNumberish };
        pricePerLot: BigNumberish;
        rollFee: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferScheduleOwner(
      scheduleId: BytesLike,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateReferral(
      _scheduleId: BytesLike,
      _referral: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    verifyMerkle(
      caller: string,
      scheduleId: BytesLike,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  _computeReleasableAmount(
    scheduleId: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  buy(
    memberships: string,
    caller: string,
    scheduleId: BytesLike,
    amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claim(
    memberships: string,
    scheduleId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimReferral(
    memberships: string,
    scheduleId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimRoll(
    memberships: string,
    wallet: string,
    scheduleId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimUnsoldTokens(
    memberships: string,
    scheduleId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createMintingScheduleValidation(
    params: {
      start: BigNumberish;
      duration: BigNumberish;
      merkleRoot: BytesLike;
      amountTotal: BigNumberish;
      lotToken: string[];
      lotSize: BigNumberish[];
      pricePerLot: BigNumberish;
      paymentAsset: { token: string; assetType: BigNumberish };
      rollFee: BigNumberish;
      referral: string;
      referralFee: BigNumberish;
    },
    overrides?: CallOverrides
  ): Promise<void>;

  getReferral(
    record: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber] & { referral: string; referralFee: BigNumber }
  >;

  getSchedule(
    record: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [
      boolean,
      boolean,
      string,
      BigNumber,
      BigNumber,
      string,
      BigNumber,
      BigNumber,
      string[],
      BigNumber[],
      [string, number] & { token: string; assetType: number },
      BigNumber,
      BigNumber
    ] & {
      initialized: boolean;
      revoked: boolean;
      owner: string;
      start: BigNumber;
      duration: BigNumber;
      merkleRoot: string;
      amountTotal: BigNumber;
      released: BigNumber;
      lotToken: string[];
      lotSize: BigNumber[];
      paymentAsset: [string, number] & { token: string; assetType: number };
      pricePerLot: BigNumber;
      rollFee: BigNumber;
    }
  >;

  revoke(
    scheduleId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAllowlist(
    scheduleId: BytesLike,
    root: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setEternalStorage(
    _eternalStorage: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReferral(
    record: BytesLike,
    value: { referral: string; referralFee: BigNumberish },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSchedule(
    record: BytesLike,
    value: {
      initialized: boolean;
      revoked: boolean;
      owner: string;
      start: BigNumberish;
      duration: BigNumberish;
      merkleRoot: BytesLike;
      amountTotal: BigNumberish;
      released: BigNumberish;
      lotToken: string[];
      lotSize: BigNumberish[];
      paymentAsset: { token: string; assetType: BigNumberish };
      pricePerLot: BigNumberish;
      rollFee: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferScheduleOwner(
    scheduleId: BytesLike,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateReferral(
    _scheduleId: BytesLike,
    _referral: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  verifyMerkle(
    caller: string,
    scheduleId: BytesLike,
    proof: BytesLike[],
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    _computeReleasableAmount(
      scheduleId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buy(
      memberships: string,
      caller: string,
      scheduleId: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claim(
      memberships: string,
      scheduleId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    claimReferral(
      memberships: string,
      scheduleId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    claimRoll(
      memberships: string,
      wallet: string,
      scheduleId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    claimUnsoldTokens(
      memberships: string,
      scheduleId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    createMintingScheduleValidation(
      params: {
        start: BigNumberish;
        duration: BigNumberish;
        merkleRoot: BytesLike;
        amountTotal: BigNumberish;
        lotToken: string[];
        lotSize: BigNumberish[];
        pricePerLot: BigNumberish;
        paymentAsset: { token: string; assetType: BigNumberish };
        rollFee: BigNumberish;
        referral: string;
        referralFee: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    getReferral(
      record: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { referral: string; referralFee: BigNumber }
    >;

    getSchedule(
      record: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        boolean,
        boolean,
        string,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        string[],
        BigNumber[],
        [string, number] & { token: string; assetType: number },
        BigNumber,
        BigNumber
      ] & {
        initialized: boolean;
        revoked: boolean;
        owner: string;
        start: BigNumber;
        duration: BigNumber;
        merkleRoot: string;
        amountTotal: BigNumber;
        released: BigNumber;
        lotToken: string[];
        lotSize: BigNumber[];
        paymentAsset: [string, number] & { token: string; assetType: number };
        pricePerLot: BigNumber;
        rollFee: BigNumber;
      }
    >;

    revoke(scheduleId: BytesLike, overrides?: CallOverrides): Promise<void>;

    setAllowlist(
      scheduleId: BytesLike,
      root: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setEternalStorage(
      _eternalStorage: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setReferral(
      record: BytesLike,
      value: { referral: string; referralFee: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    setSchedule(
      record: BytesLike,
      value: {
        initialized: boolean;
        revoked: boolean;
        owner: string;
        start: BigNumberish;
        duration: BigNumberish;
        merkleRoot: BytesLike;
        amountTotal: BigNumberish;
        released: BigNumberish;
        lotToken: string[];
        lotSize: BigNumberish[];
        paymentAsset: { token: string; assetType: BigNumberish };
        pricePerLot: BigNumberish;
        rollFee: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    transferScheduleOwner(
      scheduleId: BytesLike,
      owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateReferral(
      _scheduleId: BytesLike,
      _referral: string,
      overrides?: CallOverrides
    ): Promise<void>;

    verifyMerkle(
      caller: string,
      scheduleId: BytesLike,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "EventClaim(address,bytes32,uint256)"(
      from?: string | null,
      scheduleId?: BytesLike | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; scheduleId: string; value: BigNumber }
    >;

    EventClaim(
      from?: string | null,
      scheduleId?: BytesLike | null,
      value?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; scheduleId: string; value: BigNumber }
    >;
  };

  estimateGas: {
    _computeReleasableAmount(
      scheduleId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buy(
      memberships: string,
      caller: string,
      scheduleId: BytesLike,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claim(
      memberships: string,
      scheduleId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimReferral(
      memberships: string,
      scheduleId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimRoll(
      memberships: string,
      wallet: string,
      scheduleId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimUnsoldTokens(
      memberships: string,
      scheduleId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createMintingScheduleValidation(
      params: {
        start: BigNumberish;
        duration: BigNumberish;
        merkleRoot: BytesLike;
        amountTotal: BigNumberish;
        lotToken: string[];
        lotSize: BigNumberish[];
        pricePerLot: BigNumberish;
        paymentAsset: { token: string; assetType: BigNumberish };
        rollFee: BigNumberish;
        referral: string;
        referralFee: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReferral(
      record: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSchedule(
      record: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    revoke(
      scheduleId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAllowlist(
      scheduleId: BytesLike,
      root: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setEternalStorage(
      _eternalStorage: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReferral(
      record: BytesLike,
      value: { referral: string; referralFee: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSchedule(
      record: BytesLike,
      value: {
        initialized: boolean;
        revoked: boolean;
        owner: string;
        start: BigNumberish;
        duration: BigNumberish;
        merkleRoot: BytesLike;
        amountTotal: BigNumberish;
        released: BigNumberish;
        lotToken: string[];
        lotSize: BigNumberish[];
        paymentAsset: { token: string; assetType: BigNumberish };
        pricePerLot: BigNumberish;
        rollFee: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferScheduleOwner(
      scheduleId: BytesLike,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateReferral(
      _scheduleId: BytesLike,
      _referral: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    verifyMerkle(
      caller: string,
      scheduleId: BytesLike,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _computeReleasableAmount(
      scheduleId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buy(
      memberships: string,
      caller: string,
      scheduleId: BytesLike,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claim(
      memberships: string,
      scheduleId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimReferral(
      memberships: string,
      scheduleId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimRoll(
      memberships: string,
      wallet: string,
      scheduleId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimUnsoldTokens(
      memberships: string,
      scheduleId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createMintingScheduleValidation(
      params: {
        start: BigNumberish;
        duration: BigNumberish;
        merkleRoot: BytesLike;
        amountTotal: BigNumberish;
        lotToken: string[];
        lotSize: BigNumberish[];
        pricePerLot: BigNumberish;
        paymentAsset: { token: string; assetType: BigNumberish };
        rollFee: BigNumberish;
        referral: string;
        referralFee: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReferral(
      record: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSchedule(
      record: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    revoke(
      scheduleId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAllowlist(
      scheduleId: BytesLike,
      root: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setEternalStorage(
      _eternalStorage: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReferral(
      record: BytesLike,
      value: { referral: string; referralFee: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSchedule(
      record: BytesLike,
      value: {
        initialized: boolean;
        revoked: boolean;
        owner: string;
        start: BigNumberish;
        duration: BigNumberish;
        merkleRoot: BytesLike;
        amountTotal: BigNumberish;
        released: BigNumberish;
        lotToken: string[];
        lotSize: BigNumberish[];
        paymentAsset: { token: string; assetType: BigNumberish };
        pricePerLot: BigNumberish;
        rollFee: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferScheduleOwner(
      scheduleId: BytesLike,
      owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateReferral(
      _scheduleId: BytesLike,
      _referral: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    verifyMerkle(
      caller: string,
      scheduleId: BytesLike,
      proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
