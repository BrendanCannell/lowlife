import QuadrantLocation from "./quadrant-location"

export default ({Allocate, Recur: FromLiving}) =>
  function BranchFromLiving(size, locations) {
    let raw = Allocate()
      , partitions = [[], [], [], []]
    raw.size = size
    for (let loc of locations) {
      let {index, location} = QuadrantLocation(loc, size)
      partitions[index].push(location)
    }
    for (let i = 0; i < 4; i++)
      raw[i] = FromLiving(size / 2, partitions[i])
    return raw
  }