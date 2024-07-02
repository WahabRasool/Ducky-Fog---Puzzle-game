const game = document.getElementById("game");
const player = document.getElementById("player");
const water = document.getElementById("water");
const rock = document.getElementById("rock");
const overText = document.getElementById("over-text");
const levelText = document.getElementById("level-text");
const waterLevel = document.getElementById("water-level");
const intro = document.getElementById("intro");
const topArrow = document.getElementById("top");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");
const bottomArrow = document.getElementById("bottom");
const refresh = document.getElementById("refresh");
const fullscreen = document.getElementById("fullscreen");
const levelSelector = document.getElementById("level-selector");

let level = 0;
let width = 29;
const puzzles = [
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 2,
    level: ["-----", "-----", "--e--", "-ox--", "--x--"]
  },
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 3,
    level: ["------", "------", "---e--", "--xx--", "-o-x--", "---x--"]
  },
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 2,
    level: ["-----", "-----", "-e---", "---xx", "---ox", "----x"]
  },
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 2,
    level: ["--xxx-", "-----x", "-x-x--", "---xex", "---oxx", "----xx"]
  },
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 4,
    level: [
      "----xxx-",
      "-------x",
      "---x-x--",
      "-xx--xex",
      "xx---oxx",
      "xx----xx"
    ]
  },
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 6,
    level: [
      "----xxe",
      "----xx-",
      "xx-----",
      "----xx-",
      "----xx-",
      "-o--xx-",
      "----xx-"
    ]
  },
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 2,
    level: [
      "x---xxx",
      "x-----x",
      "x-xxx-x",
      "xe--x-x",
      "x-x-x-x",
      "xox---x",
      "x-xxxxx"
    ]
  },
  {
    initialDepth: 0,
    minDepth: 0,
    maxDepth: 2,
    level: [
      "x--exxx",
      "x-xx--x",
      "x-x---x",
      "x---x-x",
      "xxxxx-x",
      "x-----x",
      "xoxxxxx"
    ]
  },
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 2,
    level: ["x--exxx", "xo----x", "x-xxxxx"]
  },
  {
    initialDepth: 0,
    minDepth: 0,
    maxDepth: 1,
    level: ["-x-", "---", "oxe"]
  },
  {
    initialDepth: 1,
    minDepth: 0,
    maxDepth: 3,
    level: ["-x--x--", "-------", "-x--x--", "---ox--", "-x--xe-"]
  },
  {
    initialDepth: 3,
    minDepth: 0,
    maxDepth: 3,
    level: [
      "-x--x--",
      "-------",
      "-x--x--",
      "---ox--",
      "-x--xx-",
      "-x--x--",
      "-x--xe-"
    ]
  },
  {
    initialDepth: 1,
    minDepth: 0,
    maxDepth: 1,
    level: [
      "-xxx--x--",
      "x-------x",
      "xx-xx-x--",
      "----xx---",
      "-x--x--xx",
      "-x-ox-x--",
      "-x--x--e-"
    ]
  },
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 6,
    level: [
      "xxx--x--xx",
      "--------xx",
      "x-xx-xx---",
      "---xx-xx--",
      "x--xxx---x",
      "x-oxex-xx-",
      "x--x----xx"
    ]
  },
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 2,
    level: [
      "x-----x",
      "-x---x-",
      "-------",
      "-------",
      "--x-x--",
      "oxe----",
      "x-----x"
    ]
  },
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 2,
    level: [
      "x--xx---x",
      "-x-xx--x-",
      "---------",
      "---xx----",
      "--xxx-x--",
      "oxe------",
      "x---xx--x"
    ]
  },
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 1,
    level: [
      "x-----x",
      "--x--x-",
      "-e-----",
      "----x--",
      "-x-x---",
      "ox----x",
      "----xxx"
    ]
  },
  {
    initialDepth: 1,
    minDepth: 0,
    maxDepth: 1,
    level: ["-----", "---e-", "-xxx-", "--o--", "-----"]
  },
  {
    initialDepth: 3,
    minDepth: 3,
    maxDepth: 4,
    level: ["------", "----x-", "--o---", "---x--", "----e-", "-x----"]
  },
  {
    initialDepth: 0,
    minDepth: 0,
    maxDepth: 0,
    level: ["xx---x", "----x-", "-xx---", "---xx-", "e-----", "ox-x--"]
  },
  {
    initialDepth: 0,
    minDepth: 0,
    maxDepth: 0,
    level: ["xx---x", "------", "-xx---", "-e-x-x", "x-----", "-xox--"]
  },
  {
    initialDepth: 6,
    minDepth: 3,
    maxDepth: 6,
    level: [
      "-------x",
      "-x----xo",
      "--------",
      "---x----",
      "x---x---",
      "--x----x",
      "--e--xxx"
    ]
  },
  {
    initialDepth: 3,
    minDepth: 1,
    maxDepth: 3,
    level: [
      "x--x--x",
      "-x---x-",
      "---x---",
      "---x--o",
      "x------",
      "-xx--ex",
      "----x-x"
    ]
  },
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 2,
    level: [
      "x-x--x--x",
      "-x--x--x-",
      "-----x---",
      "--x--x---",
      "x--------",
      "-xx-x--ex",
      "----x-x-x",
      "xxo-x-x-x",
      "------x-x"
    ]
  },
  {
    initialDepth: 6,
    minDepth: 5,
    maxDepth: 6,
    level: [
      "x-x--x--x",
      "-x--x--x-",
      "---o-x---",
      "--x--x---",
      "x--------",
      "-xx-x---x",
      "----x-e-x",
      "xx--x-x-x",
      "------x-x"
    ]
  },
  {
    initialDepth: 2,
    minDepth: 2,
    maxDepth: 2,
    level: ["-------", "--x----", "--oe---", "-------"]
  },
  {
    initialDepth: 6,
    minDepth: 6,
    maxDepth: 6,
    level: [
      "---e----",
      "--------",
      "--x----x",
      "--x-x---",
      "----o---",
      "--x-----",
      "----x---"
    ]
  },
  {
    initialDepth: 5,
    minDepth: 5,
    maxDepth: 5,
    level: [
      "xxx--x",
      "xx---x",
      "x--x-x",
      "x---ex",
      "x-x--x",
      "xx---x",
      "xo-xxx"
    ]
  },
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 4,
    level: ["-----", "-----", "-l-e-", "-o---", "-----"]
  },
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 2,
    level: ["-l---", "l--e-", "--l--", "--ol-", "---l-"]
  },
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 2,
    level: ["xxxl-x", "xxxl-x", "xlll-x", "x---ex", "xo-lxx", "x--lxx"]
  },
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 2,
    level: ["--l--", "--l--", "-l-e-", "-o-l-", "---l-"]
  },
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 3,
    level: [
      "l---lll",
      "l-----l",
      "l-lll-l",
      "l-lel-l",
      "l-l-l-l",
      "l-l-l-l",
      "lol---l",
      "l-lllll"
    ]
  },
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 3,
    level: [
      "l---lll",
      "l-l---l",
      "l-lll-l",
      "l-e-l-l",
      "l-l-l-l",
      "lol---l",
      "l-lllll"
    ]
  },
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 2,
    level: ["l---lll", "l-l---l", "l----ll", "l-l---l", "lol-lel", "l-lllll"]
  },
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 4,
    level: [
      "l-ll---ll",
      "l----l--l",
      "l-l----ll",
      "l-l--l--l",
      "l-l-ll--l",
      "lo--le--l",
      "l---lllll"
    ]
  },
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 2,
    level: ["l-l----ll", "lo--l--el", "l------ll"]
  },
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 4,
    level: [
      "l-l-lllll",
      "l-----lll",
      "l---l--ll",
      "l--lll-ll",
      "l-o--l-el",
      "l---ll-ll"
    ]
  },
  {
    initialDepth: 6,
    minDepth: 6,
    maxDepth: 6,
    level: [
      "xxxxxlll",
      "oxe---xl",
      "--lx---l",
      "x---ll--",
      "x-------",
      "xxxlllll"
    ]
  },
  {
    initialDepth: 3,
    minDepth: 2,
    maxDepth: 3,
    level: ["x---x-ol", "-x----xl", "--l--l--", "x-e-----", "xxxlllll"]
  },
  {
    initialDepth: 2,
    minDepth: 1,
    maxDepth: 2,
    level: ["llllll", "xe-xxx", "ll--ll", "xxx--x", "llll-o", "xxxxx-"]
  },
  {
    initialDepth: 2,
    minDepth: 1,
    maxDepth: 2,
    level: [
      "llllllll",
      "xx----xx",
      "ll-ll-ll",
      "xxexx-xx",
      "llll---o",
      "xxxxxxx-"
    ]
  },
  {
    initialDepth: 2,
    minDepth: 0,
    maxDepth: 4,
    level: [
      "le--------l",
      "x-llll---xx",
      "l--lll-l-ll",
      "xx-----x-xx",
      "llll-l-l--o",
      "xxxxxlllxx-"
    ]
  },
  {
    initialDepth: 8,
    minDepth: 8,
    maxDepth: 8,
    level: [
      "lx------elx",
      "ll--xxlllll",
      "ll----lllll",
      "llxxx-xxxxl",
      "xl-------xx",
      "l--ll-ll-ll",
      "xx-----x-xx",
      "ll----xl--o",
      "xxxxxlllxx-"
    ]
  },
  {
    initialDepth: 0,
    minDepth: 0,
    maxDepth: 2,
    level: ["-e-", "hhv", "-o-"]
  },
  {
    initialDepth: 0,
    minDepth: 0,
    maxDepth: 2,
    level: ["hhv--", "-ev--", "hhv--", "-o---"]
  },
  {
    initialDepth: 0,
    minDepth: 0,
    maxDepth: 2,
    level: ["hhvvv", "hevhh", "hhhvv", "-ohhv"]
  },
  {
    initialDepth: 0,
    minDepth: 0,
    maxDepth: 2,
    level: ["hvhhvvv", "hevhhhh", "vvhhhvv", "-hhohhv"]
  },
  {
    initialDepth: 0,
    minDepth: 0,
    maxDepth: 2,
    level: ["e-hh-", "vhvhv", "-l-hl", "hvhvh", "--o--"]
  },
  {
    initialDepth: 1,
    minDepth: 0,
    maxDepth: 1,
    level: ["hhvheh", "hvhvhv", "vvvvvv", "hhhohh", "------"]
  },
  {
    initialDepth: 1,
    minDepth: 0,
    maxDepth: 2,
    level: ["xxllhev", "xvx--lv", "xvh--lv", "xh-l-hh", "x--llo-", "xvhh--l"]
  },
  {
    initialDepth: 0,
    minDepth: 0,
    maxDepth: 2,
    level: ["hvhh", "vvvh", "vhvh", "-ove"]
  },
  {
    initialDepth: 1,
    minDepth: 0,
    maxDepth: 1,
    level: ["vhhvlh", "vv-hhh", "vhvllv", "-ohlev"]
  },
  {
    initialDepth: 2,
    minDepth: 0,
    maxDepth: 2,
    level: [
      "vh--hhxh",
      "vv-hl--h",
      "vlv--llv",
      "-oh--lev",
      "vv-hl--h",
      "vv-hh--h"
    ]
  },
  {
    initialDepth: 1,
    minDepth: 1,
    maxDepth: 1,
    level: ["xlohhev"]
  }
];

