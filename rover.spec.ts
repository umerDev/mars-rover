import { MoveRover } from "./rover";

describe("Rover", () => {
  test("should move rover forward on North", () => {
    //arrange
    const startingPoint = { x: 0, y: 0 }; // N would increase y + 1
    const direction = "N";
    const commands = ["f", "b"];

    //act
    const moveRover = MoveRover(startingPoint, direction, commands);

    ///assert
    expect(moveRover).toEqual({ x: 0, y: 0 });
  });

  test("should move rover forward on West", () => {
    //arrange
    const startingPoint = { x: 0, y: 0 };
    const direction = "W";
    const commands = ["f", "f"];

    //act
    const moveRover = MoveRover(startingPoint, direction, commands);

    ///assert
    expect(moveRover).toEqual({ x: -2, y: 0 });
  });

  test("should move rover forward on East", () => {
    //arrange
    const startingPoint = { x: 0, y: 0 };
    const direction = "E";
    const commands = ["b", "b"];

    //act
    const moveRover = MoveRover(startingPoint, direction, commands);

    ///assert
    expect(moveRover).toEqual({ x: -2, y: 0 });
  });

  test("should move rover forward on East", () => {
    //arrange
    const startingPoint = { x: 0, y: 0 };
    const direction = "E";
    const commands = ["f", "b", "f"];

    //act
    const moveRover = MoveRover(startingPoint, direction, commands);

    ///assert
    expect(moveRover).toEqual({ x: 1, y: 0 });
  });
});

describe("turn rover", () => {
  test("turn rover right", () => {
    //arrange
    const startingPoint = { x: 0, y: 0 };
    const direction = "E";
    const commands = ["l", "f"];

    const moveRover = MoveRover(startingPoint, direction, commands);

    expect(moveRover).toEqual({ x: 0, y: 1, direction: "N" });
  });
});
