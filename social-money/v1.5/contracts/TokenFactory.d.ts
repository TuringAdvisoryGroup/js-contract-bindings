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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface TokenFactoryInterface extends ethers.utils.Interface {
  functions: {
    "TokenVestingInstance()": FunctionFragment;
    "calculateProportions(uint256,uint8,uint8,uint8)": FunctionFragment;
    "createToken(string,string,uint8,uint256,uint8,uint256,address,uint8,address,uint8)": FunctionFragment;
    "getTokenVesting()": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "migrateTokenFactory(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rollWallet()": FunctionFragment;
    "scalePercentages(uint8,uint8,uint8)": FunctionFragment;
    "setPlatformWallet(address)": FunctionFragment;
    "setTokenVesting(address)": FunctionFragment;
    "setVestingAddress(address,address,address)": FunctionFragment;
    "setVestingReferral(address,address,address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "validateTokenVestingOwner(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "TokenVestingInstance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calculateProportions",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createToken",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenVesting",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "migrateTokenFactory",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rollWallet",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "scalePercentages",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPlatformWallet",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenVesting",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setVestingAddress",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setVestingReferral",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "validateTokenVestingOwner",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "TokenVestingInstance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateProportions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenVesting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "migrateTokenFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rollWallet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "scalePercentages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPlatformWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenVesting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVestingAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVestingReferral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateTokenVestingOwner",
    data: BytesLike
  ): Result;

  events: {
    "LogTokenCreated(string,string,address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogTokenCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type LogTokenCreatedEvent = TypedEvent<
  [string, string, string, string] & {
    name: string;
    symbol: string;
    token: string;
    vestingBeneficiary: string;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class TokenFactory extends BaseContract {
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

  interface: TokenFactoryInterface;

  functions: {
    TokenVestingInstance(overrides?: CallOverrides): Promise<[string]>;

    calculateProportions(
      _totalSupply: BigNumberish,
      _initialPercentage: BigNumberish,
      _initialPlatformPercentage: BigNumberish,
      _referralPercentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [[BigNumber, BigNumber, BigNumber, BigNumber]] & {
        proportions: [BigNumber, BigNumber, BigNumber, BigNumber];
      }
    >;

    createToken(
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _totalSupply: BigNumberish,
      _initialPercentage: BigNumberish,
      _vestingPeriodInDays: BigNumberish,
      _vestingBeneficiary: string,
      _initialPlatformPercentage: BigNumberish,
      _referral: string,
      _referralPercentage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getTokenVesting(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _tokenVesting: string,
      _rollWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    migrateTokenFactory(
      _newTokenFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rollWallet(overrides?: CallOverrides): Promise<[string]>;

    scalePercentages(
      p0: BigNumberish,
      p1: BigNumberish,
      p2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [[BigNumber, BigNumber, BigNumber]] & {
        proportions: [BigNumber, BigNumber, BigNumber];
      }
    >;

    setPlatformWallet(
      _newPlatformWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTokenVesting(
      _newTokenVesting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setVestingAddress(
      _vestingBeneficiary: string,
      _token: string,
      _newVestingBeneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setVestingReferral(
      _vestingBeneficiary: string,
      _token: string,
      _vestingReferral: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validateTokenVestingOwner(
      a1: string,
      a2: string,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  TokenVestingInstance(overrides?: CallOverrides): Promise<string>;

  calculateProportions(
    _totalSupply: BigNumberish,
    _initialPercentage: BigNumberish,
    _initialPlatformPercentage: BigNumberish,
    _referralPercentage: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

  createToken(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _totalSupply: BigNumberish,
    _initialPercentage: BigNumberish,
    _vestingPeriodInDays: BigNumberish,
    _vestingBeneficiary: string,
    _initialPlatformPercentage: BigNumberish,
    _referral: string,
    _referralPercentage: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getTokenVesting(overrides?: CallOverrides): Promise<string>;

  initialize(
    _tokenVesting: string,
    _rollWallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  migrateTokenFactory(
    _newTokenFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rollWallet(overrides?: CallOverrides): Promise<string>;

  scalePercentages(
    p0: BigNumberish,
    p1: BigNumberish,
    p2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber]>;

  setPlatformWallet(
    _newPlatformWallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTokenVesting(
    _newTokenVesting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setVestingAddress(
    _vestingBeneficiary: string,
    _token: string,
    _newVestingBeneficiary: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setVestingReferral(
    _vestingBeneficiary: string,
    _token: string,
    _vestingReferral: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validateTokenVestingOwner(
    a1: string,
    a2: string,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    TokenVestingInstance(overrides?: CallOverrides): Promise<string>;

    calculateProportions(
      _totalSupply: BigNumberish,
      _initialPercentage: BigNumberish,
      _initialPlatformPercentage: BigNumberish,
      _referralPercentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    createToken(
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _totalSupply: BigNumberish,
      _initialPercentage: BigNumberish,
      _vestingPeriodInDays: BigNumberish,
      _vestingBeneficiary: string,
      _initialPlatformPercentage: BigNumberish,
      _referral: string,
      _referralPercentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getTokenVesting(overrides?: CallOverrides): Promise<string>;

    initialize(
      _tokenVesting: string,
      _rollWallet: string,
      overrides?: CallOverrides
    ): Promise<void>;

    migrateTokenFactory(
      _newTokenFactory: string,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rollWallet(overrides?: CallOverrides): Promise<string>;

    scalePercentages(
      p0: BigNumberish,
      p1: BigNumberish,
      p2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber]>;

    setPlatformWallet(
      _newPlatformWallet: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTokenVesting(
      _newTokenVesting: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setVestingAddress(
      _vestingBeneficiary: string,
      _token: string,
      _newVestingBeneficiary: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setVestingReferral(
      _vestingBeneficiary: string,
      _token: string,
      _vestingReferral: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    validateTokenVestingOwner(
      a1: string,
      a2: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "LogTokenCreated(string,string,address,address)"(
      name?: null,
      symbol?: null,
      token?: string | null,
      vestingBeneficiary?: null
    ): TypedEventFilter<
      [string, string, string, string],
      {
        name: string;
        symbol: string;
        token: string;
        vestingBeneficiary: string;
      }
    >;

    LogTokenCreated(
      name?: null,
      symbol?: null,
      token?: string | null,
      vestingBeneficiary?: null
    ): TypedEventFilter<
      [string, string, string, string],
      {
        name: string;
        symbol: string;
        token: string;
        vestingBeneficiary: string;
      }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    TokenVestingInstance(overrides?: CallOverrides): Promise<BigNumber>;

    calculateProportions(
      _totalSupply: BigNumberish,
      _initialPercentage: BigNumberish,
      _initialPlatformPercentage: BigNumberish,
      _referralPercentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createToken(
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _totalSupply: BigNumberish,
      _initialPercentage: BigNumberish,
      _vestingPeriodInDays: BigNumberish,
      _vestingBeneficiary: string,
      _initialPlatformPercentage: BigNumberish,
      _referral: string,
      _referralPercentage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getTokenVesting(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _tokenVesting: string,
      _rollWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    migrateTokenFactory(
      _newTokenFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rollWallet(overrides?: CallOverrides): Promise<BigNumber>;

    scalePercentages(
      p0: BigNumberish,
      p1: BigNumberish,
      p2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setPlatformWallet(
      _newPlatformWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTokenVesting(
      _newTokenVesting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setVestingAddress(
      _vestingBeneficiary: string,
      _token: string,
      _newVestingBeneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setVestingReferral(
      _vestingBeneficiary: string,
      _token: string,
      _vestingReferral: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validateTokenVestingOwner(
      a1: string,
      a2: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    TokenVestingInstance(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateProportions(
      _totalSupply: BigNumberish,
      _initialPercentage: BigNumberish,
      _initialPlatformPercentage: BigNumberish,
      _referralPercentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createToken(
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _totalSupply: BigNumberish,
      _initialPercentage: BigNumberish,
      _vestingPeriodInDays: BigNumberish,
      _vestingBeneficiary: string,
      _initialPlatformPercentage: BigNumberish,
      _referral: string,
      _referralPercentage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getTokenVesting(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _tokenVesting: string,
      _rollWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    migrateTokenFactory(
      _newTokenFactory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rollWallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    scalePercentages(
      p0: BigNumberish,
      p1: BigNumberish,
      p2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setPlatformWallet(
      _newPlatformWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTokenVesting(
      _newTokenVesting: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setVestingAddress(
      _vestingBeneficiary: string,
      _token: string,
      _newVestingBeneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setVestingReferral(
      _vestingBeneficiary: string,
      _token: string,
      _vestingReferral: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validateTokenVestingOwner(
      a1: string,
      a2: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