let rotation = 0;
let rotationPosition = 0;
let depth = 1;
let initialPosition = [];
let position = [];
let end = [];
let rocks = [];
let startTimer;

const getLevelInfo = () => {
  const currentLevel = puzzles[level];

  const rawWidth = puzzles[level].level[0].length;
  const rawHeight = puzzles[level].level.length;
  return {
    rawWidth,
    rawHeight,
    levelWidth: rawWidth - 1,
    levelHeight: rawHeight - 1,
    currentLevel
  };
};

const changeLevelStyle = () => {
  const { rawWidth, rawHeight, currentLevel } = getLevelInfo();
  game.style.transform = `rotate(${90 * rotation}deg)`;
  water.classList = `game__water game__water--${rotationPosition}`;
  water.style = `--depth: ${depth};`;
  waterLevel.style = `--depth: ${depth}; --width: ${
    rotationPosition % 2 === 0 ? rawWidth : rawHeight
  }; --height: ${
    rotationPosition % 2 === 0 ? rawHeight : rawWidth
  }; --min-depth: ${currentLevel.minDepth}; --max-depth: ${
    currentLevel.maxDepth
  };`;
};

const topFunction = () => changeWater(true);
const leftFunction = () => rotateLevel(false);
const rightFunction = () => rotateLevel(true);
const bottomFunction = () => changeWater(false);

