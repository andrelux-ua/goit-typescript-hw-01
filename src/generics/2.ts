type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const topObject = { name: "Mango", color: "yellow" };
const bottomObject = { position: 1, weight: 200 };

const result = compare(topObject, bottomObject);
console.log(result);
