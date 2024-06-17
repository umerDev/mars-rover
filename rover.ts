interface IStartingPoint {
  x: number;
  y: number;
  direction?: Direction;
}

type Direction = "N" | "S" | "E" | "W";

const move = (
  position: IStartingPoint,
  direction: Direction,
  command: string
): IStartingPoint => {
  const movement = command === "f" ? 1 : -1;
  switch (direction) {
    case "N":
      return { x: position.x, y: position.y + movement };
    case "S":
      return { x: position.x, y: position.y - movement };
    case "E":
      return { x: position.x + movement, y: position.y };
    case "W":
      return { x: position.x - movement, y: position.y };
  }
};

export const MoveRover = (
  startingPoint: IStartingPoint,
  direction: Direction,
  commands: string[]
) => {
  if (!direction) return null;

  let pos: IStartingPoint = startingPoint;

  for (let i = 0; i < commands.length; i++) {
    pos = move(pos, direction, commands[i]);
  }

  return pos;
};