const registerArrows = () => {
  topArrow.addEventListener("click", topFunction);
  leftArrow.addEventListener("click", leftFunction);
  rightArrow.addEventListener("click", rightFunction);
  bottomArrow.addEventListener("click", bottomFunction);
};

const removeArrowsEvents = () => {
  topArrow.removeEventListener("click", topFunction);
  leftArrow.removeEventListener("click", leftFunction);
  rightArrow.removeEventListener("click", rightFunction);
  bottomArrow.removeEventListener("click", bottomFunction);
};

const buildLevel = () => {
  if (level === 0) {
    startTimer = Date.now();
  }
  const {
    rawWidth,
    rawHeight,
    levelWidth,
    levelHeight,
    currentLevel
  } = getLevelInfo();
  // Adapt cell size to level
  document.body.style = `--cell: ${width / rawWidth}rem`;
  // Reset rocks
  rocks = [];
  currentLevel.level.forEach((row, rowIndex) => {
    const cells = row.split("");
    cells.forEach((cell, cellIndex) => {
      const newDiv = document.createElement("div");
      newDiv.classList.add("game__cell");
      if (cell === "o") {
        initialPosition = [cellIndex, rowIndex];
        position = [cellIndex, rowIndex];
        game.appendChild(newDiv);
      } else if (cell === "x" || cell === "l") {
        rocks.push([cellIndex, rowIndex, cell === "x" ? "rock" : "lava"]);
        const rockClone = rock.cloneNode(true);
        rockClone.id = "";
        if (cell === "l") {
          rockClone.classList.add("game__cell--rock-lava");
        }
        const xFactor =
          (cellIndex > levelWidth / 2 ? levelWidth - cellIndex : cellIndex) + 1;
        const yFactor =
          (rowIndex > levelHeight / 2 ? levelHeight - rowIndex : rowIndex) + 1;
        rockClone.style.zIndex = Math.round(xFactor * yFactor) + 3;
        game.appendChild(rockClone);
      } else if (cell === "h") {
        rocks.push([cellIndex, rowIndex, "horizontal"]);
        newDiv.classList.add("game__cell--horizontal");
        game.appendChild(newDiv);
      } else if (cell === "v") {
        rocks.push([cellIndex, rowIndex, "vertical"]);
        newDiv.classList.add("game__cell--vertical");
        game.appendChild(newDiv);
      } else if (cell === "e") {
        end = [cellIndex, rowIndex];
        newDiv.classList.add("game__cell--end");
        game.appendChild(newDiv);
      } else {
        game.appendChild(newDiv);
      }
    });
  });
  rotation = 0;
  rotationPosition = 0;
  levelText.innerHTML = level;
  depth = currentLevel.initialDepth;
  game.appendChild(water);
  changeLevelStyle();
  game.appendChild(player);
};

