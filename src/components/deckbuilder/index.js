import deck from "./mockDeck.json";
import { useEffect, useMemo, useRef, useState } from "react";

const parsePxNumber = (str) => {
  const numberSeg = str.match(/\d+/);
  const num = parseInt(numberSeg);
  return num ? num : 0;
};

const Card = ({ children, row, col, selected, over, setStacks, clicked }) => {
  const cardStyle = {
    height: "90px",
    width: "60px",
    backgroundColor: "pink",
    border: "1px solid brown",
    position: "absolute",
    top: `${row * 24}px`,
    filter: "drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.25))",
    cursor: "pointer",
    userSelect: "none",
  };
  return (
    <div
      style={cardStyle}
      onMouseDown={() => {
        console.log(col, row);
        selected.current.row = row;
        selected.current.col = col;
        console.log("Selected", selected.current.col, selected.current.row);
        clicked.current = true;
      }}
      onMouseUp={() => {
        clicked.current = false;
        setStacks((prev) => {
          const newStack = [...prev];

          // Insert selected card at over dropoff point
          newStack[over.current.col].splice(
            over.current.row + 1,
            0,
            newStack[selected.current.col][selected.current.row]
          );

          // Remove selected card from stack
          if (over.current.col === selected.current.col) {
            if (over.current.row > selected.current.row) {
              // Moving to same stack and higher on the stack.
              newStack[selected.current.col].splice(selected.current.row, 1);
            } else {
              // Moving to same stack and lower on the stack. Above insert means we need + 1
              newStack[selected.current.col].splice(selected.current.row + 1, 1);
            }
          } else {
            // Moving to different stack
            newStack[selected.current.col].splice(selected.current.row, 1);
            console.log("Removing", selected.current.col, selected.current.row);
          }
          console.log(newStack);

          return newStack;
        });
      }}
      onMouseOverCapture={() => {
        over.current.row = row;
        over.current.col = col;
        console.log("over", over.current.col, over.current.row);
      }}
    >
      {children}
    </div>
  );
};

const Stack = ({ cards, col, selected, over, setStacks, clicked }) => {
  const StackContainer = ({ children }) => {
    return <div style={{ position: "relative", left: `${col * 90}px` }}>{children}</div>;
  };
  return (
    <StackContainer>
      {cards.map((card, row) => (
        <Card
          key={row}
          row={row}
          col={col}
          selected={selected}
          over={over}
          setStacks={setStacks}
          clicked={clicked}
        >
          {card.name}
          {",,,,,,,"}
          {card.cost}
        </Card>
      ))}
    </StackContainer>
  );
};

const sortStacks = () => {
  const uniques = new Set();
  const stacks = [];
  for (const el of deck) {
    if (!uniques.has(el.cost)) {
      stacks.push([]);
      uniques.add(el.cost);
    }
  }
  for (const el of deck) {
    stacks[el.cost - 1].push(el);
  }
  return stacks;
};

const Deckbuilder = () => {
  const [stacks, setStacks] = useState(sortStacks(deck));
  const areaRef = useRef();
  const clicked = useRef(false);
  const selected = useRef({ col: 0, row: 0 });
  const clickedPos = useRef({ startX: 0, startY: 0 });
  const over = useRef({ col: 0, row: 0 });

  const cardRef = useRef();

  const dimensions = useMemo(() => {
    let maxRows = 0;
    let maxCols = stacks.length;
    for (const stack of stacks) {
      maxRows = Math.max(maxRows, stack.length);
    }
    const height = 90 + (maxRows - 1) * 24;
    const width = maxCols * 60 + (maxCols - 1) * 30;
    return { height, width };
  }, [stacks]);

  useEffect(() => {
    let initialLeft = 0;
    let initialTop = 0;
    areaRef.current.addEventListener("mousedown", (e) => {
      clickedPos.current.startX = e.clientX;
      clickedPos.current.startY = e.clientY;
      clicked.current = true;

      initialLeft = cardRef.current.offsetLeft;
      initialTop = cardRef.current.offsetTop;
      console.log(initialLeft, initialTop);
    });
    areaRef.current.addEventListener("mouseup", (e) => {
      clicked.current = false;
    });
    areaRef.current.addEventListener("mousemove", (e) => {
      if (clicked.current) {
        // console.log(clickedPos.current.startY - e.clientY, e.clientX - clickedPos.current.startX);
        console.log(cardRef.current.style.left);
        console.log(parsePxNumber(cardRef.current.style.left));
        cardRef.current.style.left = `${e.clientX - clickedPos.current.startX + initialLeft}px`;
        cardRef.current.style.top = `${
          // parsePxNumber(cardRef.current.style.top) +
          e.clientY - clickedPos.current.startY + initialTop
        }px`;
      }
    });
  }, []);

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "red",
        height: dimensions.height,
        width: dimensions.width,
      }}
      ref={areaRef}
    >
      {/* {stacks.map((stack, col) => (
        <Stack
          key={col}
          cards={stack}
          col={col}
          selected={selected}
          over={over}
          setStacks={setStacks}
          clicked={clicked}
        />
      ))} */}
      <div
        style={{
          height: "90px",
          width: "60px",
          backgroundColor: "blue",
          position: "absolute",
          userSelect: "none",
        }}
        ref={cardRef}
      >
        hi
      </div>
    </div>
  );
};

export default Deckbuilder;
