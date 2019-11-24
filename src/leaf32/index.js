import * as U from "../util"

import {SIZE, WEST_EDGE, EAST_EDGE} from "./constants"
import Allocate from "./allocate"
import BoundingRect from "./bounding-rect"
import CanonicalizeConstructor from "./canonical-constructor"
import CheckBounds from "./check-bounds"
import Copy from "./copy"
import Equal from "./equal"
import Free from "./free"
import FromLiving from "./from-living"
import Get from "./get"
import GetCorner from "./get-corner"
import GetEdge from "./get-edge"
import GetHash from "./get-hash"
import GetPopulation from "./get-population"
import Living from "./living"
import Next from "./next"
import PrimitiveGet from "./primitive-get"
import Render from "./render"
import Set from "./set"
import SetDerived from "./set-derived"
let raw = {
  SIZE, WEST_EDGE, EAST_EDGE,
  Allocate,
  BoundingRect,
  CanonicalizeConstructor,
  CheckBounds,
  Copy,
  Equal,
  Free,
  FromLiving,
  Get,
  GetEdge,
  GetCorner,
  GetHash,
  GetPopulation,
  Living,
  Next,
  PrimitiveGet,
  Render,
  Set,
  SetDerived
}
let withAllocate = {
  ...raw,
  ...U.map(fn => fn({Allocate}))({BoundingRect, Copy, FromLiving, Get, Living, Next, Set})
}
let constructors = U.pick(['Copy', 'FromLiving', 'Next', 'Set'])(withAllocate)
let withSetDerived = {
  ...withAllocate,
  ...U.map(fn => (...args) => SetDerived(fn(...args)))(constructors)
}

export {withSetDerived as Test}

export default raw