const positionPlayer = () => {
  player.style = `--positionLeft: ${position[0]}; --positionTop: ${
    position[1]
  }; --rotation: rotate(${-90 * rotation}deg)`;
};

const removeEvent = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

const winLevel = () => {
  overText.classList.add("over-text--display");
  const winTexts = [
    "Well done! Next",
    "Ducktastic!",
    "You win!",
    "Amazing!",
    "Go go duck!",
    "You've got this!",
    "Keep going!",
    "Stay duck!",
    "Rotating to the next level...",
    "Best duck!",
    "You rock, duck!"
  ];
  overText.innerHTML = winTexts[Math.floor(Math.random() * winTexts.length)];
  document.addEventListener("keydown", removeEvent);
  removeArrowsEvents();
  setTimeout(() => {
    game.innerHTML = "";
    overText.classList.remove("over-text--display");
    level = level + 1;
    localStorage.setItem("ducky-fog", level);
    const maxLevel = localStorage.getItem("ducky-fog-max", level);
    localStorage.setItem("ducky-fog-max", maxLevel > level ? maxLevel : level);
    buildLevel();
    positionPlayer();
    document.removeEventListener("keydown", removeEvent);
    registerArrows();
  }, 500);
};

const loseLevel = () => {
  overText.classList.add("over-text--display");
  overText.classList.add("over-text--lose");
  const loseTexts = [
    "You lose! Repeat",
    "Oh no",
    "Uuuh",
    "Better duck next time",
    "You died",
    "Mamma mia",
    "Looosing",
    "That hurted",
    "Roasted duck!",
    "Burned",
    "Toasted"
  ];
  overText.innerHTML = loseTexts[Math.floor(Math.random() * loseTexts.length)];
  document.addEventListener("keydown", removeEvent);
  removeArrowsEvents();
  setTimeout(() => {
    game.innerHTML = "";
    overText.classList.remove("over-text--display");
    overText.classList.remove("over-text--lose");
    buildLevel();
    positionPlayer();
    document.removeEventListener("keydown", removeEvent);
    registerArrows();
  }, 500);
};

