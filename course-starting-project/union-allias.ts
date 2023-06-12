type Combinable = string | number;

const combine = (n1: Combinable, n2: Combinable, resultType: string) => {
  let result;

  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  if (resultType === "num") {
    console.log(+result);
  } else {
    console.log(result.toString);
  }
};

const input1 = 2;
const input2 = "3";

combine(input1, input2, "num");