const nextLevel = () => {
  if (position[0] === end[0] && position[1] === end[1]) {
    if (level === puzzles.length - 1) {
      // If this was the last level: win the game
      overText.classList.add("over-text--display");
      overText.classList.add("over-text--win");
      if (startTimer) {
        const s = (Date.now() - startTimer) / 1000;
        overText.innerHTML = `The end!<br/><span class="over-text__timer">${parseInt(
          s / 60 / 60
        )}h ${parseInt((s / 60) % 60)}m ${parseInt(s % 60)}s</span>`;
      } else {
        overText.innerHTML = "The end!";
      }

      document.addEventListener("keydown", removeEvent);
      removeArrowsEvents();
    } else {
      winLevel();
    }
  }
};

const findRocks = (axis, perpendicularAxis, movingForward) => {
  const relevantRocks = rocks
    .filter((rock) => rock[axis] === position[axis]) // Filtering rocks in this axis
    .filter((rock) =>
      movingForward
        ? rock[perpendicularAxis] > position[perpendicularAxis]
        : rock[perpendicularAxis] < position[perpendicularAxis]
    ); // Filtering rocks that are in the desired direction

  const filteredRelevantRocks = relevantRocks.filter((rock) => {
    if (axis === 0 && rock[2] !== "vertical") {
      return rock;
    } else if (axis === 1 && rock[2] !== "horizontal") {
      return rock;
    }
  });

  if (filteredRelevantRocks.length) {
    // If there are rocks in this path
    const rockPosition = movingForward
      ? Math.min(
          ...filteredRelevantRocks.map((rock) => rock[perpendicularAxis])
        )
      : Math.max(
          ...filteredRelevantRocks.map((rock) => rock[perpendicularAxis])
        );
    const relevantRock = filteredRelevantRocks.filter(
      (rock) => rock[perpendicularAxis] === rockPosition
    )[0];

    const maxmin = movingForward ? rockPosition - 1 : rockPosition + 1;

    return { maxmin, rockPosition, relevantRock };
  }
  return { maxmin: undefined, rockPostion: undefined, relevantRock: undefined };
};

// true = right, false = left
const rotateLevel = (direction) => {
  const { levelWidth, levelHeight } = getLevelInfo();
  const y1 = position[1];
  const y2 = levelHeight - y1;
  const x1 = position[0];
  const x2 = levelWidth - x1;

  const next = [...position];

  const maxminCondition = (position, maxmin, next) => {
    return (
      maxmin !== undefined &&
      ((position >= maxmin && maxmin >= next) ||
        (position <= maxmin && maxmin <= next))
    );
  };

  if (rotationPosition === 0) {
    const next = direction ? levelWidth - depth : depth;
    const { maxmin, rockPosition, relevantRock } = findRocks(
      1,
      0,
      next - position[0] > 0
    );

    if (maxminCondition(position[0], maxmin, next)) {
      if (relevantRock[2] === "lava" && next !== maxmin) {
        position[0] = rockPosition;
        loseLevel();
      } else {
        position[0] = maxmin;
      }
    } else {
      position[0] = next;
    }
  } else if (rotationPosition === 1) {
    const next = direction ? depth : levelHeight - depth;
    const { maxmin, rockPosition, relevantRock } = findRocks(
      0,
      1,
      next - position[1] > 0
    );

    if (maxminCondition(position[1], maxmin, next)) {
      if (relevantRock[2] === "lava" && next !== maxmin) {
        position[1] = rockPosition;
        loseLevel();
      } else {
        position[1] = maxmin;
      }
    } else {
      position[1] = next;
    }
  } else if (rotationPosition === 2) {
    const next = direction ? depth : levelWidth - depth;
    const { maxmin, rockPosition, relevantRock } = findRocks(
      1,
      0,
      next - position[0] > 0
    );

    if (maxminCondition(position[0], maxmin, next)) {
      if (relevantRock[2] === "lava" && next !== maxmin) {
        position[0] = rockPosition;
        loseLevel();
      } else {
        position[0] = maxmin;
      }
    } else {
      position[0] = next;
    }
  } else {
    const next = direction ? levelHeight - depth : depth;
    const { maxmin, rockPosition, relevantRock } = findRocks(
      0,
      1,
      next - position[1] > 0
    );

    if (maxminCondition(position[1], maxmin, next)) {
      if (relevantRock[2] === "lava" && next !== maxmin) {
        position[1] = rockPosition;
        loseLevel();
      } else {
        position[1] = maxmin;
      }
    } else {
      position[1] = next;
    }
  }

  if (direction) {
    rotationPosition = (rotationPosition + 1) % 4;
  } else {
    rotationPosition = rotationPosition === 0 ? 3 : rotationPosition - 1;
  }

  waterLevel.classList.add("game__water-level--hidden");
  setTimeout(
    () => waterLevel.classList.remove("game__water-level--hidden"),
    300
  );

  rotation = direction ? rotation + 1 : rotation - 1;
  changeLevelStyle();
  positionPlayer();
  nextLevel();
};

// true = top, false = bottom
const changeWater = (direction) => {
  const { levelWidth, levelHeight, currentLevel } = getLevelInfo();
  // Avoid change if depth is max or min
  if (
    (direction && depth === currentLevel.maxDepth) ||
    (!direction && depth === currentLevel.minDepth)
  ) {
    return;
  }

  const y1 = position[1];
  const y2 = levelHeight - y1;
  const x1 = position[0];
  const x2 = levelWidth - x1;

  let playerOutWater = false;

  // Avoid change if depth doesnt match player
  playerOutWater =
    (rotationPosition === 0 && depth !== y2) ||
    (rotationPosition === 1 && depth !== x2) ||
    (rotationPosition === 2 && depth !== y1) ||
    (rotationPosition === 3 && depth !== x1);

  depth = direction ? depth + 1 : depth - 1;
  changeLevelStyle();

  if (playerOutWater) {
    return;
  }

  const next = [...position];

  if (rotationPosition === 0) {
    next[1] = direction ? position[1] - 1 : position[1] + 1;
  } else if (rotationPosition === 1) {
    next[0] = direction ? position[0] - 1 : position[0] + 1;
  } else if (rotationPosition === 2) {
    next[1] = direction ? position[1] + 1 : position[1] - 1;
  } else {
    next[0] = direction ? position[0] + 1 : position[0] - 1;
  }

  const relevantRock = rocks.find(
    (rock) => rock[0] === next[0] && rock[1] === next[1]
  );

  if (!relevantRock) {
    position = next;
  } else if (relevantRock[2] === "lava") {
    position = next;
    loseLevel();
  } else if (
    rotationPosition % 2 === 0
      ? relevantRock[2] === "vertical"
      : relevantRock[2] === "horizontal"
  ) {
    position = next;
  }
  positionPlayer();
  nextLevel();
};

const removeTutorial = () => {
  overText.classList.remove("over-text--display");
  overText.classList.remove("over-text--tutorial");
};

const buildLevelSelector = () => {
  const maxLevel = localStorage.getItem("ducky-fog-max", level) ?? level;
  puzzles.forEach((puzzle, index) => {
    const newButton = document.createElement("div");
    newButton.innerHTML = index;
    newButton.classList.add("level-selector__button");
    if (index === level) {
      newButton.classList.add("level-selector__button--current");
    }
    if (index <= maxLevel) {
      newButton.addEventListener("click", () => {
        level = index;
        localStorage.setItem("ducky-fog", level);
        levelSelector.classList.remove("level-selector--active");
        game.innerHTML = "";
        buildLevel();
        positionPlayer();
      });
    } else {
      newButton.classList.add("level-selector__button--disabled");
    }
    levelSelector.appendChild(newButton);
  });
  levelSelector.classList.add("level-selector--active");
};

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const storedLevel = localStorage.getItem("ducky-fog");
    if (storedLevel) {
      level = Number(storedLevel);
      buildLevelSelector();
    } else {
      overText.classList.add("over-text--display");
      overText.classList.add("over-text--tutorial");
      overText.addEventListener("click", removeTutorial);
      overText.innerHTML =
        "Use arrow keys or buttons to rotate and control water";
    }
    // Init
    buildLevel();
    positionPlayer();
    registerArrows();
  },
  false
);

intro.addEventListener("click", () => {
  intro.classList.add("intro--hidden");
  setTimeout(() => {
    removeTutorial();
    overText.removeEventListener("click", removeTutorial);
  }, 4000);
});

refresh.addEventListener("click", () => {
  game.innerHTML = "";
  buildLevel();
  positionPlayer();
});

fullscreen.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    rotateLevel(true);
  } else if (event.key === "ArrowLeft") {
    rotateLevel(false);
  } else if (event.key === "ArrowDown") {
    changeWater(false);
  } else if (event.key === "ArrowUp") {
    changeWater(true);
  }
});